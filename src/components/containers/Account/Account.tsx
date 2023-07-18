// React
import React from "react";

// Redux
import { useSelector } from "react-redux";
import { IRootState } from "src/scripts/redux/store";

// Styles
import classNames from "classnames";
import styles from "./Account.module.scss";

// Hooks
import useWindowSize from "src/scripts/hooks/useWindowSize";

// Components
import { AccountsList } from "src/components/lists";
import { Tabs } from "src/components/ui";




const Account: React.FC<{ all?: boolean } & IComponent> = ({
    all = false,
    className 
}) => {
    /* const { accounts } = useSelector((state: IRootState) => state.accounts); */

    const classes = classNames([
        styles["accounts"],
        className
    ]);

    /* if(!accounts) return <></>; */

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

    return (
        <div className={classes}>
            <Tabs dataArray={categories} itemsCount={false}>
                <div></div>
            </Tabs>
        </div>
    );
};

export default Account;
