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
import getGeneralRequests from "src/scripts/api/generalRequests";

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
    const isVersion = !(id.indexOf("0x") > -1);

    const transaction = isVersion ? await transactions.getSingleTransactionDataByVersion(id) : await transactions.getSingleTransactionData(id);

    if (!transaction)
        return {
            notFound: true
        };

    return {
        props: {
            general: await getGeneralRequests(context),
            headers: req.headers,
            transaction_single: transaction
        }
    };
}
