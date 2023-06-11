// React
import React from "react";

// Styles
import styles from "./StatsTotalCenter.module.scss";
import classNames from "classnames";

// Redux
import { useSelector } from "react-redux";
import { IRootState } from "src/scripts/redux/store";

// Util
import { formatNumber } from "src/scripts/util/numbers";
import { concatString } from "src/scripts/util/strings";


const StatsTotalCenter: React.FC<IComponent> = ({
    className 
}) => {
    const { data: generalData } = useSelector((state: IRootState) => state.statsGeneral);

    const { blockchain_info } = generalData || {};
    const { 
        total_earned_by_validators = "-",
        dex_trading_volume = "-",
        total_value_locked = "-"
    } = blockchain_info || {};

    const classes = classNames([
        styles["stats-total-center"],
        className
    ]);

    return (
        <>
            <div className={classes}>
                <div className={"stats__item"}>
                    <div className={"stats__item-wrapper"}>
                        <span className={"title black"}>Total earned by validators</span>
                        <span className={"info"}>{concatString(formatNumber(total_earned_by_validators), "", " APT")}</span>
                    </div>
                    <div className={"stats__item-wrapper"}>
                        <span className={"title black"}>Dex trading volume</span>
                        <span className={"info"}>{concatString(formatNumber(dex_trading_volume), "$")}</span>
                    </div>
                    <div className={"stats__item-wrapper"}>
                        <span className={"title black"}>Total value locked</span>
                        <span className={"info"}>{concatString(formatNumber(total_value_locked), "$")}</span>
                    </div>
                </div>
            </div>
        </>
    );
};

export default StatsTotalCenter;