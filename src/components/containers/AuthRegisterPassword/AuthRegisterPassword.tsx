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

const AuthRegisterPassword: React.FC<IComponent> = () => {
    const classes = classNames([styles["auth-register-password"]]);

    return (
        <div className={classes}>
            <div className={styles["auth-register-password__background"]}>
                <img src={AptLogoBig.src} alt={"logo"} />
            </div>
            <div className={styles["auth-register-password__foreground"]}>
                <SetPasswordForm />
            </div>
        </div>
    );
};

export default AuthRegisterPassword;
