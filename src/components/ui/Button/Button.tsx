// React
import React from "react";

// Styles
import classNames from "classnames";
import { ArrowLeft } from "src/components/svg";
import styles from "./Button.module.scss";
import ActiveLink from "../ActiveLink/ActiveLink";

const Button: React.FC<IButtonProps> = ({ 
    href = null,
    after = null,
    before = null,
    invert = false,
    fill = false,
    disabled = false,
    onClick = null,
    children,
    className,
    style,
}) => {

    const classes = classNames([
        styles["button"],
        { [styles["invert"]]: invert },
        { [styles["fill"]]: fill },
        { [styles["disabled"]]: disabled },
        className
    ]);

    const additive = {
        "back": <ArrowLeft />,
    };

    const ChildrenWrapper = <>{additive[before]}{children}{additive[after]}</>;

    if(href && !disabled) {
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
            onClick={onClick}
        >
            {ChildrenWrapper}
        </button>
    );
};

export default Button;
