// React
import React, { useState } from "react";

// Next
import { useRouter } from "next/router";

// Components
import { ActiveLink, Button, Checkbox, TextInput } from "src/components/ui";

// Styles
import classNames from "classnames";

// Public
import EmailConfirm from "public/static/images/svg/email_confirm.svg";
import styles from "./AuthEmailConfirm.module.scss";

const AuthEmailConfirm: React.FC = () => {
    const router = useRouter();
    const classes = classNames([styles["email-confirm"]]);

    return (
        <>
            <div className={classes}>
                <div className={styles["email-confirm__wrapper"]}>
                    <strong className={styles["title"]}>Confirm your Email</strong>
                    <img src={EmailConfirm.src} alt={"Email confirm"} />
                    <span className={styles["description"]}>
                        Please check your inbox for a confirmation email.
                        <br />
                        Click the link in the email to confirm your email address.
                    </span>
                    <div className={styles["email-confirm__buttons"]}>
                        <Button className={styles["button"]} invert>
                            Re-send confirmation email
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
