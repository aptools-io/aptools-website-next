// React
import React from "react";

// Next
import useTranslation from "next-translate/useTranslation";

// Components
import aptos from "src/assets/images/png/aptos.png";

// Styles
import styles from "./AptosBanner.module.scss";
import classNames from "classnames";
import { AptLogoBanner, Socials } from "src/components/ui";




const AptosBanner: React.FC<IComponent> = ({
    className 
}) => {
    const { t } = useTranslation("common")
    const classes = classNames([
        styles["aptos-banner"],
        className
    ]);

    return (
        <div className={classes}>
            <div className={styles["aptos-banner__description"]}>
                <img src={aptos.src} alt={"aptos"} />
                {t("Join to our Social Media and get News and Insider’s information  from First Hands")}
            </div>
            <div className={styles["aptos-banner__socials"]}>
                <img src={aptos.src} alt={"aptos"} />
                <Socials className={styles["aptos-banner__socials-inner"]} title={false} />
            </div>
            <AptLogoBanner center={false} className={styles["aptos-banner__logo-inner"]} />
        </div>
    );
};

export default AptosBanner;
