// React
import React, { useState, useEffect } from "react";

// Components
import { ActiveLink, Button, Tabs, TextInput } from "src/components/ui";
import { SignUpForm, SignWalletForm } from "src/components/forms";

// Styles
import classNames from "classnames";
import AptLogoBig from "public/static/images/svg/apt_logo_big.svg";
import { AptosWalletAdapterProvider } from "@aptos-labs/wallet-adapter-react";
import { authMiddleware } from "src/scripts/api/middleware";
import styles from "./AccountQuestions.module.scss";
import { questions } from "./data/data";
import UserInfoWrapper from "../UserInfoWrapper/UserInfoWrapper";

// Other

const AccountQuestions: React.FC<IComponent> = () => {
    const [isActive, setIsActive] = useState(false);
    const [infoPopup, setInfoPopup] = useState(false);
    const [questionId, setQuestionId] = useState(0);
    const [questionsData, setQuestionsData] = useState({});

    const classes = classNames([styles["account-questions"], { [styles["active"]]: isActive }]);

    useEffect(() => {
        if (!window) return;
        setIsActive(!!window.localStorage.getItem("firstTime"));
    }, []);

    const renderRadios = (name, item, index) => {
        const { title, value } = item;

        const handleChange = () => {
            setQuestionsData({
                ...questionsData,
                [name]: value
            });
        };
        return (
            <li key={index} className={styles["radio"]}>
                <input type='radio' name={name} id={`id-${value}`} onChange={handleChange} />
                <label htmlFor={`id-${value}`}>{title}</label>
            </li>
        );
    };

    const renderInputs = (item, index) => {
        const { title, placeholder, optional, name } = item;

        const handleChange = (e) => {
            setQuestionsData({
                ...questionsData,
                [name]: e.target.value
            });
        };

        return (
            <li key={index} className={styles["input"]}>
                <TextInput label={title} require={optional} placeholder={placeholder} onChange={handleChange} value={questionsData?.[name]} />
            </li>
        );
    };

    const handleNext = async () => {
        if (questionId !== questions.length - 1) {
            setQuestionId((e) => e + 1);
            return;
        }
        await authMiddleware.setQuestionsMiddleware(questionsData);
        setQuestionId((e) => e + 1);
        setInfoPopup(true);
        window.localStorage.removeItem("firstTime");
    };

    const renderQuestions = (item, index) => {
        const { title, description, logo, value, radios, inputs, optional } = item;
        return (
            <div className={classNames([styles["account-questions__item"], { [styles["active"]]: index === questionId }])}>
                <div className={styles["account-questions__item--logo"]}>
                    <div className={styles["logo"]}>{logo}</div>
                    <ul className={styles["dots"]}>
                        {questions.map((item, index) => (
                            <li key={index} className={classNames([{ [styles["dot-prev"]]: index < questionId }, { [styles["dot-active"]]: index === questionId }])} />
                        ))}
                    </ul>
                </div>
                <div className={styles["account-questions__item--inner"]}>
                    {title && <strong className={styles["title"]}>{title}</strong>}
                    {description && <span className={styles["description"]}>{description}</span>}
                    {radios?.length && <ul className={styles["radios"]}>{radios.map((item, index) => renderRadios(value, item, index))}</ul>}
                    {inputs?.length && <ul className={styles["inputs"]}>{inputs.map(renderInputs)}</ul>}
                    {optional && <span className={styles["optional"]}>* Optional</span>}
                    <div className={styles["buttons"]}>
                        <Button className={styles["button"]} onClick={handleNext}>
                            Skip question
                        </Button>
                        <Button invert className={styles["button"]} onClick={handleNext}>
                            {questionId !== questions.length - 1 ? "Next question >" : "Submit"}
                        </Button>
                    </div>
                </div>
            </div>
        );
    };

    const handleCloseAll = () => {
        setIsActive(false);
        setInfoPopup(false);
    };

    return (
        <>
            <div className={classes}>
                <div className={styles["account-questions__wrapper"]}>
                    {questions.map(renderQuestions)}
                    {infoPopup && (
                        <div className={"form__wrapper"}>
                            <div className={"form__wrapper--background"}>
                                <img src={AptLogoBig.src} alt={"logo"} />
                            </div>
                            <div className={"form__wrapper--foreground wide"}>
                                <UserInfoWrapper close={handleCloseAll} />
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
};

export default AccountQuestions;
