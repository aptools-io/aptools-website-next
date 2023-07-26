// React
import React from "react";

// Redux
import { useSelector } from "react-redux";
import { IRootState } from "src/scripts/redux/store";

// ECharts
import ReactECharts from "echarts-for-react";

// Styles
import classNames from "classnames";
import { Plug } from "src/components/ui";
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
    
    const data = [
        {
            "name": "Daily Active Wallets",
            "chart": daily_new_created_wallets,
        },
    ];

    return (
        <div className={classes}>
            <strong className={"chart__title"}>Daily New Created Wallets</strong>
            <div className={"chart__inner"}>
                {daily_new_created_wallets ? <ReactECharts className={"chart__wrapper"} theme={""} option={chartOptions(data)} /> : <Plug noData/>}
            </div>
        </div>
    );
};

export default DailyActiveWallets;
