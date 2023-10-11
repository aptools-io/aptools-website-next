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
    } & IComponent
> = ({ checked = false, id = null, value = null, onChange, label }) => {
    return (
        <div className={styles["checkbox"]}>
            <input checked={checked} id={id} type='checkbox' {...(value && { value })} onChange={onChange} />
            {label && <label htmlFor={id}>{label}</label>}
        </div>
    );
};

export default Checkbox;
