// React
import React from "react";

// Styles
import classNames from "classnames";

// Redux
import { useSelector } from "react-redux";
import { IRootState } from "src/scripts/redux/store";

// Util
import { formatNumber } from "src/scripts/util/numbers";
import { Plug } from "src/components/ui";
import styles from "./StatsTotalRight.module.scss";


const StatsTotalRight: React.FC<IComponent> = ({
    className 
}) => {
    const { data: generalData } = useSelector((state: IRootState) => state.statsGeneral);

    const { blockchain_info } = generalData || {};
    const { 
        total_validators = "-" ,
        total_wallets = "-",
        total_contracts = "-"
    } = blockchain_info || {};

    const classes = classNames([
        styles["stats-total-right"],
        className
    ]);

    if(!blockchain_info || !total_validators || !total_wallets || !total_contracts) return <Plug noData />;

    return (
        <>
            <div className={classes}>
                <div className={"stats__item"}>
                    <div className={"stats__item-wrapper"}>
                        <span className={"title black"}>Total Validators</span>
                        <span className={"info"}>{formatNumber(total_validators)}</span>
                    </div>
                    <div className={"stats__item-wrapper"}>
                        <span className={"title black"}>Total wallets</span>
                        <span className={"info"}>{formatNumber(total_wallets)}</span>
                    </div>
                    <div className={"stats__item-wrapper"}>
                        <span className={"title black"}>Total contracts</span>
                        <span className={"info"}>{formatNumber(total_contracts)}</span>
                    </div>
                </div>
            </div>
        </>
    );
};

export default StatsTotalRight;
