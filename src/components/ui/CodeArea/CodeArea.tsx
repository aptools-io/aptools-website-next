// React

import React, { useEffect, useState } from "react";

// styles
import styles from "./CodeArea.module.scss";
import classNames from "classnames";
import CopyText from "../CopyText/CopyText";
import { ArrowMore } from "src/components/svg";
import JsonFormatter from "react-json-formatter";

const CodeArea: React.FC<{ 
    data: string | { [key: string]: string; },
    noPaddings?: boolean
} & IComponent> = ({ 
    data = "",
    noPaddings = false,
    className
}) => {
    const [open, setOpen] = useState(false);

    const jsonStyle = {
        propertyStyle: { color: "#171826" },
        stringStyle: { color: "#171826" },
        numberStyle: { color: "#171826" }
    };

    const classes = classNames([
        styles["code-area"],
        { [styles["no-paddings"]]: noPaddings },
        className
    ]);

    const handleOpen = () => setOpen(e => !e);

    return (
        <div className={classes}>
            <div className={classNames([
                styles["code"],
                { [styles["open"]]: open }
            ])}
                onClick={handleOpen}
            >
                <div className={styles["code-formatted"]}>
                    <JsonFormatter json={data} tabWith={4} jsonStyle={jsonStyle}  />
                </div>
                <button>
                    <ArrowMore />
                </button>
            </div>
            <CopyText text={typeof data === "string" ? data : JSON.stringify(data)} />
        </div>
    )
};

export default CodeArea;
