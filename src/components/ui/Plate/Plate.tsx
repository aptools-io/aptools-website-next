// React
import React from "react";

// Styles
import styles from "./Plate.module.scss";

// Other
import classNames from "classnames";


const Plate: React.FC<IPlateProps> = ({ 
    title,
    compressed = false,
    children,
    className 
}) => {

    const classes = classNames([
        styles["plate"],
        { [styles["compressed"]]: compressed },
        className
    ]);

    return (
        <div className={classes}>
            {title && <strong className={styles["plate__title"]}>{title}</strong>}
            {children}
        </div>
    )
}

export default Plate;
