const categories = [
    {
        id: 1,
        title: "Overview",
        component: () => <div>Overview</div>,
        action: (setCustomEntry, setLoading, id) => {
            setLoading(false);
        }
    },
    {
        id: 2,
        title: "Transactions",
        component: () => <div>Transactions</div>,
        action: (setCustomEntry, setLoading, id) => {
            setLoading(false);
        }
    },
    {
        id: 3,
        title: "Tokens",
        component: () => <div>Tokens</div>,
        action: (setCustomEntry, setLoading, id) => {
            setLoading(false);
        }
    },
    {
        id: 4,
        title: "NFTs",
        component: () => <div>NFTs</div>,
        action: (setCustomEntry, setLoading, id) => {
            setLoading(false);
        }
    },
    {
        id: 5,
        title: "Resources",
        component: () => <div>Resources</div>,
        action: (setCustomEntry, setLoading, id) => {
            setLoading(false);
        }
    },
    {
        id: 6,
        title: "Modules",
        component: () => <div>Modules</div>,
        action: (setCustomEntry, setLoading, id) => {
            setLoading(false);
        }
    },
    {
        id: 6,
        title: "Info",
        component: () => <div>Info</div>,
        action: (setCustomEntry, setLoading, id) => {
            setLoading(false);
        }
    },
    {
        id: 7,
        title: "Notifications",
        component: () => <div>Notifications</div>,
        action: (setCustomEntry, setLoading, id) => {
            setLoading(false);
        }
    }
];

export default categories;