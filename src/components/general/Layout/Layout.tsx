// React
import React, { useEffect, useState } from "react";

// Redux
import { IRootState } from "src/scripts/redux/store";
import { useDispatch, useSelector } from "react-redux";

// Next
import Head from "next/head";
import useTranslation from "next-translate/useTranslation";
import { useRouter } from "next/router";

// Components
import NextNProgress from "nextjs-progressbar";
import classNames from "classnames";
import { notify } from "src/scripts/common/notification";
import { setPagePath } from "src/scripts/redux/slices/pageSlice";
import useLocalStorage from "src/scripts/hooks/useLocalStorage";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
import Notifications from "../Notifications/Notifications";

// Styles
import styles from "./Layout.module.scss";

// Other
import menu from "./data/menu";

const Layout: React.FC<{ children: React.ReactNode; pageProps }> = ({ children, pageProps }) => {
    const { title } = useSelector((state: IRootState) => state.pageTitle);
    const [path, setPath] = useLocalStorage("path", "");
    const { t } = useTranslation("menu");

    const dispatch = useDispatch();
    const router = useRouter();

    useEffect(() => {
        const getMetrics = (e) => {
            if (e.detail.name === "TTFB" || e.detail.name === "Next.js-route-change-to-render") {
                notify(dispatch, `type: ${e.detail.name} <br/> loading time: ${(e.detail.value / 1000).toFixed(3)}s`, "Test");
            }
        };
        window.addEventListener("metrics", getMetrics);
        return () => window.removeEventListener("metrics", getMetrics);
    }, []);

    useEffect(() => {
        if (!router.isReady) return;
        if (router.pathname === "/404") return;

        setPath(router.pathname);
    }, [router.asPath]);

    return (
        <>
            <Head>
                <title>{title ? `${title} | Aptools` : "Aptools – Making advanced on-chain analytics simple"}</title>

                <link rel='apple-touch-icon' sizes='180x180' href='/favicon/apple-touch-icon.png' />
                <link rel='icon' type='image/png' sizes='32x32' href='/favicon/favicon-32x32.png' />
                <link rel='icon' type='image/png' sizes='192x192' href='/favicon/android-chrome-192x192.png' />
                <link rel='icon' type='image/png' sizes='16x16' href='/favicon/favicon-16x16.png' />
                <link rel='manifest' href='/favicon/site.webmanifest' />
                <link rel='mask-icon' href='/favicon/safari-pinned-tab.svg' color='#5bbad5' />
                <link rel='shortcut icon' href='/favicon/favicon.ico' />
                <meta name='msapplication-TileColor' content='#2d89ef' />
                <meta name='msapplication-TileImage' content='/favicon/mstile-144x144.png' />
                <meta name='msapplication-config' content='/favicon/browserconfig.xml' />
                <meta name='theme-color' content='#ffffff' />

                <meta charSet='UTF-8' />
                <meta httpEquiv='X-UA-Compatible' content='IE=edge' />
                <meta name='viewport' content={"width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1"} />

                <script src={"https://www.googletagmanager.com/gtag/js?id=G-J26EXPCWF1"} async />
                <script
                    dangerouslySetInnerHTML={{
                        __html: "window.dataLayer = window.dataLayer || []; function gtag() { dataLayer.push(arguments); } gtag('js', new Date()); gtag('config', 'G-J26EXPCWF1');"
                    }}
                    async
                />
            </Head>

            <noscript>
                <iframe src='https://www.googletagmanager.com/gtag/js?id=G-J26EXPCWF1' height='0' width='0' style={{ display: "none", visibility: "hidden" }}></iframe>
            </noscript>

            <div data-theme={"light"} id={"main"} className={classNames([styles.layout, { [styles.overflow]: pageProps?.overflow }])}>
                {/* <MainLoading /> */}
                <NextNProgress options={{ showSpinner: false }} color='#3b5998' />
                {!pageProps?.hideNavBar && <NavBar data={menu(t)} />}
                <div className={classNames([styles["layout__page-wrapper"], { [styles["space-between"]]: pageProps?.spaceBetween }])}>{children}</div>
                <Footer />
                <Notifications />
            </div>
        </>
    );
};

export default Layout;
