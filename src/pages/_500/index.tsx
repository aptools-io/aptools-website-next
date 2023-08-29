import { useEffect } from "react";
import { ServerErrorPage } from "src/components/pages";

const ServerError = ({ errorText, text }) => {
    useEffect(() => {
        if (!window) return;
        const onError = (e) => {
            console.log("Testikkk 223", e);
            if (!e) return;
            if (e.type === "error") {
                const { message, stack } = e?.error || {};
                // logger.postErrorToLogger("error", message, stack);
                console.log(`Error. ${message}: ${stack}`);
            }
        };

        window.addEventListener("error", onError);
        return () => {
            window.removeEventListener("error", onError);
        };
    }, []);

    return <ServerErrorPage />;
};

export default ServerError;
