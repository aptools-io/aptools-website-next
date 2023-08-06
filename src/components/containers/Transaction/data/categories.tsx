// Components
import { Plug } from "src/components/ui";
import TransactionCodeList from "../../TransactionCodeList/TransactionCodeList";
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
            component: () => <div style={{ position: "relative", height: 200 }}><Plug /></div>,
            action: async (setCustomEntry, setLoading, id, queryId) => {
                setLoading(false);
            }
        },
        {
            id: 3,
            title: "Events",
            component: () => <TransactionCodeList key={3} getElements={(transaction: IApiTransactionInfo): ITransactionCodeElement[][] => {
                const { events } = transaction || {};
                if(!events?.length) return [];
                if(events?.length > 0) return events.map((item: IApiTransactionInfoEvent, index: number) => {
                    return [{
                        title: "Index",
                        value: index
                    }, {
                        title: "Account Address",
                        value: item?.guid?.account_address || "",
                        hash: true
                    }, {
                        title: "Creation Number",
                        value: item?.guid?.creation_number || ""
                    }, {
                        title: "Sequence Number",
                        value: item?.sequence_number || ""
                    }, {
                        title: "Type",
                        value: item?.type || ""
                    }, {
                        title: "Signature",
                        code: item?.data || {}
                    }] as ITransactionCodeElement[];
                });
                return [];
            }} />,
            action: async (setCustomEntry, setLoading, id, queryId) => {
                setLoading(false);
            }
        },
        {
            id: 4,
            title: "Payload",
            component: () => <TransactionCodeList key={4} getElements={(transaction: IApiTransactionInfo): ITransactionCodeElement[][] => {
                const { payload } = transaction || {};
                if(!payload) return [];
                if([payload]?.length > 0) return [payload].map((item: IApiTransactionInfoPayload, index: number) => {
                    return [{
                        title: "Index",
                        value: index
                    }, {
                        title: "Type",
                        value: item?.type || ""
                    }, {
                        title: "Creation Number",
                        value: item?.function || "",
                        hash: true
                    }, {
                        title: "",
                        code: item || {}
                    }] as ITransactionCodeElement[];
                });
                return [];
            }} />,
            action: async (setCustomEntry, setLoading, id, queryId) => {
                setLoading(false);
            }
        },
        {
            id: 5,
            title: "Changes",
            component: () => <TransactionCodeList key={5} getElements={(transaction: IApiTransactionInfo): ITransactionCodeElement[][] => {
                const { changes } = transaction || {};
                if(!changes?.length) return [];
                if(changes?.length > 0) return changes.map((item: IApiTransactionInfoChange, index: number) => {
                    return [{
                        title: "Index",
                        value: index
                    }, {
                        title: "Type",
                        value: item?.type || ""
                    }, {
                        title: "Account Address",
                        value: item?.address || "",
                        hash: true
                    }, {
                        title: "State Key Hash",
                        value: item?.state_key_hash || "",
                        hash: true
                    }, {
                        title: "Data",
                        code: item?.data || {}
                    }] as ITransactionCodeElement[];
                });
                return [];
            }} />,
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
