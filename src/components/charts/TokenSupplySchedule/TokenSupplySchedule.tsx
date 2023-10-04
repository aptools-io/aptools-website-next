// React
import React from "react";

// ECharts
import ReactECharts from "echarts-for-react";

// Styles
import classNames from "classnames";
import moment from "moment";
import styles from "./TokenSupplySchedule.module.scss";

// Other
import chartOptions from "./data/chartOptions";
import vestingsData from "./data/data";

const TokenSupplySchedule: React.FC<IComponent> = ({ className }) => {
    const classes = classNames([styles["dex-volume"], className]);

    const data = vestingsData.map((item, index) => {
        return {
            category: item.name,
            chart: item.data.map((item, index) => {
                return {
                    x: moment(item[0]).format("YYYY-MM-DD"),
                    y: item[1]
                };
            })
        };
    });

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
