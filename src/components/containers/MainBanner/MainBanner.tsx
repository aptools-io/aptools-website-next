// React
import React from "react";

// Components
import { AptLogoBanner, Socials, ThemeSwitcher } from "src/components/ui";

// Styles
import classNames from "classnames";
import styles from "./MainBanner.module.scss";

// Other

const MainBanner: React.FC<IMainBannerProps> = ({ title = null, description = null, className }) => {
    const classes = classNames([styles["main-banner"], className]);

    return (
        <div className={classes}>
            <div className={styles["main-banner__info-wrapper"]}>
                {(title || description) && (
                    <div className={styles["main-banner__info"]}>
                        {title && <strong className={styles["main-banner__title"]}>{title}</strong>}
                        {description && <span className={styles["main-banner__description"]}>{description}</span>}
                    </div>
                )}
                <div className={styles["main-banner__socials"]}>
                    <Socials />
                </div>
            </div>
            <div className={styles["main-banner__logo"]}>
                <AptLogoBanner className={styles["main-banner__logo-inner"]} />
            </div>
            {/* <div className={styles["main-banner__theme-switcher"]}>
                <ThemeSwitcher />
            </div> */}
        </div>
    );
};

export default MainBanner;
