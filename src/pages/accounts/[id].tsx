// React
import React, { useEffect, useRef } from "react";

// Redux
import { useDispatch } from "react-redux";
import { setHeaders } from "src/scripts/redux/slices/headersSlice";
import { setPageTitle, setPageType } from "src/scripts/redux/slices/pageTitleSlice";
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
        dispatch(setPageType(data.page_type));
        dispatch(setAccountStatsData(data.account_stats));
        dispatch(setAccountProfitabilitiesData(data.account_profitabilities));
    }, [data, dispatch]);

    return <AccountsSinglePage />;
};
export default AccountsId;

const redirectAccount = (url) => ({
    Validator: {
        destination: `/validators/${url}`,
        permanent: false
    },
    DEX: {
        destination: `/dex/${url}`,
        permanent: false
    }
});

export async function getServerSideProps(context) {
    const { req, query } = context;
    const { id } = query || {};

    const stats = (await accounts.getAccountStatsData(id)) as unknown;
    const statsData = stats as IApiAccountStats;

    let dexType = "";
    let dexId = "";
    if (statsData?.type) {
        if (statsData?.type?.indexOf("|")) {
            dexType = statsData?.type.split("|")[0];
            dexId = statsData?.type.split("|")[1];
        }

        const currentRedirect = redirectAccount(dexId || id)?.[dexType || statsData.type];
        if (currentRedirect)
            return {
                redirect: currentRedirect
            };
    }

    const profitabilities = await accounts.getAccountProfitabilitiesData(id);

    if (!stats || !profitabilities)
        return {
            notFound: true
        };

    return {
        props: {
            headers: req.headers,
            account_stats: stats,
            account_profitabilities: profitabilities,
            page_type: dexType || statsData.type
        }
    };
}
