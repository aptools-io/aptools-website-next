// React
import React, { useEffect } from "react";

// Redux
import { useDispatch } from "react-redux";
import { setHeaders } from "src/scripts/redux/slices/headersSlice";
import { setPageTitle } from "src/scripts/redux/slices/pageTitleSlice";

// API
import { accounts } from "src/scripts/api/requests";

// Components
import { AccountsPage } from "src/components/pages";
import { setAccountsData, setAccountsStatsData } from "src/scripts/redux/slices/accountsSlice";


const Accounts = (data: IApiProps) => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(setHeaders(data.headers) || null);
        dispatch(setPageTitle("Accounts"));
        dispatch(setAccountsData(data.accounts));
        dispatch(setAccountsStatsData(data.accounts_stats));
    }, [data, dispatch]);
    
    return <AccountsPage/>;
};
export default Accounts;

export async function getServerSideProps(context) {
    const { req } = context;

    return { props: {
        "headers": req.headers,
        "accounts": await accounts.getAccountsData(25, 0) || [],
        "accounts_stats": await accounts.getAccountsStatsData() || [],
    } };
}
