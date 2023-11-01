// React
import React, { useEffect, useState } from "react";

// styles
import NoImageLogo from "public/static/images/svg/no_image_logo.svg";
import styles from "./Checkbox.module.scss";

// static

const Checkbox: React.FC<
    {
        checked?: boolean;
        id?: string;
        value?: string;
        onChange?: (e: any) => void;
        label?: string;
        field?: any;
        error?: string;
    } & IComponent
> = ({ checked = false, id = null, value = null, onChange, label, field = null, error = "" }) => {
    return (
        <>
            <div className={styles["checkbox"]}>
                <input
                    {...(field === null
                        ? {
                              id,
                              type: "checkbox",
                              value,
                              checked,
                              onChange
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
