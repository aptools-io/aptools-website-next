// React
import React from "react";
import { AccountQuestions, Accounts, StatsAccounts } from "src/components/containers";
import { Grid, GridWrapper, Topper } from "src/components/general";
import { AccountsList, TransactionsList } from "src/components/lists";
import { Button, CategoryTitle, Plate } from "src/components/ui";

import { AccountDiscord, AccountEmail, AccountSlack, AccountTelegram, AccountWhatsapp, Edit, Letter, Unlock, WalletBig } from "src/components/svg";
import { authMiddleware } from "src/scripts/api/middleware";
import { useRouter } from "next/router";
import { logout } from "src/scripts/common/user";
import styles from "./AccountProfilePage.module.scss";
import { accountSocials, accountStats } from "./data/data";

const AccountProfilePage: React.FC = () => {
    const router = useRouter();

    const renderAccountStat = (item, index) => {
        const { icon, title, onEdit } = item || {};
        return (
            <div key={index} className={styles["account__auth-stats--item"]}>
                <div className={styles["icon"]}>{icon}</div>
                <span className={styles["title"]}>{title}</span>
                {onEdit && (
                    <button className={styles["edit"]} onClick={onEdit}>
                        <Edit />
                    </button>
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

    const handleTest = async () => {
        logout(router, authMiddleware);
    };

    return (
        <>
            <Topper backlink={"/"} noLink={["account"]} />
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
                    <Button onClick={handleTest}>Logout</Button>
                </GridWrapper>
            </Grid>
            <AccountQuestions />
        </>
    );
};

export default AccountProfilePage;
