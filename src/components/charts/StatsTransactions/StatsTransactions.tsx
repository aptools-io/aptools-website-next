// React
import React from "react";

// Redux
import { useSelector } from "react-redux";
import { IRootState } from "src/scripts/redux/store";

// ECharts
import ReactECharts from "echarts-for-react";

// Styles
import classNames from "classnames";
import styles from "./StatsTransactions.module.scss";

// Other
import chartOptions from "./data/chartOptions";



const StatsTransactions: React.FC<IComponent> = ({
    className 
}) => {
    const { data: generalData } = useSelector((state: IRootState) => state.statsGeneral);
    const { blockchain_info } = generalData || {};
    
    const {
        tps_plot_24h
    } = blockchain_info || {};

    const classes = classNames([
        styles["stats-transactions"],
        className
    ]);

    if(!blockchain_info) return <></>

    return (
        <div className={classes}>
            <div className={styles["stats-transactions__inner"]}>
                <ReactECharts style={{height: "120px", width: "100%"}} theme={""} option={chartOptions(tps_plot_24h)} />
            </div>
        </div>
    );
};

export default StatsTransactions;
