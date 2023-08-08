// React
import React from "react";

// Styles
import classNames from "classnames";
import styles from "./Skeleton.module.scss";


const Skeleton: React.FC<{ show?: boolean, full?: boolean } & IComponent> = ({ 
    className,
    show = true,
    full = false,
    style
}) => {

    const classes = classNames([
        styles.skeleton,
        { [styles.show]: show },
        { [styles.full]: full },
        className
    ]);

    return (
        <div style={style} className={classes} />
    );
};

export default Skeleton;
