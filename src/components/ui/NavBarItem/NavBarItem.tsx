// React
import React from "react";

// Components
import classNames from "classnames";
import ActiveLink from "../ActiveLink/ActiveLink";

// Styles
import styles from "./NavBarItem.module.scss";

// Other

const NavBarItem: React.FC<INavBarMenuItemProps> = ({ 
    data, 
    expanded, 
    className 
}) => {
    const classes = classNames([
        styles["nav-bar-item"],
        { [styles["expanded"]]: expanded },
        className
    ]);

    return (
        <li className={classes}>
            <ActiveLink href={data.link}>
                <a className={styles["nav-bar-item__inner"]}>
                    <span className={styles["nav-bar-item__icon"]}>{data.svg}</span>
                    <span className={styles["nav-bar-item__title"]}>{data.title}</span>
                </a>
            </ActiveLink>
        </li>
    );
};


export default NavBarItem;
