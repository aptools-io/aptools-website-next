// React
import React, { useState } from "react";

// Next
import { useRouter } from "next/router";

// Components
import { ActiveLink, Button, Checkbox, TextInput } from "src/components/ui";

// Styles
import classNames from "classnames";

// Public
import AptLogoBig from "public/static/images/svg/apt_logo_big.svg";
import styles from "./AuthSignUp.module.scss";

const AuthSignUp: React.FC = () => {
    const router = useRouter();
    const [email, setEmail] = useState("");
    const [agree, setAgree] = useState(false);
    const [subscribe, setSubscribe] = useState(true);

    const classes = classNames([styles["sign-up"]]);

    return (
        <>
            <div className={classes}>
                <div className={styles["sign-up__background"]}>
                    <img src={AptLogoBig.src} alt={"logo"} />
                </div>
                <div className={styles["sign-up__foreground"]}>
                    <strong className={styles["title"]}>Sign up</strong>
                    <div className={styles["sign-up__foreground-item"]}>
                        <TextInput id={"id-email"} placeholder={"email"} label={"Account email"} value={email} onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div className={styles["sign-up__foreground-item"]}>
                        <Checkbox id={"id-agree"} checked={agree} onChange={(e) => setAgree(e.target.checked)} label={"I agree to the Terms & Conditions and Privacy Policy"} />
                    </div>
                    <div className={styles["sign-up__foreground-item"]}>
                        <Checkbox id={"id-subscribe"} checked={subscribe} onChange={(e) => setSubscribe(e.target.checked)} label={"Subscribe to receive company news and product updates from Aptools. You may unsubscribe at any time"} />
                    </div>
                    <div className={styles["sign-up__foreground-item-button"]}>
                        <Button href={"/"} invert className={styles["button"]}>
                            Sign up
                        </Button>
                    </div>
                    <div className={styles["sign-up__foreground-item"]}>
                        Already have an account?{" "}
                        <span className={styles["link"]}>
                            <ActiveLink href={"/"}>
                                <a>Sign in</a>
                            </ActiveLink>
                        </span>
                    </div>

                    <div className={styles["sign-up__foreground-divide"]}>
                        <span>OR</span>
                    </div>
                    <div className={styles["sign-up__foreground-item-button"]}>
                        <Button before={"wallet"} className={styles["button"]} href={"/not-found"}>
                            Sign up with Wallet
                        </Button>
                    </div>
                    <div className={styles["sign-up__foreground-item"]}>
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
        </>
    );
};

export default AuthSignUp;
