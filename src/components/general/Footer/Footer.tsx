// React
import React from "react";

// Styles
import styles from "./Footer.module.scss";
import classNames from "classnames";

// Components
import { Socials } from "src/components/ui";

const Footer: React.FC<IComponent> = ({ 
    className
}) => {

    const classes = classNames([
        styles["footer"],
        className
    ]);

 
    return (
        <div className={classes}>
           <span>©2023 EX2team</span>
           <Socials className={styles["footer__socials"]} title={false} />
        </div>
    );
};


export default Footer;
