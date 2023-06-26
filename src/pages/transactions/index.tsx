// React
import React, { useEffect, useRef } from "react";

// Redux
import { useDispatch } from "react-redux";
import { setCoinTransactions } from "src/scripts/redux/slices/statsTransactionsSlice";
import { setHeaders } from "src/scripts/redux/slices/headersSlice";

// Components
import { TransactionsPage } from "src/components/pages";

// API
import { transactions } from "src/scripts/api/requests";

// Websocket
import { aptosStats } from "src/scripts/websocket/connections";

const Transactions = (data: IApiProps) => {
    const ws = useRef<WebSocket>(null);
    const dispatch = useDispatch();
    
    useEffect(() => {
        aptosStats.openConnection(ws, dispatch);
        return () => { ws.current.close(); }; 
    }, [dispatch]);
    
    useEffect(() => {
        dispatch(setHeaders(data.headers) || null);
        dispatch(setCoinTransactions(data.transactions) || null);
    }, [data, dispatch]);

    return <TransactionsPage />;
}; 
export default Transactions;

export async function getServerSideProps(context) {
    const { req } = context;
    return { props: {
        "headers": req.headers,
        "transactions": await transactions.getData() || [],
    } };
}
