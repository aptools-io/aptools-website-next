// React
import React, { useState, useEffect } from "react";

// Redux
import { useDispatch, useSelector } from "react-redux";
import { IRootState } from "src/scripts/redux/store";

// Styles
import classNames from "classnames";
import styles from "./TransactionsList.module.scss";

// Components
import { List, ListHeader, Paginator } from "src/components/ui";

// Options
import { columnNames, columns } from "./data/listOptions";
import { setCoinTransactions } from "src/scripts/redux/slices/statsTransactionsSlice";

// API
import { transactions } from "src/scripts/api/requests";

const TransactionsList: React.FC<IComponent> = ({
    className 
}) => {
    const { data: transactionsData } = useSelector((state: IRootState) => state.statsTransactions);
    const { data: aptosStats } = useSelector((state: IRootState) => state.statsAptos);
    const { transactions: trans = [] } = aptosStats || {};

    const [currentPage, setCurrrentPage] = useState(1);
    const dispatch = useDispatch();

    const classes = classNames([
        styles["transactions"],
        "list",
        className
    ]);

    if(!transactionsData) return <></>;

    useEffect(() => {
        if(currentPage !== 1 && trans[0]) transactions.getData(trans[0].version - (10 * (currentPage - 1))).then((response) => {
            const resp = response as unknown as IApiTransaction[];
            dispatch(setCoinTransactions(resp))
        })
    }, [currentPage]);

    return (
        <div className={classes}>
            <strong className={"list__title"}>
                <span>Last transactions</span>
            </strong>
            <Paginator page={currentPage} perPage={10} total={trans[0]?.version} onChangePage={(page) => setCurrrentPage(page)}>
                <ListHeader 
                    key={trans[0]?.version || 0}
                    columnNames={columnNames} 
                    columns={columns} 
                    data={currentPage === 1 ? trans : transactionsData}
                >
                    <List />
                </ListHeader>
            </Paginator>
        </div>
    );
};

export default TransactionsList;
