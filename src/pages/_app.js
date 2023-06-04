// Components
import { Provider } from "react-redux";
import { Layout } from "../components/general/index";

// Redux
import store from "../scripts/redux/store";

// Styles
import "../styles/pages/index.scss";

const AptoolsApp = (props) => {
    const { Component, pageProps } = props;

    return (
        <Provider store={store}>
            <Layout pageProps={pageProps}>
                <Component {...pageProps} />
            </Layout>
        </Provider>
    );
};
  
export default AptoolsApp;
