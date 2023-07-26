// React
import React, { useState } from "react";

// Components
import { CopyBig, Copy } from "src/components/svg";

// Util
import { copyText } from "src/scripts/util/copyText";

// Styles
import classNames from "classnames";
import { useDispatch } from "react-redux";
import { showNotification } from "src/scripts/redux/slices/notificationSlice";
import { notify } from "src/scripts/common/notification";
import styles from "./CopyText.module.scss";
import Loader from "../Loader/Loader";


const CopyText: React.FC<{ big?: boolean, text: string }> = ({ 
    big = false,
    text = ""
}) => {
    const [loading, setLoading] = useState(false);
    const dispatch = useDispatch();

    const classes = classNames([
        styles["copy-text"],
    ]);

    const handleClick = () => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            notify(dispatch, "Succesfully copied!", "test");
            copyText(text);
        }, 200);
    };

    return (
        <button className={classes} onClick={handleClick}>
            <div className={classNames([{ [styles["hide"]]: loading } ])}>{big ? <CopyBig /> : <Copy />}</div>
            <div className={classNames([
                styles["copy-text__loading"], 
                { [styles["hide"]]: !loading },
                { [styles["small"]]: !big } 
            ])}></div>
        </button>
    );
};

export default CopyText;
