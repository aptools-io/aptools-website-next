// React
import React, { useState, useEffect } from "react";

// Redux
import { useDispatch, useSelector } from "react-redux";
import { IRootState } from "src/scripts/redux/store";

// Styles
import classNames from "classnames";

// Components
import { List, ListHeader, Paginator } from "src/components/ui";

// Options
import { setCoinTransactions } from "src/scripts/redux/slices/statsTransactionsSlice";

// API
import { transactions } from "src/scripts/api/requests";

// Adaptive
import useWindowSize from "src/scripts/hooks/useWindowSize";
import styles from "./TransactionsList.module.scss";
import media from "./data/adaptive";

const TransactionRealTime: React.FC<{ 
    currentPage: number, 
    width: number,
    setCurrentPage: React.Dispatch<React.SetStateAction<number>>
}> = ({ currentPage, setCurrentPage, width }) => {
    const { data: aptosStats } = useSelector((state: IRootState) => state.statsAptos);
    const { transactions: trans } = aptosStats || {};

    const { columnNames = null, columns = null } = media(width) || {};

    if(!trans || !width || !columns || !columnNames) return <></>;
    return (
        <Paginator page={currentPage} perPage={10} total={trans[0]?.version} onChangePage={(page) => setCurrentPage(page)}>
            <ListHeader 
                key={trans[0]?.version}
                columnNames={columnNames as any} 
                columns={columns} 
                data={trans}
            >
                <List adoptMobile />
            </ListHeader>
        </Paginator>
    );
};

const Transaction: React.FC<{ 
    currentPage: number, 
    width: number,
    setCurrentPage: React.Dispatch<React.SetStateAction<number>>
}> = ({ currentPage, setCurrentPage, width }) => {
    const { data: transactionsData  } = useSelector((state: IRootState) => state.statsTransactions);
    const [total, setTotal] = useState(transactionsData?.[0]?.version || 0);
    const [currentInnerPage, setCurrentInnerPage] = useState(currentPage);
    const dispatch = useDispatch();

    const { columnNames = null, columns = null } = media(width) || {};

    useEffect(() => {
        if(currentPage !== 1) {
            transactions.getData().then(response => {
                if(!response) return;
                const lastTransaction = response[0]?.version;
                setTotal(lastTransaction);

                transactions.getData(lastTransaction - (10 * (currentPage - 1))).then((response) => {
                    const resp = response as unknown as IApiTransaction[];
                    dispatch(setCoinTransactions(resp));
                    setCurrentPage(currentInnerPage);
                });
            });
        }
    }, [currentInnerPage, dispatch, currentPage, setCurrentPage]);

    if(!transactionsData || !width || !columns || !columnNames) return <></>;

    return (
        <Paginator page={currentPage} perPage={10} total={total} onChangePage={(page) => setCurrentInnerPage(page)}>
            <ListHeader 
                key={transactionsData[0]?.version}
                columnNames={columnNames as any} 
                columns={columns} 
                data={transactionsData}
            >
                <List adoptMobile />
            </ListHeader>
        </Paginator>);
};

const TransactionsList: React.FC<IComponent> = ({
    className 
}) => {
    const [currentPage, setCurrrentPage] = useState(1);
    const { width } = useWindowSize();

    const classes = classNames([
        styles["transactions"],
        "list",
        className
    ]);

    return (
        <div className={classes}>
            <strong className={"list__title"}>
                <span>Last transactions</span>
            </strong>
            {currentPage === 1 ? 
                <TransactionRealTime currentPage={currentPage} width={width} setCurrentPage={setCurrrentPage} /> :
                <Transaction currentPage={currentPage} width={width} setCurrentPage={setCurrrentPage} />
            }
        </div>
    );
};

export default TransactionsList;
