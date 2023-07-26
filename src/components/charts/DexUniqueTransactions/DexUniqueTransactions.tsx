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
import styles from "./DexUniqueTransactions.module.scss";

// Other
import chartOptions from "./data/chartOptions";


const DexUniqueTransactions: React.FC<IComponent> = ({
    className 
}) => {
    const { data: generalData } = useSelector((state: IRootState) => state.statsGeneral);
    const { daily_contract_transactions } = generalData || {};

    const classes = classNames([
        styles["dex-unique-wallets"],
        className
    ]);

    return (
        <div className={classes}>
            <strong className={"chart__title"}>DEX Unique Transactions</strong>
            <div className={"chart__inner"}>
                {daily_contract_transactions ?
                    <ReactECharts className={"chart__wrapper"} theme={""} option={chartOptions(daily_contract_transactions)} /> :
                    <Plug noData />
                }
            </div>
        </div>
    );
};

export default DexUniqueTransactions;
