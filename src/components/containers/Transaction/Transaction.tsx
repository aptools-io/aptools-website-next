// React
import React from "react";

// Redux
import { useDispatch, useSelector } from "react-redux";
import { IRootState } from "src/scripts/redux/store";

// Components
import { AccountsList } from "src/components/lists";
import { Tabs } from "src/components/ui";

// Hooks
import useWindowSize from "src/scripts/hooks/useWindowSize";

// Styles
import classNames from "classnames";
import styles from "./Transaction.module.scss";

// Data
import categories from "./data/categories";

const Transaction: React.FC<IComponent> = ({ className }) => {
    /* const dispatch = useDispatch(); */
    const { transaction } = useSelector(
        (state: IRootState) => state.statsTransactions
    );
    const { type } = transaction || {};

    const classes = classNames([styles.transaction, className]);

    return (
        <div className={classes}>
            <Tabs
                windowLoad
                tabsName={"transactionTabs"}
                dataArray={categories(type)}
                itemsCount={false}
                hideSingle>
                <div></div>
            </Tabs>
        </div>
    );
};

export default Transaction;
