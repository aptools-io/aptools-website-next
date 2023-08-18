// React
import React, { useEffect, useState } from "react";

// Next
import { useRouter } from "next/router";

// Redux
import { useDispatch, useSelector } from "react-redux";
import { IRootState } from "src/scripts/redux/store";

// Styles
import classNames from "classnames";
import { Button, List, ListHeader, Paginator, Plug, Skeleton } from "src/components/ui";
import { perPages, defaultPerPage } from "src/scripts/consts/perPages";
import { accounts, transactions, validators } from "src/scripts/api/requests";
import { setAccountTransactionsData } from "src/scripts/redux/slices/accountsSlice";
import { setValidatorTransactions } from "src/scripts/redux/slices/validatorsSlice";
import styles from "./BlockTransactionsList.module.scss";


// Options
import { columnNames, columns } from "./data/listOptions";



const BlockTransactionsList: React.FC<IComponent> = ({
    className 
}) => {
    const { block } = useSelector((state: IRootState) => state.blocks);
    const { transactions } = block || {};
    const classes = classNames([
        styles["block-transactions-list"],
        "list",
        className
    ]);
   
    return (
        <div className={classes}>
            <strong className={"list__title"}>
                <span>Transactions</span>
            </strong>
            <ListHeader 
                columnNames={columnNames} 
                columns={columns} 
                data={transactions}
                key={transactions?.[transactions.length - 1]?.version}
            >
                <List adoptMobile />
            </ListHeader>
        </div>
    );
};

export default BlockTransactionsList;
