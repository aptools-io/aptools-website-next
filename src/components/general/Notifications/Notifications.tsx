// React
import React, { useState } from "react";

// Styles
import classNames from "classnames";
import { IRootState } from "src/scripts/redux/store";
import { useSelector } from "react-redux";
import styles from "./Notifications.module.scss";

const Notifications: React.FC<IComponent> = ({ 
    className
}) => {
    const { notifications = [] } = useSelector((state: IRootState) => state.notification);

    const classes = classNames([
        styles.notifications,
        className
    ]);

    const renderNotification = (item, index) => {
        return (
            <div key={index} 
                className={classNames([
                    styles.notifications__plate,
                    { [styles.hide]: item?.hide },
                    className
                ])}
            >
                <div dangerouslySetInnerHTML={{ __html: item?.text }} />
            </div>
        );
    };
 
    return (
        <div className={classes}>
            <ul className={styles.notifications__plates}>
                {notifications.map(renderNotification)}
            </ul>
        </div>
    );
};


export default Notifications;
