// React
import React from "react";

// Styles
import classNames from "classnames";

// Redux
import { useSelector } from "react-redux";
import { IRootState } from "src/scripts/redux/store";
import { formatNumber } from "src/scripts/util/numbers";
import styles from "./StatsAccount.module.scss";


const StatsAccount: React.FC<IComponent> = ({
    className 
}) => {
    //const { data: generalData } = useSelector((state: IRootState) => state.statsGeneral);

    const classes = classNames([
        styles["stats-accounts"],
        className
    ]);

    return (
        <>
            stats accounts
        </>
    );
};

export default StatsAccount;
