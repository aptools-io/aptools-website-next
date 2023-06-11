// React
import React from "react";

// Redux
import { useSelector } from "react-redux";
import { IRootState } from "src/scripts/redux/store";

// ECharts
import ReactECharts from "echarts-for-react";

// Styles
import classNames from "classnames";
import styles from "./DailyActiveWallets.module.scss";

// Other
import chartOptions from "./data/chartOptions";



const DailyActiveWallets: React.FC<IComponent> = ({
    className 
}) => {
    const { data: generalData } = useSelector((state: IRootState) => state.statsGeneral);
    const { 
        transactions_plot: { daily: dailyTransactions = null }, 
        addresses_plot: { daily: dailyAddresses = null } 
    } = generalData || {};
    
    const classes = classNames([
        styles["daily-active-wallets"],
        className
    ]);


    if(!dailyTransactions || !dailyAddresses) return <></>;
    
    const data = [
        {
            "name": "Daily Active Transactions",
            "chart": dailyTransactions,
        },
        {
            "name": "Daily Active Addresses",
            "chart": dailyAddresses,
        }
    ]

    return (
        <div className={classes}>
            <strong className={"chart__title"}>Daily Active Wallets</strong>
            <div className={"chart__inner"}>
                <ReactECharts style={{height: "352px", width: "100%"}} theme={""} option={chartOptions(data)} />
            </div>
        </div>
    );
};

export default DailyActiveWallets;
