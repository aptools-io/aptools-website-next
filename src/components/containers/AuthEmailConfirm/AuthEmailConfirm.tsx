// React
import React, { useEffect, useRef, useState } from "react";

// Next
import { useRouter } from "next/router";

// Redux
import { IRootState } from "src/scripts/redux/store";
import { useSelector } from "react-redux";

// Components
import { ActiveLink, Button, Checkbox, TextInput } from "src/components/ui";

// Styles
import classNames from "classnames";

// Public
import EmailConfirm from "public/static/images/svg/email_confirm.svg";
import { auth } from "src/scripts/api/requests";
import styles from "./AuthEmailConfirm.module.scss";

const AuthEmailConfirm: React.FC = () => {
    const { email, agreement, subscribe } = useSelector((state: IRootState) => state.authConfirm);
    const classes = classNames([styles["auth-email-confirm"]]);
    const resendInterval = useRef(null);
    const [intervalTime, setIntervalTime] = useState(30);
    const [loading, setLoading] = useState(false);

    const setResendInterval = () => {
        resendInterval.current = setInterval(() => {
            setIntervalTime((e) => e - 1);
        }, 1000);
    };

    useEffect(() => {
        setResendInterval();
        return () => {
            clearInterval(resendInterval.current);
            resendInterval.current = null;
        };
    }, []);

    useEffect(() => {
        if (intervalTime > 0) return;

        clearInterval(resendInterval.current);
        resendInterval.current = null;
        console.log("interval", resendInterval);
        setIntervalTime(0);
    }, [intervalTime]);

    const handleResendEmail = () => {
        setLoading(true);
        auth.registerEmail(email, agreement, subscribe).then((e: unknown) => {
            const response = e as {
                status: string;
            };

            if (response?.status === "ok") {
                setIntervalTime(30);
                setResendInterval();
                setLoading(false);
                return;
            }
            setLoading(false);
            console.log("Something went wrong");
        });
    };

    return (
        <>
            <div className={classes}>
                <div className={styles["auth-email-confirm__wrapper"]}>
                    <strong className={styles["title"]}>Confirm your Email</strong>
                    <img src={EmailConfirm.src} alt={"Email confirm"} />
                    <span className={styles["description"]}>
                        Please check your inbox for a confirmation email.
                        <br />
                        Click the link in the email to confirm your email address.
                    </span>
                    <div className={styles["auth-email-confirm__buttons"]}>
                        <Button className={styles["button"]} invert onClick={handleResendEmail} disabled={(intervalTime !== null && intervalTime > 0) || loading}>
                            {intervalTime > 0 ? `Wait cooldown ${intervalTime}` : "Re-send confirmation email"}
                        </Button>
                        <Button className={styles["button"]} href={"/"}>
                            Back to main page
                        </Button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AuthEmailConfirm;
