// React
import React from "react";

// Components
import { ActiveLink, Button, Tabs } from "src/components/ui";
import { SetPasswordForm } from "src/components/forms";

// Styles
import classNames from "classnames";
import AptLogoBig from "public/static/images/svg/apt_logo_big.svg";
import styles from "./AuthRegisterPassword.module.scss";

// Other

const AuthRegisterPassword: React.FC<{ forgot?: boolean }> = ({ forgot = false }) => {
    const classes = classNames(["form__wrapper"]);

    return (
        <div className={classes}>
            <div className={"form__wrapper--background"}>
                <img src={AptLogoBig.src} alt={"logo"} />
            </div>
            <div className={"form__wrapper--foreground"}>
                <SetPasswordForm forgot={forgot} />
            </div>
        </div>
    );
};

export default AuthRegisterPassword;
