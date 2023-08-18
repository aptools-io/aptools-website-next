// React
import classNames from "classnames";
import React, { useEffect, useState } from "react";

// static
import styles from "./Tooltip.module.scss";

const Tooltip: React.FC<{ text: string; left?: boolean } & IComponent> = ({
    text = "",
    left,
    children,
    className
}) => {
    const classes = classNames([
        styles["tooltip"],
        { [styles["left"]]: left },
        className
    ]);
    return (
        <span data-tooltip={text} className={classes}>
            {children}
        </span>
    );
};

export default Tooltip;
