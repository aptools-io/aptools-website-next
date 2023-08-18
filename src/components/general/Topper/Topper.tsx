// React
import React from "react";

// Redux
import { IRootState } from "src/scripts/redux/store";
import { useSelector } from "react-redux";

// Styles
import classNames from "classnames";

// Components
import { Breadcrumbs, Button } from "src/components/ui";
import { useRouter } from "next/router";
import styles from "./Topper.module.scss";


const Topper: React.FC<{ 
    backlink?: string, 
    customTitle?: string | string[],
    additiveTitle?: string;
} & IComponent> = ({ 
    backlink = null,
    customTitle = null,
    additiveTitle = "",
    className
}) => {
    const { title } = useSelector((state: IRootState) => state.pageTitle);

    const classes = classNames([
        styles.topper,
        className
    ]);
 
    return (
        <div className={classes}>
            <strong className={styles.topper__title} dangerouslySetInnerHTML={{ __html: `${title}${additiveTitle}` }}></strong>
            <Breadcrumbs key={title} customTitle={customTitle || title} />
            <Button { ...backlink ? { href: backlink } : {} } before={"back"}>Back</Button>
        </div>
    );
};


export default Topper;
