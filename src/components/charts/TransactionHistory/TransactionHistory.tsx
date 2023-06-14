// React
import React, { useMemo, useState } from "react";

// Redux
import { useSelector } from "react-redux";
import { IRootState } from "src/scripts/redux/store";

// ECharts
import ReactECharts from "echarts-for-react";

// Styles
import classNames from "classnames";
import { dateDiffInDays } from "src/scripts/util/timeConvert";
import styles from "./TransactionHistory.module.scss";

// Other
import chartOptions from "./data/chartOptions";



const TransactionHistory: React.FC<IComponent> = ({
    className 
}) => {
    const { data: generalData } = useSelector((state: IRootState) => state.statsGeneral);
    const { blockchain_info } = generalData || {};

    const { trans_history } = blockchain_info || {};
    const { all_time: allTimeTrans = [] } = trans_history || {};
    
    const classes = classNames([
        styles["token-price"],
        className
    ]);
    const [volume, setVolume] = useState("all"); 
    const [volumes, setVolumes] = useState({"7d": [], "14d": [],"30d": [], "all": allTimeTrans}); 

    if(!allTimeTrans) return <></>;
    
    useMemo(() => {
        const dailyWalletsUsage = {"7d": [], "14d": [],"30d": [], "all": allTimeTrans} as IApiWalletsUsage;
        allTimeTrans.forEach(el => {
            if(dateDiffInDays(new Date(el.x), new Date()) <= 8) dailyWalletsUsage["7d"].push(el);
            if(dateDiffInDays(new Date(el.x), new Date()) <= 15) dailyWalletsUsage["14d"].push(el);
            if(dateDiffInDays(new Date(el.x), new Date()) <= 31) dailyWalletsUsage["30d"].push(el);
        });
        setVolumes(dailyWalletsUsage);
    }, [volume]);

    const data = [
        {
            "name": "Aptos Transaction History",
            "chart": [...volumes[volume]].slice(0, volumes[volume].length - 1)
        },
    ];
    return (
        <div className={classes}>
            <strong className={"chart__title"}>
                <span>Aptos Transaction History</span>
                <span className={"chart__switcher"}>
                    <button className={classNames([ { "active": volume === "7d" } ])} onClick={() => setVolume(e => e = "7d")}>7D</button>
                    <button className={classNames([ { "active": volume === "14d" } ])} onClick={() => setVolume(e => e = "14d")}>14D</button>
                    <button className={classNames([ { "active": volume === "30d" } ])} onClick={() => setVolume(e => e = "30d")}>30D</button>
                    <button className={classNames([ { "active": volume === "all" } ])} onClick={() => setVolume(e => e = "all")}>ALL</button>
                </span>
            </strong>
            <div className={"chart__inner"}>
                <ReactECharts className={"chart__wrapper"} theme={""} option={chartOptions(data)} />
            </div>
        </div>
    );
};

export default TransactionHistory;
