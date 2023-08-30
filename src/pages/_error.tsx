import { useRouter } from "next/router";
import { useEffect } from "react";
import { ClientSideErrorPage } from "src/components/pages";
import { logger } from "src/scripts/api/requests";

const ErrorPage = (props) => {
    const router = useRouter();
    const { asPath } = router;

    useEffect(() => {
        if (!window) return;
        const { statusCode, text } = props;
        logger.postErrorToLogger(
            "error",
            `Page: ${asPath}. Status code: ${statusCode}`,
            text
        );
    }, []);

    return <ClientSideErrorPage />;
};

ErrorPage.getInitialProps = ({ res, err }) => {
    const statusCode =
        err?.response?.status ??
        res?.statusCode ??
        err?.statusCode ??
        undefined;
    if (res && statusCode) {
        res.statusCode = statusCode;
    }
    const text = String(res?.statusMessage || err?.message || err);
    return { statusCode, text };
};

export default ErrorPage;
