// React
import React, { useEffect, useState } from "react";

// Next

// Redux

// Styles
import classNames from "classnames";

// Components
import { Close, Edit } from "src/components/svg";
import { Button } from "src/components/ui";
import { logout } from "src/scripts/common/user";
import { useRouter } from "next/router";
import { authMiddleware } from "src/scripts/api/middleware";
import { useSelector } from "react-redux";
import { IRootState } from "src/scripts/redux/store";
import moment from "moment";
import { AptosWalletAdapterProvider, NetworkName } from "@aptos-labs/wallet-adapter-react";
import { PetraWallet } from "petra-plugin-wallet-adapter";
import { PontemWallet } from "@pontem/wallet-adapter-plugin";
import { MartianWallet } from "@martianwallet/aptos-wallet-adapter";
import { BloctoWallet } from "@blocto/aptos-wallet-adapter-plugin";
import { FewchaWallet } from "fewcha-plugin-wallet-adapter";
import { NightlyWallet } from "@nightlylabs/aptos-wallet-adapter-plugin";
import { SignWalletForm } from "src/components/forms";
import { shortenHashString } from "src/scripts/util/strings";
import styles from "./UserInfoWrapper.module.scss";

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

const UserInfoWrapper: React.FC<{
    walletChange?: boolean;
    close: () => void;
}> = ({ close = null, walletChange = false }) => {
    const router = useRouter();
    const [wallet, setWallet] = useState(walletChange);
    const [errorWallet, setErrorWallet] = useState(null);
    const classes = classNames([styles["user-info-wrapper"], "form__inner", "form", "popup"]);
    const { user } = useSelector((state: IRootState) => state.user);
    const { data } = user || {};
    const { createdAt, email, wallet: userWallet } = data || {};
    const handleLogout = async () => {
        logout(router, authMiddleware);
    };

    useEffect(() => {
        setWallet(walletChange);
    }, [walletChange]);
    const handleConnectWallet = () => {
        setWallet(true);
    };

    if (wallet) {
        return (
            <AptosWalletAdapterProvider
                plugins={mainWallets}
                onError={(error) => {
                    setErrorWallet(error);
                }}>
                <SignWalletForm setClose={setWallet} errorWallet={errorWallet} setErrorWallet={setErrorWallet} connectWallet />
            </AptosWalletAdapterProvider>
        );
    }

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
                            <span>{moment(createdAt).format("YYYY-MM-DD")}</span>
                        </div>
                        {/* <div className={styles["user-info-wrapper__points-item"]}>
                            <span>To upgrade your plan</span>
                            <span>Click here</span>
                        </div> */}
                    </div>
                    <div className={styles["user-info-wrapper__points"]}>
                        <div className={styles["user-info-wrapper__points-item"]}>
                            <span>Your current email</span>
                            <span>{email || "-"}</span>
                        </div>
                        <div className={styles["user-info-wrapper__points-item"]}>
                            <span>Wallet</span>
                            {userWallet ? (
                                <span>
                                    {shortenHashString(userWallet, [10, 10])}
                                    <button onClick={handleConnectWallet}>
                                        <Edit />
                                    </button>
                                </span>
                            ) : (
                                <button onClick={handleConnectWallet}>Connect wallet</button>
                            )}
                        </div>
                        {/* <div className={styles["user-info-wrapper__points-item"]}>
                            <span>To upgrade your plan</span>
                            <span>Click here</span>
                        </div> */}
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
