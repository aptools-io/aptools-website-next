// React
import React from "react";

// Styles
import styles from "./Plate.module.scss";

// Components
import ActiveLink from "../ActiveLink/ActiveLink";

const PlateWrapper: React.FC<IPlateProps> = ({ 
    titleLink,
    children
}) => {

    const wrapperClassName = styles["plate__title-wrapper"];
    if(titleLink) return <ActiveLink href={titleLink}><a className={wrapperClassName}>{children}</a></ActiveLink>;
    return <div className={wrapperClassName}>{children}</div>;
};

export default PlateWrapper;
