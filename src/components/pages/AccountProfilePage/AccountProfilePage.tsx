// React
import React, { useEffect, useState } from "react";
import { AccountNotifications, AccountQuestions, Accounts, StatsAccounts, UserInfoWrapper } from "src/components/containers";
import { Grid, GridWrapper, Topper } from "src/components/general";
import { AccountsList, TransactionsList } from "src/components/lists";
import { Button, CategoryTitle, Plate, TextInput } from "src/components/ui";

import { AccountDiscord, AccountEmail, AccountSlack, AccountTelegram, AccountWhatsapp, Edit, Letter, Unlock, WalletBig } from "src/components/svg";
import { authMiddleware } from "src/scripts/api/middleware";
import { useRouter } from "next/router";
import { logout } from "src/scripts/common/user";
import { useDispatch, useSelector } from "react-redux";
import { IRootState } from "src/scripts/redux/store";
import AptLogoBig from "public/static/images/svg/apt_logo_big.svg";
import { notify } from "src/scripts/common/notification";
import classNames from "classnames";
import { shortenHashString } from "src/scripts/util/strings";
import { auth } from "src/scripts/api/requests";
import { accountSocials } from "./data/data";
import styles from "./AccountProfilePage.module.scss";

const AccountProfilePage: React.FC = () => {
    const router = useRouter();

    const { user } = useSelector((state: IRootState) => state.user);
    const [editEmail, setEditEmail] = useState(false);
    const [editPass, setEditPass] = useState(false);

    const [emailValue, setEmailValue] = useState("");
    const [passValue, setPassValue] = useState("");
    const [secondPassValue, setSecondPassValue] = useState("");

    const [infoPopup, setInfoPopup] = useState(false);
    const [walletChange, setWalletChange] = useState(false);

    console.log(user);

    const dispatch = useDispatch();

    const emailRegEx = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    const passRegEx = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,20}$/;

    useEffect(() => {
        if (!user?.data) return;
        setEmailValue(user?.data?.email);
    }, [user]);

    useEffect(() => {
        if (!router.isReady) return;
        const { email } = router.query || {};
        if (email === "success") notify(dispatch, "You successfully change your email", "test");
    }, [router]);

    const accountStats = [
        {
            icon: <Letter />,
            title: user?.data?.email || "-",
            onEdit: () => {
                setEditEmail(true);
            },
            state: emailValue,
            dispatcher: setEmailValue,
            type: editEmail,
            error: emailRegEx.test(emailValue) ? "" : "Invalid email",
            submit: async () => {
                const result = await authMiddleware.emailChangeMiddleware(emailValue);
                setEditEmail(false);
                notify(dispatch, "Check your new email", "test");
            }
        },
        {
            icon: <WalletBig />,
            title: user?.data?.wallet ? shortenHashString(user?.data?.wallet, [10, 10]) : "Connect wallet",
            onEdit: () => {
                setInfoPopup(true);
                setWalletChange(true);
            }
        },
        {
            icon: <Unlock />,
            title: "**************",
            onEdit: () => {
                setEditPass(true);
            },
            state: passValue,
            dispatcher: setPassValue,
            state2: secondPassValue,
            dispatcher2: setSecondPassValue,
            double: true,
            pass: true,
            type: editPass,
            error: passRegEx.test(passValue) && passValue === secondPassValue ? "" : "Invalid password",
            submit: async () => {
                auth.forgotPassword(emailValue).then((e: unknown) => {
                    const response = e as {
                        status: string;
                    };
                    if (response?.status === "ok") {
                        notify(dispatch, "Check your email", "test");
                        logout(router, authMiddleware);
                        return;
                    }
                    notify(dispatch, "Something went wrong", "test");
                });
            }
        }
    ];

    const renderAccountStat = (item, index) => {
        const { icon, title, onEdit, type, dispatcher, state, dispatcher2, state2, submit, double, pass, error } = item || {};

        return (
            <div key={index} className={styles["account__auth-stats--item"]}>
                <div className={styles["icon"]}>{icon}</div>
                {!type ? (
                    <>
                        <span className={styles["title"]}>{title}</span>
                        {onEdit && (
                            <button className={styles["edit"]} onClick={onEdit}>
                                <Edit />
                            </button>
                        )}
                    </>
                ) : (
                    <>
                        <div className={styles["account__auth-stats--item-double"]}>
                            <TextInput value={state} error={error} onChange={(e) => dispatcher(e.target.value)} password={pass} placeholder='password' />
                            {double && <TextInput value={state2} error={error} onChange={(e) => dispatcher2(e.target.value)} password={pass} placeholder='confirm password' label='Password again' />}
                        </div>
                        <Button disabled={error} onClick={() => submit()}>
                            Submit
                        </Button>
                    </>
                )}
            </div>
        );
    };

    const renderAccountSocial = (item, index) => {
        const { icon, title, login, onEdit } = item || {};
        return (
            <div key={index} className={styles["account__socials--item"]}>
                <div className={styles["social-title"]}>
                    <div className={styles["icon"]}>{icon}</div>
                    <span className={styles["title"]}>{title}</span>
                </div>
                <div className={styles["social"]}>
                    <span>{login}</span>
                    {onEdit && (
                        <button className={styles["edit"]} onClick={onEdit}>
                            <Edit />
                        </button>
                    )}
                </div>
            </div>
        );
    };

    const handleLogout = async () => {
        logout(router, authMiddleware);
    };

    const handleClose = () => {
        setInfoPopup(false);
        setWalletChange(false);
    };

    return (
        <>
            <Topper
                backlink={"/"}
                noLink={["account"]}
                afterComponent={() => (
                    <>
                        <Button onClick={() => setInfoPopup(true)}>Show account info</Button>
                        <Button onClick={handleLogout}>Logout</Button>
                    </>
                )}
            />
            <Grid columns={4}>
                <GridWrapper gridWidth={2}>
                    <Plate bordered compressed className={styles["account__auth-stats"]}>
                        {accountStats.map(renderAccountStat)}
                    </Plate>
                </GridWrapper>
                <GridWrapper gridWidth={2}>
                    <Plate compressed className={styles["account__socials"]}>
                        {accountSocials.map(renderAccountSocial)}
                    </Plate>
                </GridWrapper>
                <GridWrapper gridWidth={4}>
                    <CategoryTitle title='Notifications' />
                    <AccountNotifications />
                </GridWrapper>
            </Grid>
            <div className={classNames([styles["account__info"], { [styles["active"]]: infoPopup }])}>
                <div className={"form__wrapper"}>
                    <div className={"form__wrapper--background"}>
                        <img src={AptLogoBig.src} alt={"logo"} />
                    </div>
                    <div className={"form__wrapper--foreground wide"}>
                        <UserInfoWrapper walletChange={walletChange} close={handleClose} />
                    </div>
                </div>
            </div>
            <AccountQuestions />
        </>
    );
};

export default AccountProfilePage;
