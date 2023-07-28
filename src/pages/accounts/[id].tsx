// React
import React, { useEffect, useRef } from "react";

// Redux
import { useDispatch } from "react-redux";
import { setHeaders } from "src/scripts/redux/slices/headersSlice";
import { setPageTitle } from "src/scripts/redux/slices/pageTitleSlice";
import { setAccountProfitabilitiesData, setAccountStatsData } from "src/scripts/redux/slices/accountsSlice";

// Components
import { AccountsSinglePage } from "src/components/pages";

// API
import { accounts } from "src/scripts/api/requests";


const AccountsId = (data: IApiProps) => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(setHeaders(data.headers) || null);
        dispatch(setPageTitle("Account"));
        dispatch(setAccountStatsData(data.account_stats));
        dispatch(setAccountProfitabilitiesData(data.account_profitabilities));
    }, [data, dispatch]);

    return <AccountsSinglePage />;
}; 
export default AccountsId;

export async function getServerSideProps(context) {
    const { req, query } = context;
    const { id } = query || {};

    const stats = await accounts.getAccountStatsData(id);
    const profitabilities = await accounts.getAccountProfitabilitiesData(id);

    if(!stats || !profitabilities) return {
        notFound: true
    };

    return { props: {
        "headers": req.headers,
        "account_stats": await accounts.getAccountStatsData(id),
        "account_profitabilities": await accounts.getAccountProfitabilitiesData(id),
    } };
}