// React
import React from "react";

// Redux
import { useSelector } from "react-redux";
import { IRootState } from "src/scripts/redux/store";

// ECharts
import ReactECharts from "echarts-for-react";

// Styles
import classNames from "classnames";
import styles from "./DailyNewWallets.module.scss";

// Other
import chartOptions from "./data/chartOptions";



const DailyActiveWallets: React.FC<IComponent> = ({
    className 
}) => {
    const { data: generalData } = useSelector((state: IRootState) => state.statsGeneral);
    const { 
        daily_new_created_wallets
    } = generalData || {};
    
    const classes = classNames([
        styles["daily-new-wallets"],
        className
    ]);

    if(!daily_new_created_wallets) return <></>;
    
    const data = [
        {
            "name": "Daily Active Wallets",
            "chart": daily_new_created_wallets,
        },
    ]

    return (
        <div className={classes}>
            <strong className={"chart__title"}>Daily New Created Wallets</strong>
            <div className={"chart__inner"}>
                <ReactECharts style={{height: "352px", width: "100%"}} theme={""} option={chartOptions(data)} />
            </div>
        </div>
    );
};

export default DailyActiveWallets;
