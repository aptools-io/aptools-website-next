// React
import React, { useEffect, useState } from "react";
import { Grid, GridWrapper, Topper } from "src/components/general";
import { Button, CategoryTitle, Plate, TextInput } from "src/components/ui";

import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { IRootState } from "src/scripts/redux/store";
import { AccountApiList } from "src/components/lists";
import { UserApiKeyWrapper, UserInfoWrapper } from "src/components/containers";
import classNames from "classnames";
import styles from "./AccountApiPage.module.scss";

const AccountApiPage: React.FC = () => {
    const { user } = useSelector((state: IRootState) => state.user);
    const [addKeyPopup, setAddKeyPopup] = useState(false);

    const dispatch = useDispatch();
    const handleOpenPopup = () => setAddKeyPopup((e) => !e);

    return (
        <>
            <Topper backlink={"/account/profile"} />
            <div className={styles["account-api-page__button"]}>
                <Button onClick={handleOpenPopup}>Create a New API key {">"}</Button>
            </div>
            <AccountApiList />
            <div className={classNames([styles["account-api-page__info"], { [styles["active"]]: addKeyPopup }])}>
                <div className={"form__wrapper"}>
                    <div className={"form__wrapper--background"}>{/* <img src={AptLogoBig.src} alt={"logo"} /> */}</div>
                    <div className={"form__wrapper--foreground wide"}>
                        <UserApiKeyWrapper close={handleOpenPopup} />
                    </div>
                </div>
            </div>
        </>
    );
};

export default AccountApiPage;
