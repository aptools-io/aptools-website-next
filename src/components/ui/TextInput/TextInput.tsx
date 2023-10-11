// React
import classNames from "classnames";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { Magnifier } from "src/components/svg";
import Button from "../Button/Button";

import styles from "./TextInput.module.scss";

const TextInput: React.FC<
    {
        id?: string;
        label?: string;
        onChange?: React.ChangeEventHandler<HTMLInputElement>;
        value?: string;
        searchButton?: boolean;
        searchIcon?: boolean;
        placeholder?: string;
        sideComponent?: (focused?: boolean) => JSX.Element;
    } & IComponent
> = ({ id = null, label = null, onChange = null, value = "", searchButton = false, searchIcon = false, placeholder = "", sideComponent = null, className }) => {
    const router = useRouter();
    const [focus, setFocus] = useState(false);
    const classes = classNames([styles["text-input"], { [styles["icon"]]: searchIcon }, { [styles["focus"]]: focus }, className]);

    useEffect(() => {
        const handleRouteChange = () => setFocus(false);
        router.events.on("routeChangeStart", handleRouteChange);
        return () => router.events.off("routeChangeStart", handleRouteChange);
    }, [router?.asPath]);

    const handleFocus = () => setFocus(true);
    const handleBlur = () => setFocus(false);

    return (
        <div className={classes} onBlur={handleBlur} onFocus={handleFocus}>
            {label && <label {...(id && { htmlFor: id })}>{label}</label>}
            <div className={styles["text-input__wrapper"]}>
                {searchIcon && (
                    <div className={styles["text-input__icon"]}>
                        <Magnifier />
                    </div>
                )}
                <input {...(id && { id })} placeholder={placeholder} type={"text"} value={value} onChange={onChange} />
                {searchButton && (
                    <div className={styles["text-input__button"]}>
                        <Button>Search</Button>
                    </div>
                )}
            </div>
            {sideComponent && sideComponent(focus)}
        </div>
    );
};

export default TextInput;
