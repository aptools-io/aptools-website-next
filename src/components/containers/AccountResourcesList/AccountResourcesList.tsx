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
import { ArrowMore } from "src/components/svg";
import { CodeArea, CopyText, Plug, Skeleton } from "src/components/ui";
import styles from "./AccountResourcesList.module.scss";

const AccountResourcesList: React.FC<IComponent> = ({
    className 
}) => {
    const { accountResources = [], accountsLoading: loading = false } = useSelector((state: IRootState) => state.accounts);
    const [openCode, setOpenCode] = useState({ id: 0, opened: false, innerOpened: false });

    const classes = classNames([
        styles["account-resources-list"],
        className
    ]);

    if(loading) return <Skeleton style={{ height: 560 }} />;

    if(!accountResources?.length) return <Plug noData />;

    const handleOpenCode = (id) => {
        if(openCode.id === id) {
            setOpenCode({ id, opened: !openCode.opened, innerOpened: false });
            return;
        } 
        setOpenCode({ id, opened: true, innerOpened: false });
    };

    const renderResource = (item: IApiAccountResource, index: number) => {
        const { type = "", data = "" } = item;
        
        return (
            <li key={index} className={classNames([
                styles["account-resources-list__item"],
                { [styles["open"]]: openCode.id === index && openCode.opened }
            ])}>
                <div onClick={() => handleOpenCode(index)} className={styles["account-resources-list__item-title"]}>{type} <ArrowMore /></div>
                <div className={styles["account-resources-list__item-code"]}>
                    <div className={styles["account-resources-list__item-code-inner"]}>
                        <CodeArea data={data} />
                    </div>
                </div>
            </li>
        );
    };

    return (
        <div className={classes}>
            <span className={styles["account-resources-list__title"]}>Type</span>
            <ul className={styles["account-resources-list__items"]}>
                {accountResources.map(renderResource)}
            </ul>
        </div>
    );
};

export default AccountResourcesList;
