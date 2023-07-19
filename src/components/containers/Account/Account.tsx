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

// Data
import categories from "./data/categories";




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

    

    return (
        <div className={classes}>
            <Tabs dataArray={categories} itemsCount={false}>
                <div></div>
            </Tabs>
        </div>
    );
};

export default Account;
