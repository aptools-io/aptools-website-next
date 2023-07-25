// React
import React, { useEffect, useState } from "react";

// Next
import { useRouter } from "next/router";

// Redux
import { useDispatch, useSelector } from "react-redux";
import { IRootState } from "src/scripts/redux/store";

// Styles
import classNames from "classnames";
import { List, ListHeader, Paginator } from "src/components/ui";
import { perPages, defaultPerPage } from "src/scripts/consts/perPages";
import { accounts } from "src/scripts/api/requests";
import { setAccountTransactionsData } from "src/scripts/redux/slices/accountsSlice";
import styles from "./AccountTokensList.module.scss";


// Options
import { columnNames, columns } from "./data/listOptions";

// Consts


const AccountTransactionsList: React.FC<IComponent> = ({
    className 
}) => {
    const { accountTransactions } = useSelector((state: IRootState) => state.accounts);
    const { transactions = [], total } = accountTransactions || {};
    const [perPage, setPerPage] = useState(25);
    const [currentPage, setCurrentPage] = useState(1);
    const [loading, setLoading] = useState(0);

    const dispatch = useDispatch();
    const router = useRouter();
    const { id = null } = router?.query || {};



    const classes = classNames([
        styles["account-transactions"],
        "list",
        className
    ]);

    if(!transactions || !accountTransactions) return <></>;

    return (
        <div className={classes}>
            <Paginator 
                changePerPage
                key={transactions?.[0].version} 
                page={currentPage} 
                perPage={perPage} 
                setPerPage={setPerPage} 
                total={total} 
                onChangePage={(page) => {
                    setLoading(1);
                    accounts.getAccountTransactionsData(id, perPage, (page - 1) * perPage).then((e: unknown) => {
                        setCurrentPage(page);
                        const result = e as IApiAccountTransactions;
                        dispatch(setAccountTransactionsData({
                            ...result
                        }));
                        setLoading(0);
                    });
                }}
                onChangePerPage={(perPage) => {
                    setPerPage(perPage);
                    setLoading(1);
                    accounts.getAccountTransactionsData(id, perPage, (currentPage - 1) * perPage).then((e: unknown) => {
                        const result = e as IApiAccountTransactions;
                        dispatch(setAccountTransactionsData({
                            ...result
                        }));
                        setLoading(0);
                    });
                }}
            >
                <ListHeader 
                    columnNames={columnNames} 
                    columns={columns} 
                    data={transactions}
                    key={transactions?.[0].version}
                >
                    <List adoptMobile loadingCount={loading * 10} />
                </ListHeader>
            </Paginator>
        </div>
    );
};

export default AccountTransactionsList;
