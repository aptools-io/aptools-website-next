// React
import React from "react";

// Styles
import classNames from "classnames";
import { ArrowForward, ArrowLeft, Logout, Plus, WalletSignUp } from "src/components/svg";
import styles from "./Button.module.scss";
import ActiveLink from "../ActiveLink/ActiveLink";

const Button: React.FC<IButtonProps> = ({ type = "button", href = null, after = null, before = null, invert = false, fill = false, disabled = false, onClick = null, children, className, style }) => {
    const classes = classNames([styles.button, { [styles.invert]: invert }, { [styles.fill]: fill }, { [styles.disabled]: disabled }, { [styles[after]]: after }, { [styles[before]]: before }, className]);

    const additive = {
        back: <ArrowLeft />,
        forward: <ArrowForward />,
        plus: <Plus />,
        wallet: <WalletSignUp />,
        logout: <Logout />
    };

    const ChildrenWrapper = (
        <>
            {additive[before]}
            {children}
            {additive[after]}
        </>
    );

    if (href && !disabled) {
        return (
            <ActiveLink href={href}>
                <a className={classes}>{ChildrenWrapper}</a>
            </ActiveLink>
        );
    }

    return (
        <button
            style={style}
            className={classes}
            type={type}
            onClick={() => {
                if (disabled || !onClick) return;
                onClick();
            }}>
            {ChildrenWrapper}
        </button>
    );
};

export default Button;
