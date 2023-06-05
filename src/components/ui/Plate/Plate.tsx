// React
import React from "react";

// Styles
import classNames from "classnames";
import styles from "./Plate.module.scss";

// Other

const Plate: React.FC<IPlateProps> = ({ 
    title,
    image,
    compressed = false,
    children,
    className,
    style
}) => {

    const classes = classNames([
        styles["plate"],
        { [styles["compressed"]]: compressed },
        className
    ]);

    return (
        <div style={style} className={classes}>
            <div className={styles["plate__title-wrapper"]}>
                {image && <img className={styles["plate__image"]} src={image} />}
                {title && <strong className={styles["plate__title"]}>{title}</strong>}
            </div>
            {children}
        </div>
    );
};

export default Plate;
