// Slices
import { setAccountInfoData, setAccountNftsData, setAccountResourcesData, setAccountTransactionsData } from "src/scripts/redux/slices/accountsSlice";

// Components
import { AccountTransactionsList } from "src/components/lists";
import { Plug } from "src/components/ui";
import { accounts } from "src/scripts/api/requests";

import AccountTokensList from "src/components/lists/AccountTransactionsList/AccountTransactionsList";
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
            action: (setCustomEntry, setLoading, id) => {
                setLoading(false);
            }
        },
        {
            id: 2,
            title: "Transactions",
            component: () => <AccountTransactionsList />,
            action: async (setCustomEntry, setLoading, id, queryId) => {
                await accounts.getAccountTransactionsData(queryId, 25, 0).then((e: unknown) => {
                    const result = e as IApiAccountTransactions;
                    dispatch(setAccountTransactionsData(result));
                    setLoading(false);
                });
            }
        },
        {
            id: 3,
            title: "Tokens",
            component: () => <div className={styles["account__inner"]}><Plug /></div>,/* <AccountTokensList /> */
            action: async (setCustomEntry, setLoading, id, queryId) => {
                await accounts.getAccountTokensData(queryId).then((e: unknown) => {
                    setLoading(false);
                });
            }
        },
        {
            id: 4,
            title: "NFTs",
            component: () => <AccountNtfList />,
            action: async (setCustomEntry, setLoading, id, queryId) => {
                await accounts.getAccountNftData(queryId).then((e: unknown) => {
                    const result = e as IApiAccountNfts[];
                    dispatch(setAccountNftsData(result));
                    setLoading(false);
                });
            }
        },
        {
            id: 5,
            title: "Resources",
            component: () => <AccountResourcesList />,
            action: async (setCustomEntry, setLoading, id, queryId) => {
                await accounts.getAccountResourcesData(queryId).then((e: unknown) => {
                    const result = e as IApiAccountResource[];
                    dispatch(setAccountResourcesData(result));
                    setLoading(false);
                });
            }
        },
        {
            id: 6,
            title: "Modules",
            component: () => <div className={styles["account__inner"]}><Plug /></div>,
            action: (setCustomEntry, setLoading, id) => {
                setLoading(false);
            }
        },
        {
            id: 6,
            title: "Info",
            component: () => <AccountInfo />,
            action: async (setCustomEntry, setLoading, id, queryId) => {
                await accounts.getAccountInfoData(queryId).then((e: unknown) => {
                    const result = e as IApiAccountInfo;
                    dispatch(setAccountInfoData(result));
                    setLoading(false);
                });
            }
        },
        {
            id: 7,
            title: "Notifications",
            component: () => <div className={styles["account__inner"]}><Plug /></div>,
            action: (setCustomEntry, setLoading, id) => {
                setLoading(false);
            }
        }
    ];
};

export default categories;