import { AccountsList } from "src/components/lists";

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
        component: () => <div>1</div>,
        action: (setCustomEntry, setLoading, id) => {
            setLoading(false);
        }
    },
    {
        id: 3,
        title: "Pending Claims",
        component: () => <div>2</div>,
        action: (setCustomEntry, setLoading, id) => {
            setLoading(false);
        }
    },
    {
        id: 4,
        title: "Inventory",
        component: () => <div>3</div>,
        action: (setCustomEntry, setLoading, id) => {
            setLoading(false);
        }
    }
];

export default categories;