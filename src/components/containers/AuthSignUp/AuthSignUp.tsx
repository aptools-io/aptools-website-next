// React
import React from "react";

// Components
import { ActiveLink, Button, Tabs } from "src/components/ui";
import { SignUpForm } from "src/components/forms";

// Styles
import classNames from "classnames";
import AptLogoBig from "public/static/images/svg/apt_logo_big.svg";
import styles from "./AuthSignUp.module.scss";

// Other

const AuthSignUp: React.FC<IComponent> = () => {
    const classes = classNames([styles["auth-sign-up"]]);

    return (
        <div className={classes}>
            <div className={styles["auth-sign-up__background"]}>
                <img src={AptLogoBig.src} alt={"logo"} />
            </div>
            <div className={styles["auth-sign-up__foreground"]}>
                <SignUpForm />
                <div className={styles["auth-sign-up__foreground-item"]}>
                    Already have an account?{" "}
                    <span className={styles["link"]}>
                        <ActiveLink href={"/auth/signin"}>
                            <a>Sign in</a>
                        </ActiveLink>
                    </span>
                </div>

                <div className={styles["auth-sign-up__foreground-divide"]}>
                    <span>OR</span>
                </div>
                <div className={styles["auth-sign-up__foreground-item-button"]}>
                    <Button before={"wallet"} className={styles["button"]} href={"/not-found"}>
                        Sign up with Wallet
                    </Button>
                </div>
                <div className={styles["auth-sign-up__foreground-item"]}>
                    <ul>
                        <li>
                            <ActiveLink href={"/"}>
                                <a>Terms of Service</a>
                            </ActiveLink>
                        </li>
                        <li>
                            <ActiveLink href={"/"}>
                                <a>Privacy Policy</a>
                            </ActiveLink>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default AuthSignUp;
