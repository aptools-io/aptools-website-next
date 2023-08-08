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
import styles from "./Account.module.scss";

// Data
import categories from "./data/categories";




const Account: React.FC<{ all?: boolean } & IComponent> = ({
    all = false,
    className 
}) => {
    const dispatch = useDispatch();

    const classes = classNames([
        styles.account,
        className
    ]);


    return (
        <div className={classes}>
            <Tabs dataArray={categories(dispatch)} itemsCount={false}>
                <div></div>
            </Tabs>
        </div>
    );
};

export default Account;
