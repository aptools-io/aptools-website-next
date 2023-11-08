// React
import React, { useState } from "react";

// Components
import { ActiveLink, Button, Tabs } from "src/components/ui";
import { SignUpForm, SignWalletForm } from "src/components/forms";

// Styles
import classNames from "classnames";
import AptLogoBig from "public/static/images/svg/apt_logo_big.svg";
import { AptosWalletAdapterProvider, NetworkName } from "@aptos-labs/wallet-adapter-react";

// Other
import { PetraWallet } from "petra-plugin-wallet-adapter";
import { PontemWallet } from "@pontem/wallet-adapter-plugin";
import { MartianWallet } from "@martianwallet/aptos-wallet-adapter";
import { BloctoWallet } from "@blocto/aptos-wallet-adapter-plugin";
import { FewchaWallet } from "fewcha-plugin-wallet-adapter";
import { NightlyWallet } from "@nightlylabs/aptos-wallet-adapter-plugin";
import styles from "./AuthSignUp.module.scss";

const mainWallets = [
    new PetraWallet(),
    new PontemWallet(),
    new MartianWallet(),
    new FewchaWallet(),
    new NightlyWallet(),
    new BloctoWallet({
        network: NetworkName.Testnet,
        bloctoAppId: "6d85f56e-5f2e-46cd-b5f2-5cf9695b4d46"
    })
];

const AuthSignUp: React.FC<IComponent> = () => {
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
                        <SignWalletForm setClose={setWallet} errorWallet={errorWallet} setErrorWallet={setErrorWallet} />
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
                <SignUpForm />
                <div className={"form__wrapper--foreground-item"}>
                    Already have an account?
                    <span className={"link"}>
                        <ActiveLink href={"/auth/signin"}>
                            <a>Sign in</a>
                        </ActiveLink>
                    </span>
                </div>

                <div className={"form__wrapper--foreground-divide"}>
                    <span>OR</span>
                </div>
                <div className={"form__wrapper--foreground-item-button"}>
                    <Button before={"wallet"} className={"button"} onClick={handleWalletSignUp}>
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

export default AuthSignUp;
