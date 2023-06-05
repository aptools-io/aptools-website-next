// React
import React, { useState } from "react";

// Next
import Head from "next/head";
import useTranslation from "next-translate/useTranslation";
import { useRouter } from "next/router";

// Components
import NavBar from "../NavBar/NavBar";
import MainLoading from "../MainLoading/MainLoading";

// Styles
import styles from "./Layout.module.scss";

// Other
import menu from "./data/menu";


const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const { t, lang } = useTranslation("menu");
    const router = useRouter();

    const [loading, setLoading] = useState({
        start: false,
        end: false
    });
    
    React.useEffect(() => {
        router.events.on("routeChangeStart", () => setLoading({
            start: true,
            end: false
        }));
        router.events.on("routeChangeComplete", () => setLoading({
            start: false,
            end: true
        }));
        return () => {
            /* router.events.off("routeChangeStart");
            router.events.off("routeChangeComplete"); */
        };
    }, [router.pathname, lang]);

    return (
        <>
            <Head>
                <meta charSet="UTF-8" />
                <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1"/>
            </Head>

            <div data-theme={"light"} id={"main"} className={styles["layout"]}>
                <MainLoading loading={loading} />
                <NavBar data={menu(t)} />
                <div className={styles["layout__page-wrapper"]}>{children}</div>
            </div>
        </>
    );
};


export default Layout;
