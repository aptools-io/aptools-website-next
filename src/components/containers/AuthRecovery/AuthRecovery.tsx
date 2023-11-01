// React
import React from "react";

// Components
import { ActiveLink, Button, Tabs } from "src/components/ui";
import { RecoveryForm } from "src/components/forms";

// Styles
import classNames from "classnames";
import AptLogoBig from "public/static/images/svg/apt_logo_big.svg";
import styles from "./AuthSignIn.module.scss";

// Other

const AuthRecovery: React.FC<IComponent> = () => {
    const classes = classNames(["form__wrapper"]);

    return (
        <div className={classes}>
            <div className={"form__wrapper--background"}>
                <img src={AptLogoBig.src} alt={"logo"} />
            </div>
            <div className={"form__wrapper--foreground"}>
                <RecoveryForm />
                <div className={"form__wrapper--foreground-item big-gap"}>
                    <span>
                        Already have an account?{" "}
                        <span className={"link"}>
                            <ActiveLink href={"/auth/signin"}>
                                <a>Sign in</a>
                            </ActiveLink>
                        </span>
                    </span>
                </div>
                <div className={"form__wrapper--foreground-item"}>
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

export default AuthRecovery;
