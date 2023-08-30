// Components
import { useRouter } from "next/router";
import { useEffect } from "react";
import { Provider } from "react-redux";
import { logger } from "src/scripts/api/requests";
import { Layout } from "../components/general/index";

// Redux
import store from "../scripts/redux/store";

// Styles
import "../styles/pages/index.scss";

export function reportWebVitals(metric) {
    /* const metrics = new CustomEvent("metrics", { detail: metric });
    window.dispatchEvent(metrics); */
}

const AptoolsApp = (props) => {
    const { Component, pageProps } = props;
    const router = useRouter();
    const { asPath } = router;

    useEffect(() => {
        if (!window) return;
        const onError = (e) => {
            if (!e) return;
            if (e.type === "error") {
                const { message, stack } = e?.error || {};
                logger.postErrorToLogger(
                    "error",
                    `Page: ${asPath}. Message: ${message}`,
                    stack
                );
                console.log(`Error. ${message}: ${stack}`);
            }
        };

        window.addEventListener("error", onError);
        return () => {
            window.removeEventListener("error", onError);
        };
    }, []);

    return (
        <Provider store={store}>
            <Layout
                pageProps={{
                    ...pageProps /* , "hideNavBar": props.router.state?.route === "/404" */
                }}>
                <Component {...pageProps} />
            </Layout>
        </Provider>
    );
};

export default AptoolsApp;
