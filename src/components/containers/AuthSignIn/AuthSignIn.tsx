// React
import React, { useState } from "react";

// Components
import { ActiveLink, Button, Tabs } from "src/components/ui";
import { SignInForm, SignWalletForm } from "src/components/forms";

// Styles
import classNames from "classnames";
import AptLogoBig from "public/static/images/svg/apt_logo_big.svg";

// Other
import { AptosWalletAdapterProvider } from "@aptos-labs/wallet-adapter-react";
import { PetraWallet } from "petra-plugin-wallet-adapter";
import { PontemWallet } from "@pontem/wallet-adapter-plugin";
import { MartianWallet } from "@martianwallet/aptos-wallet-adapter";
import styles from "./AuthSignIn.module.scss";

const mainWallets = [new PetraWallet(), new PontemWallet(), new MartianWallet()];

const AuthSignIn: React.FC<IComponent> = () => {
    const [wallet, setWallet] = useState(false);
    const [errorWallet, setErrorWallet] = useState(null);
    const classes = classNames(["form__wrapper"]);
    const handleWalletSignUp = () => {
        setWallet(true);
    };
    if (wallet)
        return (
            <div className={classes}>
                <div className={"form__wrapper--background"}>
                    <img src={AptLogoBig.src} alt={"logo"} />
                </div>
                <div className={"form__wrapper--foreground wide"}>
                    <AptosWalletAdapterProvider
                        plugins={mainWallets}
                        onError={(error) => {
                            setErrorWallet(error);
                        }}>
                        <SignWalletForm setClose={setWallet} errorWallet={errorWallet} setErrorWallet={setErrorWallet} login />
                    </AptosWalletAdapterProvider>
                </div>
            </div>
        );

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
                    <Button before={"wallet"} className={"button"} onClick={handleWalletSignUp}>
                        Sign in with Wallet
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
