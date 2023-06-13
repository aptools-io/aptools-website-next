// React
import React from "react";

// Styles
import classNames from "classnames";

// Redux
import { useSelector } from "react-redux";
import { IRootState } from "src/scripts/redux/store";
import { formatNumber } from "src/scripts/util/numbers";
import { concatString } from "src/scripts/util/strings";
import styles from "./StatsTransactions.module.scss";

const StatsTransactions: React.FC<IComponent> = ({
    className 
}) => {
    const { data: aptosStats } = useSelector((state: IRootState) => state.statsAptos);
    const { data: generalData } = useSelector((state: IRootState) => state.statsGeneral);
    const { blockchain_info } = generalData || {};

    const { 
        user_transactions_24h,
        "24h_trans": trans_24h
    } = blockchain_info || {};

    const {
        slot,
        tps
    } = aptosStats || {};

    const classes = classNames([
        styles["stats-active-users"],
        className
    ]);

    return (
        <div className={classes}>
            <div className={"stats__item"}>
                <div className={"stats__item-wrapper"}>
                    <span className={"title"}>Total</span>
                    <span className={"info"}>{formatNumber(slot)}</span>
                </div>
                <div className={"stats__item-wrapper"}>
                    <span className={"title"}>Per sec</span>
                    <span className={"info"}>{formatNumber(tps)}</span>
                </div>
                <div className={"stats__item-wrapper"}>
                    <span className={"title"}>Per 24h</span>
                    <span className={"info"}>{formatNumber(user_transactions_24h)}<span className={"min"}>{concatString(formatNumber(trans_24h?.per_second), "", " TPS")}</span></span>
                </div>
            </div>
        </div>
    );
};

export default StatsTransactions;
