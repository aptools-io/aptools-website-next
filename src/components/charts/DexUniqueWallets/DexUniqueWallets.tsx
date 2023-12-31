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
import styles from "./DexUniqueWallets.module.scss";

// Other
import chartOptions from "./data/chartOptions";


const DexUniqueWallets: React.FC<IComponent> = ({
    className 
}) => {
    const { data: generalData } = useSelector((state: IRootState) => state.statsGeneral);
    const { daily_unique_contract_addresses } = generalData || {};

    const classes = classNames([
        styles["dex-unique-wallets"],
        className
    ]);

    return (
        <div className={classes}>
            <strong className={"chart__title"}>DEX Unique Wallets</strong>
            <div className={"chart__inner"}>
                {daily_unique_contract_addresses ? <ReactECharts className={"chart__wrapper"} theme={""} option={chartOptions(daily_unique_contract_addresses)} /> : <Plug noData />}
            </div>
        </div>
    );
};

export default DexUniqueWallets;
