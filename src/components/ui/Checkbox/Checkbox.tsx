// React
import React, { useEffect, useState } from "react";

// styles
import NoImageLogo from "public/static/images/svg/no_image_logo.svg";
import classNames from "classnames";
import styles from "./Checkbox.module.scss";

// static

const Checkbox: React.FC<
    {
        checked?: boolean;
        id?: string;
        value?: string;
        onChange?: (e: any) => void;
        onClick?: (e: any) => void;
        label?: string;
        field?: any;
        error?: string;
        switcher?: boolean;
    } & IComponent
> = ({ checked = false, id = null, value = null, onChange, onClick, label, field = null, error = "", switcher = false }) => {
    return (
        <>
            <div className={classNames([styles["checkbox"], { [styles["switcher"]]: switcher }])}>
                <input
                    {...(field === null
                        ? {
                              id,
                              type: "checkbox",
                              value,
                              checked,
                              onChange,
                              onClick
                          }
                        : {
                              ...field,
                              id,
                              type: "checkbox"
                          })}
                />
                {label && <label htmlFor={id}>{label}</label>}
            </div>
            {error && <span className={styles["checkbox__error"]}>{error}</span>}
        </>
    );
};

export default Checkbox;
