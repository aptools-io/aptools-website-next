
import { AccountsList } from "src/components/lists";
import { Plug } from "src/components/ui";
import styles from "../Accounts.module.scss";

const categories = [
    {
        id: 1,
        title: "Transfers",
        component: () => <AccountsList />,
        action: (setCustomEntry, setLoading, id) => {
            setLoading(false);
        }
    },
    {
        id: 2,
        title: "Holders",
        component: () => <div className={styles.accounts__inner}><Plug /></div>,
        action: (setCustomEntry, setLoading, id) => {
            setLoading(false);
        }
    },
    {
        id: 3,
        title: "Pending Claims",
        component: () => <div className={styles.accounts__inner}><Plug /></div>,
        action: (setCustomEntry, setLoading, id) => {
            setLoading(false);
        }
    },
    {
        id: 4,
        title: "Inventory",
        component: () => <div className={styles.accounts__inner}><Plug /></div>,
        action: (setCustomEntry, setLoading, id) => {
            setLoading(false);
        }
    }
];

export default categories;