// React
import React from "react";

// Styles
import classNames from "classnames";
import styles from "./Plate.module.scss";

// Components
import PlateWrapper from "./PlateWrapper";
import ActiveLink from "../ActiveLink/ActiveLink";
import Img from "../Img/Img";

const Plate: React.FC<IPlateProps> = ({ 
    title,
    titleLink,
    image,
    dark = false,
    compressed = false,
    min = false,
    noMin = false,
    center = false,
    bordered = false,
    transparent = false,
    children,
    className,
    style
}) => {

    const classes = classNames([
        styles.plate,
        { [styles.compressed]: compressed },
        { [styles.dark]: dark },
        { [styles.min]: min },
        { [styles["no-min"]]: noMin },
        { [styles.center]: center },
        { [styles.bordered]: bordered },
        { [styles.transparent]: transparent },
        className
    ]);

    return (
        <div style={style} className={classes}>
            
            {(image || title) && <PlateWrapper titleLink={titleLink}>
                {image && <Img className={styles.plate__image} src={image} alt={title || "image"} />}
                {title && <strong className={styles.plate__title}>{title}</strong>}
            </PlateWrapper>}
            {children}
            {titleLink && <ActiveLink additiveClassName={styles.plate__link} href={titleLink}><a></a></ActiveLink>}
        </div>
    );
};

export default Plate;
