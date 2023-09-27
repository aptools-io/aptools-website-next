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
import styles from "./TokenPrice.module.scss";

// Other
import chartOptions from "./data/chartOptions";

const TokenPrice: React.FC<IComponent> = ({ className }) => {
    const { data: generalData } = useSelector(
        (state: IRootState) => state.statsGeneral
    );
    const { blockchain_info } = generalData || {};

    const { token_price_chart } = blockchain_info || {};
    const allTimePrices = token_price_chart || ({} as any);

    const classes = classNames([styles["token-price"], className]);
    const [volume, setVolume] = useState("all");
    const [volumes, setVolumes] = useState({
        "7d": [],
        "30d": [],
        "90d": [],
        all: allTimePrices
    });

    useEffect(() => {
        const dailyWalletsUsage = {
            "7d": [],
            "30d": [],
            "90d": [],
            all: allTimePrices
        } as IApiWalletsUsage;
        allTimePrices?.forEach((el) => {
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
            name: "Token Price",
            chart: volumes[volume]
        }
    ];

    return (
        <div className={classes}>
            <strong className={"chart__title"}>
                <span>Token Price</span>
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
                {allTimePrices?.length ? (
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

export default TokenPrice;
