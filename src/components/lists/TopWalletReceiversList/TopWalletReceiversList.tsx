// React
import React from "react";

// Redux
import { useSelector } from "react-redux";
import { IRootState } from "src/scripts/redux/store";

// Styles
import classNames from "classnames";
import { List, ListHeader } from "src/components/ui";
import styles from "./TopWalletReceiversList.module.scss";

// Components

// Options
import { columnNames, columns } from "./data/listOptions";

const TopWalletReceiversList: React.FC<IListWrapperProps> = ({
    keyValue,
    className 
}) => {
    const { data: generalData } = useSelector((state: IRootState) => state.statsGeneral);
    const { token_statistics } = generalData || {};
    const { tokens_by_receivers } = token_statistics?.[keyValue] || {};

    const classes = classNames([
        styles["top-wallet-receivers"],
        "list",
        className
    ]);


    if(!token_statistics || !tokens_by_receivers) return <></>;

    return (
        <div className={classes}>
            <strong className={"list__title"}>
                <span>Top Tokens by Wallet Receivers</span>
            </strong>
            <ListHeader 
                columnNames={columnNames} 
                columns={columns} 
                data={tokens_by_receivers}
            >
                <List />
            </ListHeader>
        </div>
    );
};

export default TopWalletReceiversList;
