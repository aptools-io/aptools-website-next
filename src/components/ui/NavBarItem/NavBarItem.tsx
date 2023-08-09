// React
import React from "react";

// Next
import { useRouter } from "next/router";

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
    const router = useRouter();
    const classes = classNames([
        styles["nav-bar-item"],
        { [styles.expanded]: expanded },
        { [styles.active]: router.asPath === data.link },
        className
    ]);

    return (
        <li className={classes}>
            <ActiveLink href={data.link}>
                <a target={data.target} className={styles["nav-bar-item__inner"]}>
                    <span className={styles["nav-bar-item__icon"]}>{data.svg}</span>
                    <span className={styles["nav-bar-item__title"]}>{data.title}</span>
                </a>
            </ActiveLink>
        </li>
    );
};


export default NavBarItem;
