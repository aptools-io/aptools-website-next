// React
import React from "react";

// Redux
import { IRootState } from "src/scripts/redux/store";
import { useSelector } from "react-redux";

// Next
import Head from "next/head";
import useTranslation from "next-translate/useTranslation";

// Components
import NextNProgress from "nextjs-progressbar";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";

// Styles
import styles from "./Layout.module.scss";
import classNames from "classnames";

// Other
import menu from "./data/menu";

const Layout: React.FC<{ children: React.ReactNode, pageProps }> = ({ children, pageProps }) => {
    const { title } = useSelector((state: IRootState) => state.pageTitle);
    
    const { t } = useTranslation("menu");

    return (
        <>
            <Head>
                <title>{title ? `${title} | Aptools` : "Aptools – Making advanced on-chain analytics simple"}</title>

                <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png"/>
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png"/>
                <link rel="icon" type="image/png" sizes="192x192" href="/favicon/android-chrome-192x192.png"/>
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png"/>
                <link rel="manifest" href="/favicon/site.webmanifest"/>
                <link rel="mask-icon" href="/favicon/safari-pinned-tab.svg" color="#5bbad5"/>
                <link rel="shortcut icon" href="/favicon/favicon.ico"/>
                <meta name="msapplication-TileColor" content="#2d89ef"/>
                <meta name="msapplication-TileImage" content="/favicon/mstile-144x144.png"/>
                <meta name="msapplication-config" content="/favicon/browserconfig.xml"/>
                <meta name="theme-color" content="#ffffff"/>

                <meta charSet="UTF-8" />
                <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                <meta name="viewport" content={"width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1"}/>
            </Head>

            <div data-theme={"light"} id={"main"} className={classNames([
                styles["layout"],
                { [styles["overflow"]]: pageProps?.overflow }
            ])}>
                {/* <MainLoading /> */}
                <NextNProgress  options={{ showSpinner: false }} color="#3b5998" />
                <NavBar data={menu(t)} />
                <div className={styles["layout__page-wrapper"]}>
                    {children}
                </div>
                <Footer/>
                
            </div>
        </>
    );
};


export default Layout;
