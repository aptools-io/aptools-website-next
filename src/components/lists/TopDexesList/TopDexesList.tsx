// React
import React from "react";

// Redux
import { useSelector } from "react-redux";
import { IRootState } from "src/scripts/redux/store";

// Styles
import classNames from "classnames";
import { List, ListHeader } from "src/components/ui";
import useWindowSize from "src/scripts/hooks/useWindowSize";
import styles from "./TopDexesList.module.scss";
import media from "./data/adaptive";

// Components

// Options

const TopDexesList: React.FC<IComponent> = ({ className }) => {
    const { addressesData, transactionsData } = useSelector((state: IRootState) => state.statsAddressesTransactions);
    const classes = classNames([styles["top-dexes"], "list", className]);

    const { width } = useWindowSize();
    const { columnNames = null, columns = null } = media(width) || {};

    if (!addressesData || !transactionsData || !width || !columnNames || !columns) return <></>;

    const combinedData = transactionsData.map((x) => {
        return {
            ...x,
            combined: addressesData.find((y) => y.contract === x.contract)
        };
    });

    return (
        <div className={classes}>
            <strong className={"list__title"}>
                <span>Top DEXes by Users/Transactions</span>
            </strong>
            <ListHeader columnNames={columnNames} columns={columns} data={combinedData}>
                <List adoptMobile />
            </ListHeader>
        </div>
    );
};

export default TopDexesList;
