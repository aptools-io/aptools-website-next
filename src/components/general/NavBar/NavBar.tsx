// React
import React, { useEffect, useState } from "react";

// Next
import { useRouter } from "next/router";

// Components
import { Logo, LogoSmall, Magnifier } from "src/components/svg";
import { NavBarItem, ActiveLink } from "src/components/ui";

// Styles
import classNames from "classnames";
import styles from "./NavBar.module.scss";

// Public
import aptools from "public/static/images/svg/aptools.svg";

const NavBar: React.FC<INavBarProps> = ({ 
    data = [] 
}) => {
    const [expanded, setExpanded] = useState(false);
    const [opened, setOpened] = useState(false);
    const router = useRouter();

    useEffect(() => {
        if(document.body) document.body.classList.toggle("overflow", opened)
    }, [opened]);

    useEffect(() => {
        if(router.isReady) {
            setOpened(false);
            setExpanded(false);
        } 
    }, [router])

    const classes = classNames([
        styles["nav-bar"],
        { [styles["expanded"]]: expanded },
        { [styles["opened"]]: opened }
    ]);

    const handleMenu = () => {
        setOpened(!opened);
    };

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
                        <img src={aptools.src} alt={"aptools"} />
                    </a>
                </ActiveLink>
                <ActiveLink href={"/"}>
                    <a className={styles["nav-bar__logo-inner-small"]}>
                        <LogoSmall/>
                        <img src={aptools.src} alt={"aptools"} />
                    </a>
                </ActiveLink>
                <button className={classNames([styles["nav-bar__button"], { [styles["active"]]: opened }])} onClick={handleMenu}>
                    <div className={styles["nav-bar__button-inner"]}>
                        <i></i>
                        <i></i>
                        <i></i>
                    </div>
                </button>
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

export default NavBar;
