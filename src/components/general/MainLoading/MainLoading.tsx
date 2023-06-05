// React
import React, { useState } from "react";

// Styles
import styles from "./MainLoading.module.scss";

// Other
import classNames from "classnames";

const MainLoading: React.FC<IMainLoadingProps> = ({ 
    loading,
    className
}) => {

    const classes = classNames([
        styles["main-loading"],
        { [styles["start"]]: loading.start },
        { [styles["end"]]: loading.end },
        className
    ]);
    
    return (
        <div  className={classes}>
        </div>
    );
};


export default MainLoading;
