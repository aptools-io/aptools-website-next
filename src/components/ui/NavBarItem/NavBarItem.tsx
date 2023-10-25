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

const NavBarItem: React.FC<INavBarMenuItemProps> = ({ data, expanded, search, className }) => {
    const router = useRouter();
    const { svg, title, link, target, after } = data;
    const classes = classNames([styles["nav-bar-item"], { [styles.expanded]: expanded || search }, { [styles.active]: router.asPath === data.link }, className]);

    const renderAfterItems = (item: INavBarMenuItem, index: number) => {
        const { title, link } = item;
        return (
            <li key={index}>
                <ActiveLink href={link}>
                    <a className={styles["nav-bar-item__after-item"]}>
                        <span className={"title"}>{title}</span>
                    </a>
                </ActiveLink>
            </li>
        );
    };

    return (
        <li className={classes}>
            <ActiveLink href={link}>
                <a target={target} className={styles["nav-bar-item__inner"]}>
                    {svg && <span className={styles["nav-bar-item__icon"]}>{svg}</span>}
                    {title && <span className={styles["nav-bar-item__title"]}>{title}</span>}
                </a>
            </ActiveLink>
            {after?.length > 0 && <ul className={styles["nav-bar-item__after-items"]}>{after.map(renderAfterItems)}</ul>}
        </li>
    );
};

export default NavBarItem;
