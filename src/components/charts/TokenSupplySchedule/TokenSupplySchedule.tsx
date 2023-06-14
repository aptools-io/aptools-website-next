// React
import React, { useState } from "react";

// ECharts
import ReactECharts from "echarts-for-react";

// Styles
import classNames from "classnames";
import styles from "./TokenSupplySchedule.module.scss";

// Other
import chartOptions from "./data/chartOptions";



const TokenSupplySchedule: React.FC<IComponent> = ({
    className 
}) => {
   /*  const { data: generalData } = useSelector((state: IRootState) => state.statsGeneral);
    const { dex_volumes } = generalData || {};
    const [volume, setVolume] = useState(false);  */

    const classes = classNames([
        styles["dex-volume"],
        className
    ]);

    /* HARDCODE */
    const data = [
        {
            "category": "Stacking Rewards",
            "chart": [
                {x: "2022-10-19", y: 0},
                {x: "2022-10-20", y: 15},
                {x: "2022-10-21", y: 22},
                {x: "2022-10-22", y: 25},
                {x: "2022-10-23", y: 26},
                {x: "2022-10-24", y: 26},
                {x: "2022-10-25", y: 28},
             ]
        },
        {
            "category": "Community",
            "chart": [
                {x: "2022-10-19", y: 0},
                {x: "2022-10-20", y: 15},
                {x: "2022-10-21", y: 23},
                {x: "2022-10-22", y: 26},
                {x: "2022-10-23", y: 28},
                {x: "2022-10-24", y: 29},
                {x: "2022-10-25", y: 32},
             ]
        },
        {
            "category": "Core contributors",
            "chart": [
                {x: "2022-10-19", y: 0},
                {x: "2022-10-20", y: 15},
                {x: "2022-10-21", y: 25},
                {x: "2022-10-22", y: 28},
                {x: "2022-10-23", y: 32},
                {x: "2022-10-24", y: 35},
                {x: "2022-10-25", y: 36},
             ]
        },
        {
            "category": "Foundation",
            "chart": [
                {x: "2022-10-19", y: 0},
                {x: "2022-10-20", y: 15},
                {x: "2022-10-21", y: 26},
                {x: "2022-10-22", y: 30},
                {x: "2022-10-23", y: 34},
                {x: "2022-10-24", y: 36},
                {x: "2022-10-25", y: 40},
             ]
        },
        {
            "category": "Investors",
            "chart": [
                {x: "2022-10-19", y: 0},
                {x: "2022-10-20", y: 15},
                {x: "2022-10-21", y: 28},
                {x: "2022-10-22", y: 34},
                {x: "2022-10-23", y: 37},
                {x: "2022-10-24", y: 42},
                {x: "2022-10-25", y: 46},
             ]
        },
    ];

    /* if(!dex_volumes) return <></> */

    return (
        <div className={classes}>
            <strong className={"chart__title"}>
                <span>Estimated Token Supply Schedule</span>
            </strong>
            <div className={"chart__inner"}>
                <ReactECharts className={"chart__wrapper"} theme={""} notMerge={true} option={chartOptions(data)} />
            </div>
        </div>
    );
};

export default TokenSupplySchedule;
