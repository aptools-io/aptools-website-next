// React
import React, { forwardRef } from "react";

// Redux
import { IRootState } from "src/scripts/redux/store";
import { useSelector } from "react-redux";

// Styles
import classNames from "classnames";

// Components
import { Breadcrumbs, Button, TextInput } from "src/components/ui";
import { useRouter } from "next/router";
import styles from "./Search.module.scss";


const checkboxData = [
    "All categories",
    "Accounts",
    "Block by version",
    "Block by height",
    "Transaction by hash",
    "Transaction by version",
    "Projects",
    "News"
];

const Search: React.ForwardRefRenderFunction<any, { open?: boolean, setOpen?: React.Dispatch<React.SetStateAction<boolean>>  } & IComponent> = ({ 
    open = false,
    setOpen = null,
    className
}, ref) => {

    const classes = classNames([
        styles.search,
        { [styles["active"]]: open },
        className
    ]);

    const renderCheckboxes = (item, index) => {
        return (
            <li key={index} className={styles["search__checkbox"]}>
                <input id={`checkbox-search-${index}`} type="checkbox" />
                <label htmlFor={`checkbox-search-${index}`}>{item}</label>
            </li>
        );
    };
 
    return (
        <div ref={ref} className={classes} >
            <div className={styles["search__inner"]}>
                <div className={styles["search__settings"]}>
                    <strong className={styles["search__info"]}>Choose Search Category</strong>
                    <ul className={styles["search__checkboxes"]}>
                        {checkboxData.map(renderCheckboxes)}
                    </ul>
                </div>
                <div className={styles["search__input"]}>
                    <TextInput searchIcon  />
                </div>
            </div>
        </div>
    );
};


export default forwardRef(Search);
