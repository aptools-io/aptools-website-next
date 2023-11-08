// React
import React, { useEffect, useState } from "react";

// Next

// Redux

// Styles
import classNames from "classnames";

// Components
import { Close } from "src/components/svg";
import { Button } from "src/components/ui";
import { logout } from "src/scripts/common/user";
import { useRouter } from "next/router";
import { authMiddleware } from "src/scripts/api/middleware";
import styles from "./UserInfoWrapper.module.scss";

const UserInfoWrapper: React.FC<{
    close: () => void;
}> = ({ close = null }) => {
    const router = useRouter();
    const classes = classNames([styles["user-info-wrapper"], "form__inner", "form", "popup"]);

    const handleLogout = async () => {
        logout(router, authMiddleware);
    };

    return (
        <>
            <button className={"close"} type={"button"} onClick={() => close()}>
                <Close />
            </button>
            <div className={classes}>
                <strong className={"title"}>Account Details</strong>
                <div className={classNames(["form__inner--item", "form__input"])}>
                    <div className={styles["user-info-wrapper__points"]}>
                        <div className={styles["user-info-wrapper__points-item"]}>
                            <span>Your account type</span>
                            <span>You are a Aptools User!</span>
                        </div>
                        <div className={styles["user-info-wrapper__points-item"]}>
                            <span>You joined on</span>
                            <span>Aug 09, 2023, 12:14</span>
                        </div>
                        <div className={styles["user-info-wrapper__points-item"]}>
                            <span>To upgrade your plan</span>
                            <span>Click here</span>
                        </div>
                    </div>
                    <div className={styles["user-info-wrapper__points"]}>
                        <div className={styles["user-info-wrapper__points-item"]}>
                            <span>Your current email</span>
                            <span>email@gmail.com</span>
                        </div>
                        <div className={styles["user-info-wrapper__points-item"]}>
                            <span>Wallet</span>
                            <span>Connect wallet</span>
                        </div>
                        <div className={styles["user-info-wrapper__points-item"]}>
                            <span>To upgrade your plan</span>
                            <span>Click here</span>
                        </div>
                    </div>
                </div>

                <div className={classNames(["form__inner--item", "form__input"])}>
                    <div className={styles["user-info-wrapper__points-last"]}>
                        <p>If you have any questions, please reach out to us at #help or #feedback in our Discord or at support@aptools.ai.</p>
                    </div>
                </div>

                <div className={classNames(["form__inner--item-button", "form__input"])}>
                    <Button onClick={handleLogout} className={styles["logout-button"]} after={"logout"}>
                        Sign out
                    </Button>
                </div>
            </div>
        </>
    );
};

export default UserInfoWrapper;
