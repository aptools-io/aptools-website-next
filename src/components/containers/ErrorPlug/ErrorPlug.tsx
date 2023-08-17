// React
import React from "react";

// Styles
import classNames from "classnames";

// Components
import { Button } from "src/components/ui";
import { NotFoundDude, ServerErrorDude } from "src/components/svg";

// Enums
import { EStatusCode } from "src/types/common/statusCode";

// Images
import notFound from "src/assets/images/svg/NotFoundDude.svg";
import serverError from "src/assets/images/svg/ServerErrorDude.svg";
import styles from "./ErrorPlug.module.scss";

const ErrorPlug: React.FC<IErrorPlugProps> = ({
    errorType = EStatusCode.NotFound,
    className
}) => {
    const classes = classNames([styles["error-plug"], className]);

    const data = {
        [EStatusCode.NotFound]: {
            status: 404,
            title: "Page not found",
            description: "We can’t seem to find the page you are looking for",
            image: notFound
        },
        [EStatusCode.ServerError]: {
            status: "",
            title: "Site on maintenance",
            description: "Try again later. We will be back soon",
            image: serverError
        },
        [EStatusCode.ClientSide]: {
            status: "",
            title: "Site on maintenance",
            description: "Try again later. We will be back soon",
            image: serverError
        }
    };

    const currentData = data[errorType];

    return (
        <div className={classes}>
            <div className={styles["error-plug__info"]}>
                <div className={styles["error-plug__status"]}>
                    {currentData.status}
                </div>
                <strong className={styles["error-plug__title"]}>
                    {currentData.title}
                </strong>
                <span className={styles["error-plug__description"]}>
                    {currentData.description}
                </span>
                <div className={styles["error-plug__buttons"]}>
                    <Button
                        disabled={errorType === EStatusCode.ClientSide}
                        invert
                        href={"/"}>
                        Go back
                    </Button>
                </div>
            </div>
            <div className={styles["error-plug__image"]}>
                <img src={currentData.image?.src} alt={currentData.title} />
            </div>
        </div>
    );
};

export default ErrorPlug;
