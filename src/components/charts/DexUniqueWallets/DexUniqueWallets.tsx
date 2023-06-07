// React
import React from "react";

// Redux
import { useSelector } from "react-redux";
import { IRootState } from "src/scripts/redux/store";

// ECharts
import ReactECharts from "echarts-for-react";

// Styles
import classNames from "classnames";
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

    if(!daily_unique_contract_addresses) return <></>

    return (
        <div className={classes}>test
            <div className={styles["stats-transactions__inner"]}>
                <ReactECharts style={{height: "312px", width: "100%"}} theme={""} option={chartOptions(daily_unique_contract_addresses)} />
            </div>
        </div>
    );
};

export default DexUniqueWallets;
