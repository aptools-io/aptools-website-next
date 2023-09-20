// React
import React, { useEffect, useState } from "react";

// Next
import { useRouter } from "next/router";

// Redux
import { useDispatch, useSelector } from "react-redux";
import { IRootState } from "src/scripts/redux/store";

// Styles
import classNames from "classnames";
import { List, ListHeader, Paginator, Plug, Skeleton } from "src/components/ui";
import { perPages, defaultPerPage } from "src/scripts/consts/perPages";
import { accounts } from "src/scripts/api/requests";
import { setAccountTransactionsData } from "src/scripts/redux/slices/accountsSlice";
import useWindowSize from "src/scripts/hooks/useWindowSize";
import styles from "./AccountTransactionsList.module.scss";
import media from "./data/adaptive";

// Options

// Consts

const AccountTransactionsList: React.FC<IComponent> = ({ className }) => {
    const { accountTransactions, accountsLoading = false } = useSelector(
        (state: IRootState) => state.accounts
    );
    const { transactions = [], total } = accountTransactions || {};
    const [perPage, setPerPage] = useState(10);
    const [currentPage, setCurrentPage] = useState(1);
    const [loading, setLoading] = useState(0);

    const dispatch = useDispatch();
    const router = useRouter();

    const { width } = useWindowSize();
    const { columnNames = null, columns = null } = media(width) || {};

    const { id = null } = router?.query || {};

    const classes = classNames([
        styles["account-transactions-list"],
        "list",
        className
    ]);

    if (accountsLoading) return <Skeleton style={{ height: 460 }} />;

    if (!transactions || !accountTransactions || !columnNames || !columns)
        return <Plug noData />;

    const handleChangePage = (page) => {
        setLoading(1);
        accounts
            .getAccountTransactionsData(id, perPage, (page - 1) * perPage)
            .then((e: unknown) => {
                setCurrentPage(page);
                const result = e as IApiAccountTransactions;
                dispatch(
                    setAccountTransactionsData({
                        ...result
                    })
                );
                setLoading(0);
            });
    };

    const handleChangePerPage = (perPage) => {
        setPerPage(perPage);
        setCurrentPage(1);
        setLoading(1);
        accounts
            .getAccountTransactionsData(id, perPage, (1 - 1) * perPage)
            .then((e: unknown) => {
                const result = e as IApiAccountTransactions;
                dispatch(
                    setAccountTransactionsData({
                        ...result
                    })
                );
                setLoading(0);
            });
    };

    return (
        <div className={classes}>
            <Paginator
                changePerPage
                paginatorName={"accountTransactionsList"}
                key={transactions?.length ? JSON.stringify(transactions) : "0"}
                page={currentPage}
                perPage={perPage}
                setPerPage={setPerPage}
                total={total}
                onChangePage={handleChangePage}
                onChangePerPage={handleChangePerPage}>
                <ListHeader
                    columnNames={columnNames}
                    columns={columns}
                    data={transactions}
                    key={
                        transactions?.length
                            ? JSON.stringify(transactions)
                            : "0"
                    }>
                    <List adoptMobile={1439} loadingCount={loading * perPage} />
                </ListHeader>
            </Paginator>
        </div>
    );
};

export default AccountTransactionsList;
