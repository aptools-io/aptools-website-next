// React
import React from "react";

// Next
import useTranslation from "next-translate/useTranslation";

// Styles
import styles from "./Socials.module.scss";

// Other
import classNames from "classnames";
import socials from "./data/socials";


const Socials: React.FC<ISocialsProps> = ({ 
    data = socials(), 
    className 
}) => {
    const { t } = useTranslation("common");

    const classes = classNames([
        styles["socials"],
        className
    ]);

    const renderSocial = (item: ISocialsItem, index) => 
        <li key={index} className={styles["socials__item"]}>
            <a href={item.link}>{item.svg}</a>
        </li>

    return (
        <div className={classes}>
            <div className={styles["socials__title"]}>{t("our social links")}</div>
            {!!data.length && 
                <ul className={styles["socials__items"]}>
                    {data.map(renderSocial)}
                </ul>
            }
        </div>
    )
}


export default Socials;
