// React
import React from "react";

// Redux
import { useSelector } from "react-redux";
import { IRootState } from "src/scripts/redux/store";

// Styles
import classNames from "classnames";
import { Tabs } from "src/components/ui";
import useWindowSize from "src/scripts/hooks/useWindowSize";
import styles from "./Accounts.module.scss";

// Components
import ProjectsList from "../ProjectsList/ProjectsList";
import { AccountsList } from "src/components/lists";



const Accounts: React.FC<{ all?: boolean } & IComponent> = ({
    all = false,
    className 
}) => {
    const { accounts } = useSelector((state: IRootState) => state.accounts);
   /*  const { data: projects } = useSelector((state: IRootState) => state.statsProjects);
    const { width } = useWindowSize();
    const mediaData = media(width); */

    const classes = classNames([
        styles["accounts"],
        className
    ]);

    if(!accounts) return <></>;

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
    ]

    return (
        <div className={classes}>
            <Tabs dataArray={categories} itemsCount={false}>
                <AccountsList />
            </Tabs>
        </div>
    );
};

export default Accounts;
