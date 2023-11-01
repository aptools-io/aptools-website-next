// React
import classNames from "classnames";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { Alert, EyeOff, EyeOn, Magnifier } from "src/components/svg";
import Button from "../Button/Button";

import styles from "./TextInput.module.scss";

const TextInput: React.FC<
    {
        id?: string;
        label?: string;
        name?: string;
        onChange?: React.ChangeEventHandler<HTMLInputElement>;
        value?: string;
        searchButton?: boolean;
        searchIcon?: boolean;
        placeholder?: string;
        field?: any;
        error?: string;
        password?: boolean;
        sideComponent?: (focused?: boolean) => JSX.Element;
    } & IComponent
> = ({ id = null, name = null, label = null, onChange = null, value = "", searchButton = false, searchIcon = false, placeholder = "", sideComponent = null, className, field = null, error = "", password = false }) => {
    const router = useRouter();
    const [focus, setFocus] = useState(false);
    const [type, setType] = useState(password ? "password" : "text");
    const classes = classNames([styles["text-input"], { [styles["icon"]]: searchIcon }, { [styles["focus"]]: focus }, { [styles["error"]]: error }, className]);

    useEffect(() => {
        const handleRouteChange = () => setFocus(false);
        router.events.on("routeChangeStart", handleRouteChange);
        return () => router.events.off("routeChangeStart", handleRouteChange);
    }, [router?.asPath]);

    const handleFocus = () => setFocus(true);
    const handleBlur = () => setFocus(false);
    const handleShowPassword = () => setType((e) => (e === "text" ? "password" : "text"));

    return (
        <div className={classes} onBlur={handleBlur} onFocus={handleFocus}>
            {label && <label {...(id && { htmlFor: id })}>{label}</label>}
            <div className={styles["text-input__wrapper"]}>
                {searchIcon && (
                    <div className={styles["text-input__icon"]}>
                        <Magnifier />
                    </div>
                )}
                <input
                    {...(field === null
                        ? {
                              id,
                              name,
                              placeholder,
                              type,
                              value,
                              onChange
                          }
                        : {
                              ...field,
                              type,
                              placeholder
                          })}
                />
                {password && (
                    <button type={"button"} className={classNames([styles["text-input__icon"], styles["right"], styles["pass"]])} onClick={handleShowPassword}>
                        {type !== "text" ? <EyeOff /> : <EyeOn />}
                    </button>
                )}
                {!password && error && (
                    <div className={classNames([styles["text-input__icon"], styles["right"]])}>
                        <Alert />
                    </div>
                )}
                {searchButton && (
                    <div className={styles["text-input__button"]}>
                        <Button>Search</Button>
                    </div>
                )}
            </div>
            {sideComponent && sideComponent(focus)}
            {error && <span className={styles["text-input__error"]}>{error}</span>}
        </div>
    );
};

export default TextInput;
