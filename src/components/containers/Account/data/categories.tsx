// Slices
import { setAccountInfoData, setAccountNftsCollectionsData, setAccountProfitabilitiesData, setAccountResourcesData, setAccountsLoading, setAccountTokensData, setAccountTransactionsData } from "src/scripts/redux/slices/accountsSlice";

// Components
import { AccountTransactionsList, AccountTokensList } from "src/components/lists";
import { Plug } from "src/components/ui";
import { accounts } from "src/scripts/api/requests";

import AccountOverview from "../../AccountOverview/AccountOverview";
import AccountNtfList from "../../AccountNtfList/AccountNtfList";

// Styles
import styles from "../Account.module.scss";
import AccountResourcesList from "../../AccountResourcesList/AccountResourcesList";
import AccountInfo from "../../AccountInfo/AccountInfo";

const categories = (dispatch) => {
    return [
        {
            id: 1,
            title: "Overview",
            component: () => <AccountOverview />,
            action: async (setCustomEntry, setLoading, id, queryId) => {
                setLoading(false);
                dispatch(setAccountsLoading(true));
                await accounts.getAccountProfitabilitiesData(queryId, 1, null, null).then((e: unknown) => {
                    const result = e as IApiAccountProfitabilities;
                    dispatch(setAccountProfitabilitiesData({ ...result, currentPage: 1 }));
                    dispatch(setAccountsLoading(false));
                });
            }
        },
        {
            id: 2,
            title: "Transactions",
            component: () => <AccountTransactionsList />,
            action: async (setCustomEntry, setLoading, id, queryId) => {
                setLoading(false);
                dispatch(setAccountsLoading(true));
                await accounts.getAccountTransactionsData(queryId, 10, 0).then((e: unknown) => {
                    const result = e as IApiAccountTransactions;
                    dispatch(setAccountTransactionsData(result));
                    dispatch(setAccountsLoading(false));
                });
               
            }
        },
        {
            id: 3,
            title: "Tokens",
            component: () => <AccountTokensList />,
            action: async (setCustomEntry, setLoading, id, queryId) => {
                setLoading(false);
                dispatch(setAccountsLoading(true));
                await accounts.getAccountTokensData(queryId, 10, 1).then((e: unknown) => {
                    const result = e as IApiAccountTokens;
                    dispatch(setAccountTokensData(result));
                    dispatch(setAccountsLoading(false));
                });
            }
        },
        {
            id: 4,
            title: "NFTs",
            component: () => <AccountNtfList />,
            action: async (setCustomEntry, setLoading, id, queryId) => {
                setLoading(false);
                dispatch(setAccountsLoading(true));
                await accounts.getAccountNftCollectionsData(queryId).then((e: unknown) => {
                    const result = e as IApiAccountNftCollections;
                    dispatch(setAccountNftsCollectionsData(result));
                    dispatch(setAccountsLoading(false));
                });
            }
        },
        {
            id: 5,
            title: "Resources",
            component: () => <AccountResourcesList key={5}/>,
            action: async (setCustomEntry, setLoading, id, queryId) => {
                setLoading(false);
                dispatch(setAccountsLoading(true));
                await accounts.getAccountResourcesData(queryId).then((e: unknown) => {
                    const result = e as IApiAccountResource[];
                    dispatch(setAccountResourcesData(result));
                    dispatch(setAccountsLoading(false));
                });
            }
        },
        {
            id: 6,
            title: "Modules",
            component: () => <AccountResourcesList modules key={6} />,
            action: async (setCustomEntry, setLoading, id, queryId) => {
                setLoading(false);
                dispatch(setAccountsLoading(true));
                await accounts.getAccountModulesData(queryId).then((e: unknown) => {
                    const result = e as IApiAccountResource[];
                    dispatch(setAccountResourcesData(result));
                    dispatch(setAccountsLoading(false));
                });
            }
        },
        {
            id: 6,
            title: "Info",
            component: () => <AccountInfo />,
            action: async (setCustomEntry, setLoading, id, queryId) => {
                setLoading(false);
                dispatch(setAccountsLoading(true));
                await accounts.getAccountInfoData(queryId).then((e: unknown) => {
                    const result = e as IApiAccountInfo;
                    dispatch(setAccountInfoData(result));
                    dispatch(setAccountsLoading(false));
                });
                
            }
        },
        {
            id: 7,
            title: "Notifications",
            component: () => <div className={styles.account__inner}><Plug /></div>,
            action: (setCustomEntry, setLoading, id) => {
                setLoading(false);
            }
        }
    ];
};

export default categories;