// React
import React from "react";

// Redux
import { useSelector } from "react-redux";
import { IRootState } from "src/scripts/redux/store";

// Styles
import classNames from "classnames";
import styles from "./Accounts.module.scss";

// Components
import { AccountsList } from "src/components/lists";
import { Tabs } from "src/components/ui";

// Data
import categories from "./data/categories";



const Accounts: React.FC<{ all?: boolean } & IComponent> = ({
    all = false,
    className 
}) => {
    const { accountsWallets } = useSelector((state: IRootState) => state.accounts);

    const classes = classNames([
        styles["accounts"],
        className
    ]);

    if(!accountsWallets) return <></>;

    return (
        <div className={classes}>
            <Tabs dataArray={categories} itemsCount={false}>
                <AccountsList />
            </Tabs>
        </div>
    );
};

export default Accounts;
