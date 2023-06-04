// React
import React, { useState } from "react";

// Components
import { Logo, Magnifier } from "src/components/svg";
import { NavBarItem, ActiveLink } from "src/components/ui";

// Styles
import styles from "./NavBar.module.scss";

// Other
import classNames from "classnames";


const SideNavBar: React.FC<ISideNavBarProps> = ({ 
    data = [] 
}) => {
    const [expanded, setExpanded] = useState(false);

    const classes = classNames([
        styles["nav-bar"],
        { [styles["expanded"]]: expanded }
    ])

    return (
        <div 
            onMouseEnter={() => setExpanded(true)} 
            onMouseLeave={() => setExpanded(false)} 
            className={classes}
        >
            <div className={styles["nav-bar__logo"]}>
                <ActiveLink href={"/"}>
                    <a className={styles["nav-bar__logo-inner"]}>
                        <Logo/>
                    </a>
                </ActiveLink>
            </div>

            <div className={styles["nav-bar__search"]}>
                <Magnifier />
            </div>

            <i className={styles["nav-bar__line"]} />

            {!!data.length && 
                <ul className={styles["nav-bar__items"]}>
                    {data.map((item, index) => <NavBarItem expanded={expanded} data={item} key={index}/>)}
                </ul>
            }
        </div>
    );
};

export default SideNavBar;
