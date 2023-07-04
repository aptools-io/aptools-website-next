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
    children,
    className,
    style
}) => {

    const classes = classNames([
        styles["button"],
        { [styles["invert"]]: invert },
        className
    ]);

    const additive = {
        "back": <ArrowLeft />,
    };

    const ChildrenWrapper = <>{additive[before]}{children}{additive[after]}</>;

    if(href) {
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
        >
            {ChildrenWrapper}
        </button>
    );
};

export default Button;
