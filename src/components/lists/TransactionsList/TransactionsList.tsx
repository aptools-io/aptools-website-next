// React
import React, { useState, useEffect, useMemo, useCallback } from "react";

// Redux
import { useDispatch, useSelector } from "react-redux";
import { IRootState } from "src/scripts/redux/store";

// Styles
import classNames from "classnames";

// Components
import { List, ListHeader, Loader, Paginator, Tabs } from "src/components/ui";

// Options
import { setCoinTransactions } from "src/scripts/redux/slices/statsTransactionsSlice";

// API
import { transactions } from "src/scripts/api/requests";

// Adaptive
import useWindowSize from "src/scripts/hooks/useWindowSize";
import styles from "./TransactionsList.module.scss";
import media from "./data/adaptive";
import ProjectsList from "../../containers/ProjectsList/ProjectsList";
import { categories } from "../../containers/AccountNotifications/data/data";
import useLocalStorage from "../../../scripts/hooks/useLocalStorage";

const TransactionRealTime: React.FC<{
    currentPage: number;
    width: number;
    setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
    setLoading: React.Dispatch<React.SetStateAction<boolean>>;
    loading: boolean;
    full: boolean;
    setPerPage: React.Dispatch<React.SetStateAction<number>>;
    perPage: number;
    handlePerPage: (perPage: number) => void;
}> = ({ currentPage, setCurrentPage, width, full, perPage, setPerPage, handlePerPage = null }) => {
    const { data: aptosStats } = useSelector((state: IRootState) => state.statsAptos);
    const { transactions, websocket } = useSelector((state: IRootState) => state.statsAptos);

    const { transactions: trans } = aptosStats || {};
    const fullTransactions = transactions;

    const { columnNames = null, columns = null } = media(width) || {};

    if (!fullTransactions || !width || !columns || !columnNames) return <></>;

    const handleChangePage = (page) => setCurrentPage(page);

    return (
        <Paginator paginatorName={"transactions"} changePerPage={full} page={currentPage} perPage={perPage} setPerPage={setPerPage} total={fullTransactions[0]?.version} onChangePage={handleChangePage} onChangePerPage={handlePerPage}>
            <ListHeader key={fullTransactions[0]?.version} columnNames={columnNames as any} columns={columns} data={fullTransactions}>
                <List adoptMobile />
            </ListHeader>
        </Paginator>
    );
};

const Transaction: React.FC<{
    full?: boolean;
    currentPage: number;
    width: number;
    setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
    setLoading: React.Dispatch<React.SetStateAction<boolean>>;
    setPerPage: React.Dispatch<React.SetStateAction<number>>;
    perPage: number;
    loading: boolean;
    tabId: number;
}> = ({ currentPage, setCurrentPage, width, setLoading, loading, full, setPerPage, perPage, tabId }) => {
    const { data: transactionsData } = useSelector((state: IRootState) => state.statsTransactions);
    const [total, setTotal] = useState(transactionsData?.[0]?.version || 0);
    const dispatch = useDispatch();

    const { columnNames = null, columns = null } = media(width) || {};

    /* const getData = useCallback(() => (tabId ? transactions.getData : transactions.getUserTransactions), [tabId]); */

    const getData = useMemo(() => (tabId ? transactions.getUserTransactions : transactions.getData), [tabId]);

    useEffect(() => {
        setLoading(true);
        if (currentPage >= 1) {
            getData(currentPage - 1, perPage).then((response: any) => {
                if (!response) {
                    setLoading(false);
                    setCurrentPage(1);
                    return;
                }

                const { total, transactions } = response;
                setTotal(total);

                const resp = transactions as unknown as IApiTransaction[];
                dispatch(setCoinTransactions(resp));
                setLoading(false);
            });
        }
    }, [perPage, dispatch, setCurrentPage, currentPage, setLoading, getData]);

    if (!transactionsData || !width || !columns || !columnNames) return <></>;

    return (
        <Paginator
            paginatorName={"transactions"}
            page={currentPage}
            perPage={perPage}
            setPerPage={setPerPage}
            total={total}
            onChangePage={(page) => {
                setCurrentPage(page);
            }}
            onChangePerPage={(perPage) => setPerPage(perPage)}>
            <ListHeader key={transactionsData[0]?.version} columnNames={columnNames as any} columns={columns} data={transactionsData}>
                <List adoptMobile loadingCount={loading && perPage} />
            </ListHeader>
        </Paginator>
    );
};

const TransactionsList: React.FC<{ title?: string; full?: boolean } & IComponent> = ({ title = "Last transactions", full = false, className }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const [loading, setLoading] = useState(false);
    const [perPage, setPerPage] = useState(10);
    const { width } = useWindowSize();
    const { websocket } = useSelector((state: IRootState) => state.statsAptos);
    const [tabsStates, setTabsStates] = useLocalStorage("tabsStates", { transactionsTabs: 0 });
    const [currentTab, setCurrentTab] = useState(tabsStates?.transactionsTabs || 0);

    const handlePerPage = (perPage) => {
        if (websocket?.ws) websocket?.ws?.send(websocket?.wsRef, perPage);
    };

    const classes = classNames([styles.transactions, "list", className]);

    const changeTab = useCallback((tabId: number) => {
        setCurrentPage(1);
        setCurrentTab(tabId);
    }, []);

    return (
        <div className={classes}>
            {title && (
                <strong className={"list__title"}>
                    <span>Last transactions</span>
                </strong>
            )}
            <Tabs
                tabsName={"transactionsTabs"}
                itemsCount={false}
                queryTab={false}
                dataArray={[
                    { title: "All transactions", id: 0 },
                    { title: "User transactions", id: 1 }
                ]}
                onChangeTab={changeTab}>
                <></>
            </Tabs>
            <Transaction tabId={currentTab} perPage={perPage} setPerPage={setPerPage} full={full} loading={loading} setLoading={setLoading} currentPage={currentPage} width={width} setCurrentPage={setCurrentPage} />
            {/* {currentPage === -33 ? <TransactionRealTime perPage={perPage} setPerPage={setPerPage} handlePerPage={handlePerPage} full={full} loading={loading} setLoading={setLoading} currentPage={currentPage} width={width} setCurrentPage={setCurrrentPage} /> : <Transaction perPage={perPage} setPerPage={setPerPage} full={full} loading={loading} setLoading={setLoading} currentPage={currentPage} width={width} setCurrentPage={setCurrrentPage} />} */}
        </div>
    );
};

export default TransactionsList;
