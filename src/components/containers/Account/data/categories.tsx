import { useDispatch } from "react-redux";
import { AccountTransactionsList } from "src/components/lists";
import { setAccountTransactionsData } from "src/scripts/redux/slices/accountsSlice";
import AccountOverview from "../../AccountOverview/AccountOverview";

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
                console.log("testasdas")
                dispatch(setAccountTransactionsData(null))
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
    ]
}

export default categories;