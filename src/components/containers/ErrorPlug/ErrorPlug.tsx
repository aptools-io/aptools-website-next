// React
import React from "react";

// Styles
import classNames from "classnames";

// Components
import { Button } from "src/components/ui";
import { NotFoundDude, ServerErrorDude } from "src/components/svg";

// Enums
import { EStatusCode } from "src/types/common/statusCode";
import styles from "./ErrorPlug.module.scss";

const ErrorPlug: React.FC<IErrorPlugProps> = ({
    errorType = EStatusCode.NotFound,
    className 
}) => {
    const classes = classNames([
        styles["error-plug"],
        className
    ]);

    const data = {
        [EStatusCode.NotFound]: {
            status: 404,
            title: "Page not found",
            description: "We can’t seem to find the page you are looking for",
            image: <NotFoundDude />
        },
        [EStatusCode.ServerError]: {
            status: 500,
            title: "Internal Server Error",
            description: "The server encountered an internal error or misconfiguration and was unable to complete your request",
            image: <ServerErrorDude />
        },
        [EStatusCode.ClientSide]: {
            status: ":(",
            title: "Application error",
            description: "A client-side exception has occurred (see the browser console for more information)",
            image: <ServerErrorDude />
        }
    };

    const currentData = data[errorType];

    return (
        <div className={classes}>
            <div className={styles["error-plug__info"]}>
                <div className={styles["error-plug__status"]}>{currentData.status}</div>
                <strong className={styles["error-plug__title"]}>{currentData.title}</strong>
                <span className={styles["error-plug__description"]}>{currentData.description}</span>
                <div className={styles["error-plug__buttons"]}>
                    <Button disabled={errorType === EStatusCode.ClientSide} invert href={"/"}>Go back</Button>
                </div>
            </div>
            <div className={styles["error-plug__image"]}>
                {currentData.image}
            </div>
        </div>
    );
};

export default ErrorPlug;
