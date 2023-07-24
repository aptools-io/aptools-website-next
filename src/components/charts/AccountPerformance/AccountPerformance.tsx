// React
import React, { useState } from "react";

// Redux
import { useSelector } from "react-redux";
import { IRootState } from "src/scripts/redux/store";

// ECharts
import ReactECharts from "echarts-for-react";

// Components

// Styles
import classNames from "classnames";
import { Plug } from "src/components/ui";
import styles from "./AccountPerformance.module.scss";

// Other
import chartOptions from "./data/chartOptions";


const dummyData = [
    {
        "x": "2023-07-13",
        "y":  1250
    },
    {
        "x": "2023-07-14",
        "y": 1600
    },
    {
        "x": "2023-07-15",
        "y": 1500
    },
    {
        "x": "2023-07-16",
        "y": 1800
    },
    {
        "x": "2023-07-17",
        "y": 1800
    },
    {
        "x": "2023-07-18",
        "y": 1700
    },
    {
        "x": "2023-07-19",
        "y": 2250
    }
];

const AccountPerformance: React.FC<IComponent> = ({
    className 
}) => {
    const [range, setRange] = useState("7d"); 

    const classes = classNames([
        styles["account-performance"],
        "chart",
        className
    ]);

    /* if(!blockchain_info || !low_high_price) return <></>; */

    return (
        <div className={classes}>
            <strong className={"chart__title normal"}>
                <span>Performance</span>
                <span className={"chart__switcher"}>
                    <button className={classNames([ { "active": range === "7d" } ])} onClick={() => setRange("7d")}>7D</button>
                    <button className={classNames([ { "active": range === "30d" } ])} onClick={() => setRange("30d")}>30D</button>
                    <button className={classNames([ { "active": range === "90d" } ])} onClick={() => setRange("90d")}>90D</button>
                    <button className={classNames([ { "active": range === "all" } ])} onClick={() => setRange("all")}>ALL</button>
                </span>
            </strong>
            <div className={styles["account-performance__inner"]}>
                <Plug />
                <ReactECharts style={{height: "200px", width: "100%"}} theme={""} option={chartOptions(dummyData)} />
            </div>
        </div>
    );
};

export default AccountPerformance;
