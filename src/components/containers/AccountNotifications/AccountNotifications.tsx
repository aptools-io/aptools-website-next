// React
import React from "react";

// Components

// Styles
import classNames from "classnames";
import { Grid, GridWrapper } from "src/components/general";
import { Button, Plate } from "src/components/ui";
import styles from "./AccountNotifications.module.scss";

// Other

const AccountNotifications: React.FC<IComponent> = () => {
    const classes = classNames([styles["account-notifications"]]);

    return (
        <>
            <div className={classes}>
                Active Notifications
                <Button invert>Create a New Notification</Button>
            </div>
        </>
    );
};

export default AccountNotifications;
