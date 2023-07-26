// React
import React from "react";

// Styles
import classNames from "classnames";

// Redux
import { useSelector } from "react-redux";
import { IRootState } from "src/scripts/redux/store";
import { formatNumber } from "src/scripts/util/numbers";
import { Plug } from "src/components/ui";
import styles from "./StatsBlockchainActivity.module.scss";

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

    if(!blockchain_info) return <Plug noData />;

    return (
        <div className={classes}>
            <div className={"stats__item"}>
                <div className={"stats__item-wrapper"}>
                    <span className={"title"}>Contracts deployers <span>24h / peak</span></span>
                    <span className={"info"}>{formatNumber(contract_deployers_24h)} / <span>{formatNumber(contract_deployers_peak)}</span></span>
                </div>
                <div className={"stats__item-wrapper"}>
                    <span className={"title"}>User Transactions <span>24h / peak</span></span>
                    <span className={"info"}>{formatNumber(user_transactions_24h)} / <span>{formatNumber(user_transactions_peak)}</span></span>
                </div>
                <div className={"stats__item-wrapper"}>
                    <span className={"title"}>Peak TPS  <span>real time / peak in 30 days</span></span>
                    <span className={"info"}>{formatNumber(tps)} / <span>{formatNumber(tps_peak_30d)}</span></span>
                </div>
            </div>
        </div>
    );
};

export default StatsBlockchainActivity;
