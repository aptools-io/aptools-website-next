// React
import React, { useEffect, useState } from "react";

// Next
import { useRouter } from "next/router";

// Redux
import { useDispatch, useSelector } from "react-redux";

// Styles
import classNames from "classnames";

// Components
import { ActiveLink, Button, Checkbox, TextInput } from "src/components/ui";
import { FormikProvider, Form, useFormik, Field } from "formik";

import { Close } from "src/components/svg";
import { AptosWalletAdapterProvider, useWallet } from "@aptos-labs/wallet-adapter-react";
import { auth } from "src/scripts/api/requests";
import { authMiddleware } from "src/scripts/api/middleware";
import { IUserResponse, loginUser } from "src/scripts/common/user";
import values from "./data/values";
import styles from "./SignWalletForm.module.scss";

const SignWalletForm: React.FC<{
    errorWallet?: string;
    setErrorWallet?: React.Dispatch<React.SetStateAction<string>>;
    setClose: React.Dispatch<React.SetStateAction<boolean>>;
    login?: boolean;
    connectWallet?: boolean;
}> = ({ errorWallet = null, setErrorWallet = null, setClose = null, login = false, connectWallet = false }) => {
    const [loading, setLoading] = useState(false);
    const [selectedWallet, setSelectedWallet] = useState(null);
    const router = useRouter();
    const [error, setError] = useState("");
    const dispatch = useDispatch();
    const formik = useFormik(values(setLoading, dispatch, setError));

    const classes = classNames(["form__inner", "form", "popup"]);

    const { connect, wallets, signMessage, disconnect, account } = useWallet();

    const register = (nonce, message, signature, pubKey) => {
        authMiddleware.walletMiddleware(nonce, message, signature, pubKey, login, connectWallet).then((e: unknown) => {
            const response = e as IUserResponse;

            if (response?.status === "ok") {
                loginUser(response, (saveUserInStorage) => {
                    saveUserInStorage(!login);
                    if (connectWallet) window.localStorage.removeItem("firstTime");
                    router.push("/account/api");
                });
            } else {
                if (response.reason === "conflict") setError(login ? "Wallet approval request by the given nonce is expired" : "Wallet is already taken or token is expired");
                if (response.reason === "not-found") setError(login ? "Wallet approval by the given nonce not found" : "Wallet confirmation request by the given token not found");
                if (response.reason === "unauthorized") setError(login ? "Wallet not registered or invalid request" : "Wallet confirmation request by the given token not found");
                if (response.reason === "bad-request") setError("Something went wrong");
            }
            console.log("Something went wrong");
            setSelectedWallet(null);
            if (disconnect) disconnect();

            setLoading(false);
        });
    };

    const checkSignature = (signature: string) => {
        // Blocto
        if (Array.isArray(signature)) {
            return `0x${signature[0]}`;
        }

        // Pontem
        if (typeof signature !== "string") {
            const buffSign = signature as ArrayBuffer;
            if (!buffSign) return null;
            const str = Buffer.from(buffSign).toString("hex");
            const newSign = `0x${str}`;
            return newSign;
        }

        // Pontem Nightly
        if (typeof signature === "string" && signature?.split(",")?.length > 4) {
            const buffSign = new Uint16Array(signature.split(",").map((x) => Number(x)));
            if (!buffSign) return null;
            const str = Buffer.from(buffSign).toString("hex");
            const newSign = `0x${str}`;
            return newSign;
        }

        // Petra Nightly
        if (signature.indexOf("0x") === -1) return `0x${signature}`;
        return signature;
    };

    const onSignMessage = async () => {
        const approval = connectWallet ? authMiddleware.walletAddApproval : auth.walletApproval;
        const responseData = await approval();
        const { data } = responseData || ({} as any);
        const { nonce } = data || ({} as any);

        let message = "";
        if (login) message = "Do you want to login?";
        else if (connectWallet) message = "Do you want to connect wallet?";
        else message = "Do you want to register?";

        const payload = {
            message,
            nonce
        };

        const response = (await signMessage(payload)) as any;

        let fullMessage = null;
        let signature = null;
        // Blocto condition
        const pubKey = Array.isArray(account.publicKey) ? `0x${account.publicKey[0]}` : account.publicKey;
        if (response?.result) {
            fullMessage = response?.result?.fullMessage || null;
            signature = response?.result?.signature || null;
            register(nonce, fullMessage, checkSignature(signature), pubKey);
            return;
        }
        fullMessage = response?.fullMessage || null;
        signature = response?.signature || null;

        register(nonce, fullMessage, checkSignature(signature), pubKey);
    };

    useEffect(() => {
        if (!errorWallet) return;
        setSelectedWallet(null);
        if (disconnect) disconnect();

        setError(errorWallet);
    }, [errorWallet]);

    const onConnect = async (walletName) => {
        setErrorWallet(null);
        setError(null);
        const result = await connect(walletName);
        setSelectedWallet(walletName);
    };

    useEffect(() => {
        if (selectedWallet && account) {
            onSignMessage();
        }
    }, [selectedWallet, account]);

    const renderWallet = (item, index) => {
        const { icon, name, url, readyState } = item;
        const installed = readyState !== "NotDetected";
        return (
            <div
                key={index}
                className={classNames(["form__inner--item", "form__input", "wallet", { disabled: selectedWallet !== item.name && selectedWallet !== null }])}
                onClick={() => {
                    if (!installed) {
                        if (window) window.open(url, "_blank").focus();
                        return;
                    }
                    onConnect(item.name);
                }}>
                <span className='pointer'>
                    <img src={icon} alt={name} />
                    {name} wallet
                </span>
                {!installed ? (
                    <ActiveLink href={url}>
                        <a>Install</a>
                    </ActiveLink>
                ) : (
                    <span className='installed'>Installed</span>
                )}
            </div>
        );
    };

    return (
        <FormikProvider value={formik}>
            <button className={"close"} type={"button"} onClick={() => setClose(false)}>
                <Close />
            </button>
            <Form className={classes}>
                {!connectWallet ? <strong className={"title"}>Sign {login ? "in" : "up"} by connecting a wallet</strong> : <strong className={"title"}>Connect your wallet</strong>}
                <div className={classNames(["form__inner--item", "form__input", { error: formik.errors.agreement }])}>
                    <Field name={"agreement"} type='checkbox'>
                        {({ field, form, meta }) => <Checkbox id={"id-agreement"} label={"I agree to the Terms & Conditions and Privacy Policy"} error={meta.touched && meta.error} field={field} />}
                    </Field>
                </div>

                <div className={classNames(["form__inner--wrapper", { "form__inner--active": formik.values.agreement }])}>{wallets?.map(renderWallet)}</div>
                <div className={classNames(["form__inner--item-button", "form__input"])}>{error && <span className={"form__inner--error"}>{error}</span>}</div>
            </Form>
        </FormikProvider>
    );
};

export default SignWalletForm;
