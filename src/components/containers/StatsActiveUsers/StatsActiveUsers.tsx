// React
import React from "react";

// Styles
import classNames from "classnames";

// Redux
import { useSelector } from "react-redux";
import { IRootState } from "src/scripts/redux/store";
import { formatNumber } from "src/scripts/util/numbers";
import { Plug } from "src/components/ui";
import styles from "./StatsActiveUsers.module.scss";

const StatsActiveUsers: React.FC<IComponent> = ({
    className 
}) => {
    const { data: generalData } = useSelector((state: IRootState) => state.statsGeneral);
    const { blockchain_info } = generalData || {};

    const { 
        active_account_24h, 
        active_account_peak,
        registered_account_24h,
        registered_account_peak,
    } = blockchain_info || {};

    const classes = classNames([
        styles["stats-active-users"],
        className
    ]);

    if(!blockchain_info || !active_account_24h || !active_account_peak || !registered_account_24h || !registered_account_peak) return <Plug noData />;

    return (
        <div className={classes}>
            <div className={"stats__item"}>
                <div className={"stats__item-wrapper"}>
                    <span className={"title"}>Active account <span>24h / peak</span></span>
                    <span className={"info"}>{formatNumber(active_account_24h)} / <span>{formatNumber(active_account_peak)}</span></span>
                </div>
                <div className={"stats__item-wrapper"}>
                    <span className={"title"}>Registered accounts <span>24h / peak</span></span>
                    <span className={"info"}>{formatNumber(registered_account_24h)} / <span>{formatNumber(registered_account_peak)}</span></span>
                </div>
            </div>
        </div>
    );
};

export default StatsActiveUsers;
