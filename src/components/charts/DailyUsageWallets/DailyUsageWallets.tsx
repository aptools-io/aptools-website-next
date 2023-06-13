// React
import React, { useState, useMemo } from "react";

// Redux
import { useSelector } from "react-redux";
import { IRootState } from "src/scripts/redux/store";

// ECharts
import ReactECharts from "echarts-for-react";

// Styles
import classNames from "classnames";
import { dateDiffInDays } from "src/scripts/util/timeConvert";
import styles from "./DailyUsageWallets.module.scss";

// Other
import chartOptions from "./data/chartOptions";

// Utils


const DailyUsageWallets: React.FC<IComponent> = ({
    className 
}) => {
    const { data: generalData } = useSelector((state: IRootState) => state.statsGeneral);
    const { 
        addresses_plot
    } = generalData || {};

    const { daily: dailyAddresses } = addresses_plot || {};
    
    const classes = classNames([
        styles["daily-new-wallets"],
        className
    ]);
    const [volume, setVolume] = useState("30d"); 
    const [volumes, setVolumes] = useState({"7d": [], "14d": [],"30d": [], "all": dailyAddresses}); 

    if(!dailyAddresses) return <></>;
   
    useMemo(() => {
        const dailyWalletsUsage = {"7d": [], "14d": [],"30d": [], "all": dailyAddresses} as IApiWalletsUsage;
        dailyAddresses.forEach(el => {
            if(dateDiffInDays(new Date(el.x), new Date()) <= 8) dailyWalletsUsage["7d"].push(el);
            if(dateDiffInDays(new Date(el.x), new Date()) <= 15) dailyWalletsUsage["14d"].push(el);
            if(dateDiffInDays(new Date(el.x), new Date()) <= 31) dailyWalletsUsage["30d"].push(el);
        });
        setVolumes(dailyWalletsUsage);
    }, [volume]);

    const data = {
        "name": "Daily Wallets Usage",
        "chart": volumes[volume],
    };

    return (
        <div className={classes}>
            <strong className={"chart__title"}>
                <span>Daily Wallets Usage</span>
                <span className={"chart__switcher"}>
                    <button className={classNames([ { "active": volume === "7d" } ])} onClick={() => setVolume(e => e = "7d")}>7D</button>
                    <button className={classNames([ { "active": volume === "14d" } ])} onClick={() => setVolume(e => e = "14d")}>14D</button>
                    <button className={classNames([ { "active": volume === "30d" } ])} onClick={() => setVolume(e => e = "30d")}>30D</button>
                    <button className={classNames([ { "active": volume === "all" } ])} onClick={() => setVolume(e => e = "all")}>ALL</button>
                </span>
            </strong>
            
            <div className={"chart__inner"}>
                <ReactECharts style={{height: "352px", width: "100%"}} theme={""} option={chartOptions(data)} />
            </div>
        </div>
    );
};

export default DailyUsageWallets;
