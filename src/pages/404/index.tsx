import { useRouter } from "next/router";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { NotFoundPage } from "src/components/pages";
import { logger } from "src/scripts/api/requests";
import useLocalStorage from "src/scripts/hooks/useLocalStorage";
import { IRootState } from "src/scripts/redux/store";

const NotFound = (test) => {
    const router = useRouter();
    const { asPath } = router;

    useEffect(() => {
        if (!window) return;
        logger.postErrorToLogger("error", `Page: ${asPath}. Status code: 404 not found`, `This page is not found. Status code 404 not found\nPrevious page: ${localStorage.getItem("path")}`);
    }, []);

    return <NotFoundPage />;
};

export default NotFound;
