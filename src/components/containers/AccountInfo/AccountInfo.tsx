// React
import React, { useEffect, useState } from "react";

// Redux
import { useSelector } from "react-redux";
import { IRootState } from "src/scripts/redux/store";

// Components
import { AccountPerformance, AccountTokenStats } from "src/components/charts";
import { Grid, GridWrapper } from "src/components/general";

// Other
import JsonFormatter from "react-json-formatter";

// Styles
import classNames from "classnames";
import { Plug, Skeleton } from "src/components/ui";
import styles from "./AccountInfo.module.scss";

const AccountInfo: React.FC<IComponent> = ({
    className 
}) => {
    const { accountInfo, accountsLoading: loading = false } = useSelector((state: IRootState) => state.accounts);
    const { sequence_number = 0, auth_key = "" } = accountInfo || {};

    const classes = classNames([
        styles["account-info"],
        className
    ]);

    if(loading) return <Skeleton style={{ height: 200 }} />;

    if(!accountInfo) return <Plug noData />;

    return (
        <div className={classes}>
            <div className={styles["account-info__title"]}>Sequence Number:</div>
            <div className={styles["account-info__value"]}>{sequence_number}</div>
            <div className={styles["account-info__title"]}>Authentication Key:</div>
            <div className={styles["account-info__value"]}>{auth_key}</div>
        </div>
    );
};

export default AccountInfo;
