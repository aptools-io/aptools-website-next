// React
import React, { useEffect, useState } from "react";

// Redux
import { useSelector } from "react-redux";
import { IRootState } from "src/scripts/redux/store";

// ECharts
import ReactECharts from "echarts-for-react";

// Components

// Styles
import classNames from "classnames";
import { Plug, Skeleton } from "src/components/ui";
import { dateDiffInDays } from "src/scripts/util/timeConvert";
import styles from "./AccountPerformance.module.scss";

// Other
import chartOptions from "./data/chartOptions";


const AccountPerformance: React.FC<IComponent> = ({
    className 
}) => {
    const { accountStats, accountsLoading: loading = false } = useSelector((state: IRootState) => state.accounts);
    const { portfolio_chart = [] } = accountStats || {};

    const [volume, setVolume] = useState("all"); 
    const [volumes, setVolumes] = useState({"7d": [], "30d": [],"90d": [], "all": portfolio_chart}); 

    useEffect(() => {
        const performance = {"7d": [], "30d": [], "90d": [], "all": portfolio_chart} as IApiAccountsPortfolioUsage;
        portfolio_chart.forEach(el => {
            if(dateDiffInDays(new Date(el.x), new Date()) <= 8) performance["7d"].push(el);
            if(dateDiffInDays(new Date(el.x), new Date()) <= 31) performance["30d"].push(el);
            if(dateDiffInDays(new Date(el.x), new Date()) <= 93) performance["90d"].push(el);
        });
        setVolumes(performance);
    }, [volume, portfolio_chart]);


    if(loading) return <Skeleton style={{ height: 260 }} />;

    const classes = classNames([
        styles["account-performance"],
        "chart",
        className
    ]);

    const data = [
        {
            "name": "Aptos Transaction History",
            "chart": [...volumes[volume]].slice(0, volumes[volume].length - 1)
        },
    ];

    /* if(!blockchain_info || !low_high_price) return <></>; */

    return (
        <div className={classes}>
            <strong className={"chart__title normal"}>
                <span>Performance</span>
                <span className={"chart__switcher"}>
                    <button className={classNames([ { "active": volume === "7d" } ])} onClick={() => setVolume("7d")}>7D</button>
                    <button className={classNames([ { "active": volume === "30d" } ])} onClick={() => setVolume("30d")}>30D</button>
                    <button className={classNames([ { "active": volume === "90d" } ])} onClick={() => setVolume("90d")}>90D</button>
                    <button className={classNames([ { "active": volume === "all" } ])} onClick={() => setVolume("all")}>ALL</button>
                </span>
            </strong>
            <div className={styles["account-performance__inner"]}>
                {!data[0]?.chart?.length && <Plug noDataAbsolute />}
                <ReactECharts style={{height: "200px", width: "100%"}} theme={""} option={chartOptions(data)} />
            </div>
        </div>
    );
};

export default AccountPerformance;
