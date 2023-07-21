// Slices
import { setAccountTransactionsData } from "src/scripts/redux/slices/accountsSlice";

// Components
import { AccountTransactionsList } from "src/components/lists";
import { Plug } from "src/components/ui";
import AccountOverview from "../../AccountOverview/AccountOverview";

// Styles
import styles from "../Account.module.scss";

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
            action: (setCustomEntry, setLoading, id) => {
                dispatch(setAccountTransactionsData(null));
                setLoading(false);
            }
        },
        {
            id: 3,
            title: "Tokens",
            component: () => <div className={styles["account__inner"]}><Plug /></div>,
            action: (setCustomEntry, setLoading, id) => {
                setLoading(false);
            }
        },
        {
            id: 4,
            title: "NFTs",
            component: () => <div className={styles["account__inner"]}><Plug /></div>,
            action: (setCustomEntry, setLoading, id) => {
                setLoading(false);
            }
        },
        {
            id: 5,
            title: "Resources",
            component: () => <div className={styles["account__inner"]}><Plug /></div>,
            action: (setCustomEntry, setLoading, id) => {
                setLoading(false);
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
            component: () => <div className={styles["account__inner"]}><Plug /></div>,
            action: (setCustomEntry, setLoading, id) => {
                setLoading(false);
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