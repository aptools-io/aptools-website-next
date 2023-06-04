// React
import React from "react";

// public
import aptLogoDots from "public/static/images/svg/apt_logo_dots.svg";
import aptLogoLines from "public/static/images/svg/apt_logo_lines.svg";

// Styles
import classNames from "classnames";
import styles from "./AptLogoBanner.module.scss";

// Other


const AptLogoBanner: React.FC<IComponent> = ({ 
    className 
}) => {
    const classes = classNames([
        styles["apt-logo-banner"],
        className
    ]);

    return (
        <div className={classes}>
            <div className={styles["apt-logo-banner__logo-dots"]}>
                <img src={aptLogoDots.src} alt={"dots"}/>
            </div>
            <div className={styles["apt-logo-banner__logo-lines"]}>
                <img src={aptLogoLines.src} alt={"dots"}/>
            </div>
        </div>
    );
};

export default AptLogoBanner;
