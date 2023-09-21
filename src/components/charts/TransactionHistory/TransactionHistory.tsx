// React
import React, { useEffect, useState } from "react";

// Redux
import { useSelector } from "react-redux";
import { IRootState } from "src/scripts/redux/store";

// ECharts
import ReactECharts from "echarts-for-react";

// Styles
import classNames from "classnames";
import { dateDiffInDays } from "src/scripts/util/timeConvert";
import { Plug } from "src/components/ui";
import styles from "./TransactionHistory.module.scss";

// Other
import chartOptions from "./data/chartOptions";

const TransactionHistory: React.FC<IComponent> = ({ className }) => {
    const { data: generalData } = useSelector(
        (state: IRootState) => state.statsGeneral
    );
    const { blockchain_info } = generalData || {};

    const { trans_history } = blockchain_info || {};
    const { all_time: allTimeTrans = [] } = trans_history || {};

    const classes = classNames([styles["token-price"], className]);
    const [volume, setVolume] = useState("all");
    const [volumes, setVolumes] = useState({
        "7d": [],
        "30d": [],
        "90d": [],
        all: allTimeTrans
    });

    useEffect(() => {
        const dailyWalletsUsage = {
            "7d": [],
            "30d": [],
            "90d": [],
            all: allTimeTrans
        } as IApiWalletsUsage;
        allTimeTrans?.forEach((el) => {
            if (dateDiffInDays(new Date(el.x), new Date()) <= 8)
                dailyWalletsUsage["7d"].push(el);
            if (dateDiffInDays(new Date(el.x), new Date()) <= 31)
                dailyWalletsUsage["30d"].push(el);
            if (dateDiffInDays(new Date(el.x), new Date()) <= 91)
                dailyWalletsUsage["90d"].push(el);
        });
        setVolumes(dailyWalletsUsage);
    }, []);

    const data = [
        {
            name: "Aptos Transaction History",
            chart: volumes?.[volume]?.length
                ? [...volumes[volume]].slice(0, volumes[volume].length - 1)
                : []
        }
    ];
    return (
        <div className={classes}>
            <strong className={"chart__title"}>
                <span>Aptos Transaction History</span>
                <span className={"chart__switcher"}>
                    <button
                        className={classNames([{ active: volume === "7d" }])}
                        onClick={() => {
                            setVolume("7d");
                        }}>
                        7D
                    </button>
                    <button
                        className={classNames([{ active: volume === "30d" }])}
                        onClick={() => {
                            setVolume("30d");
                        }}>
                        30D
                    </button>
                    <button
                        className={classNames([{ active: volume === "90d" }])}
                        onClick={() => {
                            setVolume("90d");
                        }}>
                        90D
                    </button>
                    <button
                        className={classNames([{ active: volume === "all" }])}
                        onClick={() => {
                            setVolume("all");
                        }}>
                        ALL
                    </button>
                </span>
            </strong>
            <div className={"chart__inner"}>
                {allTimeTrans?.length ? (
                    <ReactECharts
                        className={"chart__wrapper"}
                        theme={""}
                        option={chartOptions(data)}
                    />
                ) : (
                    <Plug noData />
                )}
            </div>
        </div>
    );
};

export default TransactionHistory;
