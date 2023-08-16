// React
import React, { forwardRef, useEffect, useState } from "react";

// Redux
import { IRootState } from "src/scripts/redux/store";
import { useSelector } from "react-redux";

// Styles
import classNames from "classnames";

// Components
import {
    Breadcrumbs,
    Button,
    SearchTooltip,
    TextInput
} from "src/components/ui";
import { useRouter } from "next/router";
import { Close } from "src/components/svg";
import styles from "./Search.module.scss";

const checkboxData = [
    "All categories",
    "Accounts",
    "Block by version",
    "Block by height",
    "Transaction by hash",
    "Transaction by version",
    "Projects"
];

const Search: React.ForwardRefRenderFunction<
    any,
    {
        open?: boolean;
        setOpen?: React.Dispatch<React.SetStateAction<boolean>>;
    } & IComponent
> = ({ open = false, setOpen = null, className }, ref) => {
    const router = useRouter();
    const [checked, setChecked] = useState(checkboxData);
    const [searchTerm, setSearchTerm] = useState("");

    const classes = classNames([
        styles.search,
        { [styles["active"]]: open },
        className
    ]);

    useEffect(() => {
        const handleRouteChange = () => setOpen(false);
        router.events.on("routeChangeStart", handleRouteChange);
        return () => router.events.off("routeChangeStart", handleRouteChange);
    }, [router?.asPath]);

    const handleCheckbox = (e) => {
        let temp = [...checked];
        const { value } = e.target;
        const id = temp.indexOf(value);

        if (id > -1) temp.splice(id, 1);
        else temp.push(value);

        if (value === checkboxData[0]) temp = checkboxData;
        if (value === checkboxData[0] && id > -1) temp = [];

        setChecked(temp);
    };

    const renderCheckboxes = (item, index) => {
        return (
            <li key={index} className={styles["search__checkbox"]}>
                <input
                    checked={checked.includes(item)}
                    id={`checkbox-search-${index}`}
                    type='checkbox'
                    value={item}
                    onChange={handleCheckbox}
                />
                <label htmlFor={`checkbox-search-${index}`}>{item}</label>
            </li>
        );
    };

    const handleSearchTooltip = (focused) => (
        <SearchTooltip
            hidden={!focused}
            terms={searchTerm}
            categories={checked}
        />
    );

    const handleClose = () => setOpen(false);

    return (
        <div ref={ref} className={classes}>
            <div className={styles["search__inner"]}>
                <div className={styles["search__settings"]}>
                    <strong className={styles["search__info"]}>
                        Choose Search Category
                    </strong>
                    <ul className={styles["search__checkboxes"]}>
                        {checkboxData.map(renderCheckboxes)}
                    </ul>
                </div>
                <div className={styles["search__input"]}>
                    <TextInput
                        placeholder={"Search"}
                        searchIcon
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        sideComponent={handleSearchTooltip}
                    />
                    <button onClick={handleClose}>
                        <Close />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default forwardRef(Search);
