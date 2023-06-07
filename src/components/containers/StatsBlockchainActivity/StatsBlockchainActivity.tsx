// React
import React from "react";

// Styles
import classNames from "classnames";
import styles from "./StatsBlockchainActivity.module.scss";

// Redux
import { useSelector } from "react-redux";
import { IRootState } from "src/scripts/redux/store";

const StatsBlockchainActivity: React.FC<IComponent> = ({
    className 
}) => {
    const { data: aptosStats } = useSelector((state: IRootState) => state.statsAptos);
    const { data: generalData } = useSelector((state: IRootState) => state.statsGeneral);
    const { blockchain_info } = generalData || {};

    const { 
        contract_deployers_24h, 
        contract_deployers_peak,
        user_transactions_24h,
        user_transactions_peak,
        tps_peak_30d
    } = blockchain_info || {};

    const {
        tps
    } = aptosStats || {};

    const classes = classNames([
        styles["stats-blockchain-activity"],
        className
    ]);

    return (
        <div className={classes}>
            <div className={"stats__item"}>
                <div className={"stats__item-wrapper"}>
                    <span className={"title"}>Contracts deployers <span>24h / peak</span></span>
                    <span className={"info"}>{contract_deployers_24h} / <span>{contract_deployers_peak}</span></span>
                </div>
                <div className={"stats__item-wrapper"}>
                    <span className={"title"}>User Transactions <span>24h / peak</span></span>
                    <span className={"info"}>{user_transactions_24h} / <span>{user_transactions_peak}</span></span>
                </div>
                <div className={"stats__item-wrapper"}>
                    <span className={"title"}>Peak TPS  <span>real time / peak in 30 days</span></span>
                    <span className={"info"}>{tps} / <span>{tps_peak_30d}</span></span>
                </div>
            </div>
        </div>
    );
};

export default StatsBlockchainActivity;
