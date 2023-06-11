// React
import React from "react";

// Styles
import classNames from "classnames";
import styles from "./Plate.module.scss";

// Components
import PlateWrapper from "./PlateWrapper";


const Plate: React.FC<IPlateProps> = ({ 
    title,
    titleLink,
    image,
    dark = false,
    compressed = false,
    min = false,
    children,
    className,
    style
}) => {

    const classes = classNames([
        styles["plate"],
        { [styles["compressed"]]: compressed },
        { [styles["dark"]]: dark },
        { [styles["min"]]: min },
        className
    ]);

    return (
        <div style={style} className={classes}>
            {(image || title) && <PlateWrapper titleLink={titleLink}>
                {image && <img className={styles["plate__image"]} src={image} />}
                {title && <strong className={styles["plate__title"]}>{title}</strong>}
            </PlateWrapper>}
            {children}
        </div>
    );
};

export default Plate;
