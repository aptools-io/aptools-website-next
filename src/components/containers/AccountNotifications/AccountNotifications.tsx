// React
import React, { useState } from "react";

// Components

// Styles
import classNames from "classnames";
import { Grid, GridWrapper } from "src/components/general";
import { Button, Checkbox, Plate, Select, Tabs, TextInput } from "src/components/ui";
import moment from "moment";
import { authMiddleware } from "src/scripts/api/middleware";
import { notify } from "src/scripts/common/notification";
import { useDispatch, useSelector } from "react-redux";
import { IRootState } from "src/scripts/redux/store";
import { AccountDiscord, AccountEmail, SocialDiscord } from "src/components/svg";
import { setNotifications } from "src/scripts/redux/slices/userNotificationsSlice";
import { categories, ruleType } from "./data/data";
import styles from "./AccountNotifications.module.scss";

// Other

const AccountNotifications: React.FC<IComponent> = () => {
    const { notifications } = useSelector((state: IRootState) => state.userNotifications);
    const [editType, setEditType] = useState(null);
    const [editId, setEditId] = useState(null);
    const [currentRuleIndex, setCurrentRuleIndex] = useState(0);
    const [values, setValues] = useState(ruleType[0]);
    const dispatch = useDispatch();
    const classes = classNames([styles["account-notifications"]]);

    const { inputs } = values;

    const renderRules = (item, index) => {
        const { title } = item || {};
        return <span key={index}>{title}</span>;
    };

    const handleChangeInput = (type: string, value) => {
        const val = type === "expiresIn" ? Number(value) : value;
        setValues({
            ...values,
            inputs: {
                ...values.inputs,
                [type]: val
            } as any
        });
    };

    const handleCreate = () => setEditType("CREATE");
    const handleCancel = () => setEditType(null);
    const handleSave = async () => {
        switch (editType) {
            case "CREATE":
                await authMiddleware.createNotificationMiddleware({
                    ruleType: values.value,
                    ...values.inputs
                });
                notify(dispatch, "Success!", "test");
                setEditType(null);
                dispatch(setNotifications((await authMiddleware.getNotificationsMiddleware()) as IApiUserNotifications));
                break;
            case "EDIT":
                await authMiddleware.updateNotificationMiddleware(
                    {
                        ruleType: values.value,
                        ...values.inputs
                    },
                    editId
                );
                notify(dispatch, "Success!", "test");
                setEditType(null);
                dispatch(setNotifications((await authMiddleware.getNotificationsMiddleware()) as IApiUserNotifications));
                break;
            default:
                notify(dispatch, "Error", "test");
                setEditType(null);
                break;
        }
    };

    const { notifications: notificationsList } = notifications?.data || {};
    const renderNotifications = (item: IApiUserNotification, index: number) => {
        const { id, ruleType: type, name, notifyByDiscord, notifyByEmail, enabled, expirationDate } = item || {};
        const currentType = ruleType.find((x) => x.value === type);
        const currentIndex = ruleType.findIndex((x) => x.value === type);

        const today = moment();
        const expDay = moment(expirationDate);

        const expired = expDay.diff(today) < 0;

        const handleUpdate = async () => {
            const data = (await authMiddleware.getNotificationMiddleware(id)) as any;

            const { data: item } = data || {};
            setEditType("EDIT");
            setCurrentRuleIndex(currentIndex);
            setValues({
                ...currentType,
                inputs: {
                    ...item
                }
            });
            setEditId(id);
        };
        return (
            <li key={index} className={styles["list__item"]} onClick={handleUpdate}>
                <div>
                    <span className={styles["type"]} data-value={currentType?.value}>
                        {currentType?.title}
                    </span>
                </div>
                <div>
                    <span className={styles["name"]}>{name}</span>
                </div>
                <div>
                    <span className={styles["socials"]}>
                        {notifyByDiscord && <AccountDiscord />}
                        {notifyByEmail && <AccountEmail />}
                    </span>
                </div>
                <div>
                    <span className={styles["status"]}>{expired ? "Ended" : <>{enabled ? "Active" : "Deactive"}</>}</span>
                </div>
            </li>
        );
    };

    return (
        <>
            <div className={classes}>
                <div className={styles["account-notifications__list"]}>
                    Active Notifications
                    {!!notificationsList?.length && (
                        <div className={styles["list__wrapper"]}>
                            <div className={styles["list__header"]}>
                                <div>
                                    <span>Type</span>
                                </div>
                                <div>
                                    <span>Name</span>
                                </div>
                                <div>
                                    <span></span>
                                </div>
                                <div>
                                    <span>Status</span>
                                </div>
                            </div>
                            <ul className={styles["list__items"]}>{notificationsList.map(renderNotifications)}</ul>
                        </div>
                    )}
                    <Button invert onClick={handleCreate}>
                        Create a New Notification
                    </Button>
                </div>
                {editType && (
                    <div key={`${editType}${editId}`} className={styles["account-notifications__edit"]}>
                        <div className={styles["edit-type"]}>{editType === "CREATE" && <strong>Create smart alert</strong>}</div>
                        <Plate noMin dark className={styles["plate"]}>
                            <Tabs tabsName={"newsTabs"} dataArray={categories} defaultEntry={categories[1]} itemsCount={false}>
                                <>
                                    <div className={styles["edit-item"]}>
                                        <span className={styles["title"]}>Type of alert</span>
                                        <Select
                                            className={styles["select"]}
                                            value={currentRuleIndex}
                                            onChange={(value) => {
                                                setCurrentRuleIndex(value);
                                                setValues(ruleType[value]);
                                            }}>
                                            {ruleType.map(renderRules)}
                                        </Select>
                                    </div>
                                </>
                            </Tabs>
                            <>
                                {inputs?.name !== undefined && (
                                    <div className={styles["edit-item"]}>
                                        <TextInput label='Name of alert' info={"By defautl it will be Notification with date"} placeholder={`Notification - ${moment().format("DD-MM-YYYY")}`} value={inputs.name} onChange={(e) => handleChangeInput("name", e.target.value)} />
                                    </div>
                                )}
                            </>
                        </Plate>

                        <Plate noMin dark className={styles["plate"]}>
                            <>
                                {inputs?.wallet !== undefined && (
                                    <div className={styles["edit-item"]}>
                                        <TextInput label='Wallet address' placeholder={"Wallet address"} value={inputs.wallet} onChange={(e) => handleChangeInput("wallet", e.target.value)} />
                                    </div>
                                )}
                                {inputs?.expiresIn !== undefined && (
                                    <div className={styles["edit-item"]}>
                                        <TextInput label='Timeframe within' value={`${inputs.expiresIn}`} placeholder={"Timeframe within"} onChange={(e) => handleChangeInput("expiresIn", e.target.value)} />
                                    </div>
                                )}
                                {inputs?.usdAmount !== undefined && (
                                    <div className={styles["edit-item"]}>
                                        <TextInput label='Usd amount' placeholder={"Usd amount"} value={inputs.usdAmount} onChange={(e) => handleChangeInput("usdAmount", e.target.value)} />
                                    </div>
                                )}
                                {inputs?.amount !== undefined && (
                                    <div className={styles["edit-item"]}>
                                        <TextInput label='Amount' placeholder={"Amount"} value={inputs.amount} onChange={(e) => handleChangeInput("amount", e.target.value)} />
                                    </div>
                                )}
                            </>
                        </Plate>

                        <Plate noMin dark className={styles["plate"]}>
                            <>
                                <strong className={styles["title"]}>How do you want to be notificated?</strong>
                                {inputs?.notifyByTelegram !== undefined && (
                                    <div className={styles["edit-item"]}>
                                        <Checkbox id={"telegram"} label={"Telegram"} />
                                    </div>
                                )}
                                {inputs?.notifyByDiscord !== undefined && (
                                    <div className={styles["edit-item"]}>
                                        <Checkbox id={"discord"} label={"Discord"} checked={inputs.notifyByDiscord} onChange={() => handleChangeInput("notifyByDiscord", !inputs.notifyByDiscord)} />
                                    </div>
                                )}
                                {inputs?.notifyByEmail !== undefined && (
                                    <div className={styles["edit-item"]}>
                                        <Checkbox id={"email"} label={"Email"} checked={inputs.notifyByEmail} onChange={() => handleChangeInput("notifyByEmail", !inputs.notifyByEmail)} />
                                    </div>
                                )}
                            </>
                        </Plate>

                        <Plate noMin dark className={styles["plate"]}>
                            <>
                                {inputs?.enabled !== undefined && (
                                    <div className={styles["edit-item"]}>
                                        <span className={styles["title"]}>Enable alert</span>
                                        <Checkbox id={"enabled"} label={" "} checked={inputs.enabled} onChange={() => handleChangeInput("enabled", !inputs.enabled)} />
                                    </div>
                                )}
                            </>
                        </Plate>
                        <div className={styles["buttons"]}>
                            <Button invert onClick={handleSave}>
                                Save
                            </Button>
                            <Button onClick={handleCancel}>Cancel</Button>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
};

export default AccountNotifications;
