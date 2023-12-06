// React
import React, { useEffect, useState } from "react";

// Next

// Redux

// Styles
import classNames from "classnames";

// Components
import { Close, Edit } from "src/components/svg";
import { Button, Checkbox, TextInput } from "src/components/ui";
import { authMiddleware } from "src/scripts/api/middleware";
import { notify } from "src/scripts/common/notification";
import { useDispatch } from "react-redux";
import { setApiKeys } from "src/scripts/redux/slices/userApiKeysSlice";
import styles from "./UserApiKeyWrapper.module.scss";

const UserInfoWrapper: React.FC<{
    close: () => void;
}> = ({ close = null }) => {
    const classes = classNames([styles["user-api-key-wrapper"], "form__inner", "form", "popup"]);
    const [active, setActive] = useState(false);
    const [validateIp, setValidateIp] = useState(false);
    const [ip, setIp] = useState("127.0.0.1");
    const dispatch = useDispatch();

    const onIpChange = (e) => {
        const value = e.target.value.replace(/[^0-9.]/g, "").replace("..", ".") || "127.0.0.1";
        setIp(value);
    };

    const resetAll = () => {
        setActive(false);
        setValidateIp(false);
        setIp("127.0.0.1");
    };

    const handleClose = () => {
        resetAll();
        close();
    };

    const handleAddKey = async () => {
        await authMiddleware.createApiMiddleware(active, validateIp, [ip]);
        dispatch(setApiKeys((await authMiddleware.getApiKeysMiddleware()) as IApiUserApiKeys));
        notify(dispatch, "Success!", "test");
        handleClose();
    };

    return (
        <>
            <button className={"close"} type={"button"} onClick={handleClose}>
                <Close />
            </button>
            <div className={classes}>
                <strong className={"title"}>Add new key</strong>

                <div className={classNames(["form__inner--item", "form__input"])}>
                    <div className={styles["user-api-key-wrapper__checkbox"]}>
                        <p>Active</p>
                        <Checkbox switcher checked={active} id={"is-active"} value=' ' label=' ' onChange={() => setActive((e) => !e)} />
                    </div>
                </div>

                <div className={classNames(["form__inner--item", "form__input"])}>
                    <div className={styles["user-api-key-wrapper__checkbox"]}>
                        <p>Validate IP</p>
                        <Checkbox switcher checked={validateIp} id={"is-validate"} value=' ' label=' ' onChange={() => setValidateIp((e) => !e)} />
                    </div>
                </div>

                <div className={classNames(["form__inner--item", "form__input"])}>
                    <div className={styles["user-api-key-wrapper__checkbox"]}>
                        <p>IP</p>
                    </div>
                    <div className={styles["user-api-key-wrapper__checkbox"]}>
                        <TextInput value={ip} onChange={onIpChange} />
                    </div>
                </div>

                <div className={classNames(["form__inner--item-button", "form__input"])}>
                    <Button onClick={handleAddKey} className={styles["logout-button"]}>
                        Add new key
                    </Button>
                </div>
            </div>
        </>
    );
};

export default UserInfoWrapper;
