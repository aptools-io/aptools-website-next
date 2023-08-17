// React
import React, { useEffect, useRef, useState } from "react";

// Next
import { useRouter } from "next/router";

// Components
import { Logo, LogoSmall, Magnifier } from "src/components/svg";
import { NavBarItem, ActiveLink } from "src/components/ui";

// Styles
import classNames from "classnames";
import aptools from "public/static/images/svg/aptools.svg";
import useWindowSize from "src/scripts/hooks/useWindowSize";
import { EBreakpoints } from "src/types/common/adaptive";
import styles from "./NavBar.module.scss";
import Search from "../Search/Search";

// Public

const NavBar: React.FC<INavBarProps> = ({ data = [] }) => {
    const navBarRef = useRef(null);
    const searchRef = useRef(null);
    const [search, setSearch] = useState(false);
    const [expanded, setExpanded] = useState(false);
    const [opened, setOpened] = useState(false);
    const router = useRouter();
    const { width } = useWindowSize();

    useEffect(() => {
        if (document.body) document.body.classList.toggle("overflow", opened);
    }, [opened]);

    useEffect(() => {
        if (width === EBreakpoints.TABLET_MINI) setSearch(false);
    }, [width]);

    useEffect(() => {
        if (router.isReady) {
            setOpened(false);
            setExpanded(false);
        }
    }, [router]);

    const classes = classNames([
        styles["nav-bar"],
        {
            [styles.expanded]:
                expanded || (search && width && width >= EBreakpoints.TABLET)
        },
        {
            [styles.opened]:
                opened || (search && width && width >= EBreakpoints.TABLET)
        }
    ]);

    const handleMenu = () => {
        setOpened(!opened);
    };

    const handleSearch = () => setSearch((e) => !e);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (
                navBarRef.current &&
                !navBarRef.current.contains(event.target)
            ) {
                setExpanded(false);
                setOpened(false);
                setSearch(false);
            }
        };

        document.addEventListener("click", handleClickOutside, true);
        return () => {
            document.removeEventListener("click", handleClickOutside, true);
        };
    }, []);
    console.log(
        search,
        width,
        width >= EBreakpoints.TABLET,
        search && width && width >= EBreakpoints.TABLET
    );
    return (
        <div
            ref={navBarRef}
            className={classNames([
                styles["nav-bar__outer"],
                {
                    [styles["active"]]:
                        expanded ||
                        opened ||
                        (search && width && width >= EBreakpoints.TABLET)
                }
            ])}>
            <div
                onMouseEnter={() => setExpanded(true)}
                onMouseLeave={() => setExpanded(false)}
                className={classes}>
                <div className={styles["nav-bar__logo"]}>
                    <ActiveLink href={"/"}>
                        <a className={styles["nav-bar__logo-inner"]}>
                            <Logo />
                            <img src={aptools.src} alt={"aptools"} />
                        </a>
                    </ActiveLink>
                    <ActiveLink href={"/"}>
                        <a className={styles["nav-bar__logo-inner-small"]}>
                            <LogoSmall />
                            <img src={aptools.src} alt={"aptools"} />
                        </a>
                    </ActiveLink>
                    <div className={styles["nav-bar__burger"]}>
                        {width && width < EBreakpoints.TABLET && (
                            <button
                                className={classNames([
                                    styles["nav-bar__search"],
                                    { [styles["active"]]: search }
                                ])}
                                onClick={handleSearch}>
                                <Magnifier />
                            </button>
                        )}
                        <button
                            className={classNames([
                                styles["nav-bar__button"],
                                { [styles.active]: opened }
                            ])}
                            onClick={handleMenu}>
                            <div className={styles["nav-bar__button-inner"]}>
                                <i></i>
                                <i></i>
                                <i></i>
                            </div>
                        </button>
                    </div>
                </div>

                {width && width >= EBreakpoints.TABLET && (
                    <button
                        className={classNames([
                            styles["nav-bar__search"],
                            { [styles["active"]]: search }
                        ])}
                        onClick={handleSearch}>
                        <Magnifier />
                        <span>Search</span>
                    </button>
                )}

                <i className={styles["nav-bar__line"]} />

                {!!data.length && (
                    <ul className={styles["nav-bar__items"]}>
                        {data.map((item, index) => (
                            <NavBarItem
                                search={search}
                                expanded={expanded}
                                data={item}
                                key={index}
                            />
                        ))}
                    </ul>
                )}
            </div>
            <Search ref={searchRef} open={search} setOpen={setSearch} />
        </div>
    );
};

export default NavBar;
