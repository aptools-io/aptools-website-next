// React
import React from "react";

// Components
import { ActiveLink, Button, Tabs } from "src/components/ui";
import { SignInForm } from "src/components/forms";

// Styles
import classNames from "classnames";
import AptLogoBig from "public/static/images/svg/apt_logo_big.svg";
import styles from "./AuthSignIn.module.scss";

// Other

const AuthSignIn: React.FC<IComponent> = () => {
    const classes = classNames(["form__wrapper"]);

    return (
        <div className={classes}>
            <div className={"form__wrapper--background"}>
                <img src={AptLogoBig.src} alt={"logo"} />
            </div>
            <div className={"form__wrapper--foreground"}>
                <SignInForm />
                <div className={"form__wrapper--foreground-item big-gap"}>
                    <span className={"link"}>
                        <ActiveLink href={"/auth/recovery"}>
                            <a>Forgot password?</a>
                        </ActiveLink>
                    </span>
                    <span>
                        No account?{" "}
                        <span className={"link"}>
                            <ActiveLink href={"/auth/signup"}>
                                <a>Sign up now for free</a>
                            </ActiveLink>
                        </span>
                    </span>
                </div>

                <div className={"form__wrapper--foreground-divide"}>
                    <span>OR</span>
                </div>
                <div className={"form__wrapper--foreground-item-button"}>
                    <Button before={"wallet"} className={"button"} href={"/not-found"}>
                        Sign up with Wallet
                    </Button>
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

export default AuthSignIn;
