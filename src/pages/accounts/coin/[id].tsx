// React
import React, { useEffect } from "react";

// Redux
import { useDispatch } from "react-redux";
import { setHeaders } from "src/scripts/redux/slices/headersSlice";
import { setPageTitle } from "src/scripts/redux/slices/pageTitleSlice";

// API
import { accounts } from "src/scripts/api/requests";

// Components
import { AccountsCoinsSinglePage } from "src/components/pages";
import { setAccountsWalletsData } from "src/scripts/redux/slices/accountsSlice";
import { useRouter } from "next/router";
import getGeneralRequests from "src/scripts/api/generalRequests";

const Accounts = (data: IApiProps) => {
    const dispatch = useDispatch();
    const router = useRouter();
    const { id } = router.query || {};
    const coinName = (id as string)?.split("::")?.slice(-1) || null;
    useEffect(() => {
        dispatch(setHeaders(data.headers) || null);
        dispatch(setPageTitle(coinName ? `${coinName}: TOP 200 accounts by a balance` : "TOP 200 accounts by a balance in tokens"));
        dispatch(setAccountsWalletsData(data.accounts_wallets));
    }, [data, dispatch]);

    return <AccountsCoinsSinglePage />;
};
export default Accounts;

export async function getServerSideProps(context) {
    const { req, query } = context;
    const { id } = query || {};

    const accountsWallets = (await accounts.getAccountsByTokenData(25, 0, id)) || null;
    if (!accountsWallets)
        return {
            notFound: true
        };

    return {
        props: {
            general: await getGeneralRequests(context),
            headers: req.headers,
            accounts_wallets: accountsWallets || []
        }
    };
}
