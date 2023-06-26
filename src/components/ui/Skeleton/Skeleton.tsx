// React
import React from "react";

// Styles
import classNames from "classnames";
import styles from "./Skeleton.module.scss";


const Skeleton: React.FC<IComponent> = ({ 
    className,
    style
}) => {

    const classes = classNames([
        styles["skeleton"],
        className
    ]);

    return (
        <div style={style} className={classes} />
    );
};

export default Skeleton;
