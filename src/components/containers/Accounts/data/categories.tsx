import { AccountsList, AccountsTopNftHoldersList } from "src/components/lists";
import { Plug } from "src/components/ui";
import styles from "../Accounts.module.scss";

const categories = [
    {
        id: 1,
        title: "Top 200 wallets by balance",
        component: () => <AccountsList />,
        action: (setCustomEntry, setLoading, id) => {
            setLoading(false);
        }
    },
    /* {
        id: 2,
        title: "TOP 200 NFT holders by value",
        component: () => <AccountsTopNftHoldersList />,
        action: (setCustomEntry, setLoading, id) => {
            setLoading(false);
        }
    }, */
    {
        id: 3,
        title: "Holders",
        component: () => (
            <div className={styles.accounts__inner}>
                <Plug />
            </div>
        ),
        action: (setCustomEntry, setLoading, id) => {
            setLoading(false);
        }
    },
    {
        id: 4,
        title: "Pending Claims",
        component: () => (
            <div className={styles.accounts__inner}>
                <Plug />
            </div>
        ),
        action: (setCustomEntry, setLoading, id) => {
            setLoading(false);
        }
    },
    {
        id: 5,
        title: "Inventory",
        component: () => (
            <div className={styles.accounts__inner}>
                <Plug />
            </div>
        ),
        action: (setCustomEntry, setLoading, id) => {
            setLoading(false);
        }
    }
];

export default categories;
