// React
import React, { useEffect } from "react";

// Redux
import { useDispatch } from "react-redux";
import { setHeaders } from "src/scripts/redux/slices/headersSlice";
import { setPageTitle } from "src/scripts/redux/slices/pageTitleSlice";

// API
import { accounts } from "src/scripts/api/requests";

// Components
import { AccountsNftValuePage } from "src/components/pages";
import { setAccountsNftWalletsData, setAccountsWalletsData } from "src/scripts/redux/slices/accountsSlice";
import getGeneralRequests from "src/scripts/api/generalRequests";

const Accounts = (data: IApiProps) => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(setHeaders(data.headers) || null);
        dispatch(setPageTitle("TOP 200 NFT holders by value"));
        dispatch(setAccountsWalletsData(data.accounts_wallets));
        dispatch(setAccountsNftWalletsData(data.accounts_nft_wallets));
    }, [data, dispatch]);

    return <AccountsNftValuePage />;
};
export default Accounts;

export async function getServerSideProps(context) {
    const { req } = context;

    return {
        props: {
            general: await getGeneralRequests(context),
            headers: req.headers,
            accounts_wallets: (await accounts.getAccountsData(25, 0)) || [],
            accounts_nft_wallets: (await accounts.getAccountsNftData(25, 0)) || []
        }
    };
}
