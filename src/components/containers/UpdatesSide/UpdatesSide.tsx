// React
import React from "react";

// Styles
import classNames from "classnames";
import { ActiveLink, Button } from "src/components/ui";
import styles from "./UpdatesSide.module.scss";

const dummyData = [
    {
        id: 1,
        version: 1.02,
        title: "Blockchain Scalability Enhancement",
        date: "03.03.2023"
    },
    {
        id: 1,
        version: 1.02,
        title: "Blockchain Scalability Enhancement",
        date: "03.03.2023"
    },
    {
        id: 1,
        version: 1.02,
        title: "Blockchain Scalability Enhancement",
        date: "03.03.2023"
    },
    {
        id: 1,
        version: 1.02,
        title: "Blockchain Scalability Enhancement",
        date: "03.03.2023"
    },
    {
        id: 1,
        version: 1.02,
        title: "Blockchain Scalability Enhancement",
        date: "03.03.2023"
    },
];

const UpdatesSide: React.FC<IComponent> = ({
    className 
}) => {

    const classes = classNames([
        styles["updates-side"],
        className
    ]);

    const renderUpdateItem = (item, index) => {
        const { id, version, title, date } = item || {};
        return (
            <li key={index}>
                <ActiveLink href={`/updates/${id}`}>
                    <a  className={styles["updates-side__item"]}>
                        {version && <span className={styles["ver"]}>{version}</span>}
                        {title && <strong className={styles["title"]}>{title}</strong>}
                        {date && <span className={styles["date"]}>{date}</span>}
                    </a>
                </ActiveLink>
            </li>
        );
    };

    return (
        <div className={classes}>
            <div className={styles["updates-side__info"]}>
                <strong className={styles["updates-side__title"]}>Updates</strong>
                <Button invert href="/news/updates">All updates</Button>
            </div>
            {dummyData && 
                <ul className={styles["updates-side__items"]}>
                    {dummyData.map(renderUpdateItem)}
                </ul>
            }
        </div>
    );
};

export default UpdatesSide;
