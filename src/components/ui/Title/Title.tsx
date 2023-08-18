// React
import React from "react";

// Styles
import classNames from "classnames";
import styles from "./Title.module.scss";

const Title: React.FC<IComponent> = ({ 
    children,
    className,
    style
}) => {

    const classes = classNames([
        styles.title,
        className
    ]);

    return (
        <div style={style} className={classes}>
            {children}
        </div>
    );
};

export default Title;
