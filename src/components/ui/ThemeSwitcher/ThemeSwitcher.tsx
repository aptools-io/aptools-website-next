// React
import React, { useState } from "react";

// Next
import useTranslation from "next-translate/useTranslation";

// Components
import { Moon, Sun } from "src/components/svg";

// Styles
import classNames from "classnames";
import styles from "./ThemeSwitcher.module.scss";

// Other


const ThemeSwitcher: React.FC<IComponent> = ({ 
    className 
}) => {
    const { t } = useTranslation("common");
    const [checked, setChecked] = useState(false);

    const classes = classNames([
        styles["theme-switcher"],
        className
    ]);

    const handleClick = (e) => setChecked(e.currentTarget.checked);

    return (
        <div className={classes}>
            <input 
                id={"theme-switcher__input"}
                className={styles["theme-switcher__input"]} 
                checked={checked}
                onChange={handleClick}
                type={"checkbox"} 
            />
            <label 
                htmlFor={"theme-switcher__input"} 
                className={styles["theme-switcher__input-label"]} 
            >
                <span className={styles["theme-switcher__title"]}>{t("mode")}</span>
                <div className={styles["theme-switcher__switcher"]}>
                    <b>
                        <Moon />
                        <Sun />
                    </b>
                    <Moon />
                    <Sun />
                </div>
            </label>
        </div>
    );
};


export default ThemeSwitcher;
