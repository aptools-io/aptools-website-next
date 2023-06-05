// React
import React from "react";

// ECharts
import ReactECharts from "echarts-for-react";

// Styles
import classNames from "classnames";
import styles from "./StatsTransactions.module.scss";

// Other
import chartOptions from "./data/chartOptions";

const StatsTransactions: React.FC<IStatsProps> = ({
    blockchainInfo,
    className 
}) => {
    const {
        tps_plot_24h
    } = blockchainInfo || {};

    const classes = classNames([
        styles["stats-transactions"],
        className
    ]);

    return (
        <div className={classes}>
            <ReactECharts style={{height: "78px", width: "100%"}} theme={""} option={chartOptions(tps_plot_24h)} />
        </div>
    );
};

export default StatsTransactions;
