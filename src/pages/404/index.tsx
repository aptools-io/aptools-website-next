import { useRouter } from "next/router";
import { useEffect } from "react";
import { NotFoundPage } from "src/components/pages";
import { logger } from "src/scripts/api/requests";

const NotFound = () => {
    const router = useRouter();
    const { asPath } = router;

    useEffect(() => {
        console.log("test");
        if (!window) return;
        logger.postErrorToLogger(
            "info",
            `Page: ${asPath}. Status code: 404 not found`,
            ""
        );
    }, []);

    return <NotFoundPage />;
};

export default NotFound;
