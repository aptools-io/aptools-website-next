// Components
import { Plug } from "src/components/ui";
import TransactionOverview from "../../TransactionOverview/TransactionOverview";

// Styles
import styles from "../Transaction.module.scss";

const categories = (type) => {
    const items = [
        {
            id: 1,
            title: "Overview",
            component: () => <TransactionOverview />,
            action: async (setCustomEntry, setLoading, id, queryId) => {
                setLoading(false);
            }
        },
        {
            id: 2,
            title: "Balance changes",
            component: () => <Plug noData />,
            action: async (setCustomEntry, setLoading, id, queryId) => {
                setLoading(false);
            }
        },
        {
            id: 3,
            title: "Events",
            component: () => <Plug noData />,
            action: async (setCustomEntry, setLoading, id, queryId) => {
                setLoading(false);
            }
        },
        {
            id: 4,
            title: "Payload",
            component: () => <Plug noData />,
            action: async (setCustomEntry, setLoading, id, queryId) => {
                setLoading(false);
            }
        },
        {
            id: 5,
            title: "Changes",
            component: () => <Plug noData />,
            action: async (setCustomEntry, setLoading, id, queryId) => {
                setLoading(false);
            }
        },
    ];

    const getItems = (type) => {

        switch(type) {
            case "state_checkpoint_transaction": return [items[0]];
            case "user_transaction": return items;
            case "block_metadata_transaction": return [items[0], items[4]];
            default: return items;
        }
    };

    const approvedItems = getItems(type);

    return approvedItems || [items[0]];
};

export default categories;