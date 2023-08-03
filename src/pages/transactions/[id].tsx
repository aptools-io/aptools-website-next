// React
import React, { useEffect, useRef } from "react";

// Redux
import { useDispatch } from "react-redux";
import { setHeaders } from "src/scripts/redux/slices/headersSlice";
import { setPageTitle } from "src/scripts/redux/slices/pageTitleSlice";
import { setAccountProfitabilitiesData, setAccountStatsData } from "src/scripts/redux/slices/accountsSlice";

// Components
import { TransactionsSinglePage } from "src/components/pages";

// API
import { transactions } from "src/scripts/api/requests";
import { setTransaction } from "src/scripts/redux/slices/statsTransactionsSlice";


const TransactionsId = (data: IApiProps) => {
    const dispatch = useDispatch();
 
    useEffect(() => {
        dispatch(setHeaders(data.headers) || null);
        dispatch(setTransaction(data.transaction_single) || null);
        dispatch(setPageTitle("Transaction"));
    }, [data, dispatch]);

    return <TransactionsSinglePage />;
}; 
export default TransactionsId;

export async function getServerSideProps(context) {
    const { req, query } = context;
    const { id } = query || {};

    /* const stats = await accounts.getAccountStatsData(id);
    const profitabilities = await accounts.getAccountProfitabilitiesData(id);

    if(!stats || !profitabilities) return {
        notFound: true
    };
 */

    const transaction = await transactions.getSingleTransactionData(id);

    if(!transaction) return {
        notFound: true
    };

    return { props: {
        "headers": req.headers,
        "transaction_single": transaction
    } };
}
