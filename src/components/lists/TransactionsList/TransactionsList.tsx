// React
import React, { useState, useEffect } from "react";

// Redux
import { useDispatch, useSelector } from "react-redux";
import { IRootState } from "src/scripts/redux/store";

// Styles
import classNames from "classnames";

// Components
import { List, ListHeader, Loader, Paginator } from "src/components/ui";

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
    setCurrentPage: React.Dispatch<React.SetStateAction<number>>,
    setLoading: React.Dispatch<React.SetStateAction<boolean>>,
    loading: boolean,
    full: boolean,
    setPerPage: React.Dispatch<React.SetStateAction<number>>,
    perPage: number
    handlePerPage: (perPage: number) => void
}> = ({ currentPage, setCurrentPage, width, full, perPage, setPerPage, handlePerPage = null }) => {
    const { data: aptosStats } = useSelector((state: IRootState) => state.statsAptos);
    const { transactions, websocket } = useSelector((state: IRootState) => state.statsAptos);

    const { transactions: trans } = aptosStats || {};
    const fullTransactions = !full ? trans : transactions;

    const { columnNames = null, columns = null } = media(width) || {};

    if(!fullTransactions || !width || !columns || !columnNames) return <></>;

    const handleChangePage = (page) => setCurrentPage(page);

    return (
        <Paginator 
            changePerPage={full} 
            page={currentPage} 
            perPage={perPage} 
            setPerPage={setPerPage}
            total={fullTransactions[0]?.version} 
            onChangePage={handleChangePage}
            onChangePerPage={handlePerPage}
        >
            <ListHeader 
                key={fullTransactions[0]?.version}
                columnNames={columnNames as any} 
                columns={columns} 
                data={fullTransactions}
            >
                <List adoptMobile />
            </ListHeader>
        </Paginator>
    );
};

const Transaction: React.FC<{
    full?: boolean, 
    currentPage: number, 
    width: number,
    setCurrentPage: React.Dispatch<React.SetStateAction<number>>,
    setLoading: React.Dispatch<React.SetStateAction<boolean>>,
    setPerPage: React.Dispatch<React.SetStateAction<number>>,
    perPage: number
    loading: boolean
}> = ({ currentPage, setCurrentPage, width, setLoading, loading, full, setPerPage, perPage }) => {
    const { data: transactionsData  } = useSelector((state: IRootState) => state.statsTransactions);
    const [total, setTotal] = useState(transactionsData?.[0]?.version || 0);
    const [currentInnerPage, setCurrentInnerPage] = useState(currentPage);
    const dispatch = useDispatch();

    const { columnNames = null, columns = null } = media(width) || {};

    useEffect(() => {
        setLoading(true);
        if(currentInnerPage === -1)
        {
            transactions.getData(1).then((response) => {
                const resp = response as unknown as IApiTransaction[];
                dispatch(setCoinTransactions(resp));
                setCurrentPage(-1);
                setLoading(false);
            });
            return;
        }
        if(currentInnerPage === -2)
        {
            setCurrentPage(1);
            setCurrentInnerPage(1);
            return;
        }
        if(currentPage !== 1) {
            transactions.getData().then(response => {
                if(!response) return;
                const lastTransaction = response[0]?.version;
                setTotal(lastTransaction);

                transactions.getData(lastTransaction - (perPage * (currentInnerPage - 1)), perPage).then((response) => {
                    const resp = response as unknown as IApiTransaction[];
                    dispatch(setCoinTransactions(resp));
                    setCurrentPage(currentInnerPage);
                    setLoading(false);
                });
            });
        }
    }, [currentInnerPage, perPage, dispatch, setCurrentPage]);

    if(!transactionsData || !width || !columns || !columnNames) return <></>;

    return (
        <Paginator 
            changePerPage={full} 
            page={currentPage} 
            perPage={perPage} 
            setPerPage={setPerPage} 
            total={total} 
            onChangePage={(page) => {
                setCurrentInnerPage(page);
            }}
            onChangePerPage={(perPage) => setPerPage(perPage)}
        >
            <ListHeader 
                key={transactionsData[0]?.version}
                columnNames={columnNames as any} 
                columns={columns} 
                data={transactionsData}
            >
                <List adoptMobile loadingCount={loading && perPage} />
            </ListHeader>
        </Paginator>);
};

const TransactionsList: React.FC<{ title?: string, full?: boolean } & IComponent> = ({
    title = "Last transactions",
    full = false,
    className 
}) => {
    const [currentPage, setCurrrentPage] = useState(1);
    const [loading, setLoading] = useState(false);
    const [perPage, setPerPage] = useState(full ? 25 : 10);
    const { width } = useWindowSize();
    const { websocket } = useSelector((state: IRootState) => state.statsAptos);
  

    const handlePerPage = (perPage) => {
        if(websocket?.ws) websocket?.ws?.send(websocket?.wsRef, perPage);
    };

    const classes = classNames([
        styles.transactions,
        "list",
        className
    ]);

    return (
        <div className={classes}>
            {title && <strong className={"list__title"}>
                <span>Last transactions</span>
            </strong>}
            {currentPage === 1 ? 
                <TransactionRealTime 
                    perPage={perPage}
                    setPerPage={setPerPage} 
                    handlePerPage={handlePerPage} 
                    full={full} 
                    loading={loading} 
                    setLoading={setLoading} 
                    currentPage={currentPage} 
                    width={width} 
                    setCurrentPage={setCurrrentPage} 
                /> :
                <Transaction 
                    perPage={perPage}
                    setPerPage={setPerPage} 
                    full={full} 
                    loading={loading} 
                    setLoading={setLoading} 
                    currentPage={currentPage} 
                    width={width} 
                    setCurrentPage={setCurrrentPage} 
                />
            }
        </div>
    );
};

export default TransactionsList;
