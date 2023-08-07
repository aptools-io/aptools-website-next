// React

import React, { useEffect, useState } from "react";

// styles
import classNames from "classnames";
import { ArrowMore } from "src/components/svg";
import JsonFormatter from "react-json-formatter";
import CopyText from "../CopyText/CopyText";
import styles from "./CodeArea.module.scss";

const CodeArea: React.FC<{ 
    title?: string,
    data: string | { [key: string]: string; },
    noPaddings?: boolean,
    opened?: boolean,
    noTopPadding?: boolean
} & IComponent> = ({ 
    title = "",
    data = "",
    noPaddings = false,
    opened = false,
    noTopPadding = false,
    className
}) => {
    const [open, setOpen] = useState(opened);

    const jsonStyle = {
        propertyStyle: { color: "#171826" },
        stringStyle: { color: "#171826" },
        numberStyle: { color: "#171826" }
    };

    const classes = classNames([
        styles["code-area"],
        { [styles["no-paddings"]]: noPaddings },
        { [styles["no-top-padding"]]: noTopPadding },
        className
    ]);

    const handleOpen = () => setOpen(e => !e);

    return (
        <div className={classes}>
            {title && <span className={styles["title"]}>{title}</span>}
            <div className={styles["code-area__inner"]}>
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
        </div>
    );
};

export default CodeArea;
