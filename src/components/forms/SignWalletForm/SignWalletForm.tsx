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
}> = ({ errorWallet = null, setErrorWallet = null, setClose = null, login = false }) => {
    const [loading, setLoading] = useState(false);
    const [selectedWallet, setSelectedWallet] = useState(null);
    const router = useRouter();
    const [error, setError] = useState("");
    const dispatch = useDispatch();
    const formik = useFormik(values(setLoading, dispatch, setError));

    const classes = classNames(["form__inner", "form", "popup"]);

    const { connect, wallets, signMessage, disconnect, account } = useWallet();

    const register = (nonce, message, signature, pubKey) => {
        authMiddleware.walletMiddleware(nonce, message, signature, pubKey, login).then((e: unknown) => {
            const response = e as IUserResponse;

            if (response?.status === "ok") {
                loginUser(response, (saveUserInStorage) => {
                    saveUserInStorage(!login);
                    router.push("/account/profile");
                });
            } else {
                if (response.reason === "conflict") setError("Wallet is already taken or token is expired");
                if (response.reason === "not-found") setError("Wallet confirmation request by the given token not found");
                if (response.reason === "bad-request") setError("Something went wrong");
            }
            console.log("Something went wrong");
            setSelectedWallet(null);
            if (disconnect) disconnect();

            setLoading(false);
        });
    };

    function dec2hex(dec) {
        return dec.toString(16).padStart(2, "0");
    }

    // generateId :: Integer -> String
    function generateId(len) {
        const arr = new Uint8Array((len || 40) / 2);
        window.crypto.getRandomValues(arr);
        return Array.from(arr, dec2hex).join("");
    }

    const checkSignature = (signature: string) => {
        if (typeof signature !== "string") {
            console.log(signature);
            const buffSign = signature as ArrayBuffer;
            const str = Buffer.from(buffSign).toString("base64");
            const newSign = `0x${str}`;
            return newSign;
        }
        if (signature.indexOf("0x") === -1) return `0x${signature}`;
        return signature;
    };

    const onSignMessage = async () => {
        const responseData = await auth.walletApproval();
        const { data } = responseData || ({} as any);
        const { nonce } = data || ({} as any);

        const payload = {
            message: login ? "Do you want to login?" : "Do you want to register?",
            nonce
        };

        const response = (await signMessage(payload)) as any;

        let fullMessage = null;
        let signature = null;

        if (response?.result) {
            fullMessage = response?.result?.fullMessage || null;
            signature = response?.result?.signature || null;
            register(nonce, fullMessage, checkSignature(signature), account.publicKey);
            return;
        }
        fullMessage = response?.fullMessage || null;
        signature = response?.signature || null;

        register(nonce, fullMessage, checkSignature(signature), account.publicKey);
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
        await connect(walletName);
        setSelectedWallet(walletName);
    };

    useEffect(() => {
        if (selectedWallet && account) {
            onSignMessage();
        }
    }, [selectedWallet, account]);

    const renderWallet = (item, index) => {
        return (
            <div key={index} className={classNames(["form__inner--item", "form__input", "wallet", { disabled: selectedWallet !== item.name && selectedWallet !== null }])} onClick={() => onConnect(item.name)}>
                <span className='pointer'>
                    <img src={item?.icon} alt={"petra"} />
                    {item?.name} wallet
                </span>
                <ActiveLink href={item?.url}>
                    <a>Install</a>
                </ActiveLink>
            </div>
        );
    };

    return (
        <FormikProvider value={formik}>
            <button className={"close"} type={"button"} onClick={() => setClose(false)}>
                <Close />
            </button>
            <Form className={classes}>
                <strong className={"title"}>Sign up by connecting a wallet</strong>
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
