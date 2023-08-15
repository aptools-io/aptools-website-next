// React
import classNames from "classnames";
import React, { useEffect, useState } from "react";
import { Magnifier } from "src/components/svg";
import Button from "../Button/Button";

import styles from "./TextInput.module.scss";

const TextInput: React.FC<
    {
        onChange?: React.ChangeEventHandler<HTMLInputElement>;
        value?: string;
        searchButton?: boolean;
        searchIcon?: boolean;
    } & IComponent
> = ({
    onChange = null,
    value = "",
    searchButton = false,
    searchIcon = false,
    className
}) => {
    console.log("tesasdt");
    const classes = classNames([
        styles["text-input"],
        { [styles.icon]: searchIcon },
        className
    ]);

    return (
        <div className={classes}>
            {searchIcon && (
                <div className={styles["text-input__icon"]}>
                    <Magnifier />
                </div>
            )}
            <input type={"text"} value={value} onChange={onChange} />
            {searchButton && (
                <div className={styles["text-input__button"]}>
                    <Button>Search</Button>
                </div>
            )}
        </div>
    );
};

export default TextInput;
