// React
import React from "react";

// Styles
import classNames from "classnames";
import { ArrowMore } from "src/components/svg";
import styles from "./CategoryTitle.module.scss";

// Other

const CategoryTitle: React.FC<ICategoryTitleProps> = ({
    title,
    className,
    greyLine = false,
    collapse = false,
    setCollapse = null
}) => {
    const classes = classNames([
        styles["category-title"],
        { [styles["grey-line"]]: greyLine },
        className
    ]);

    const handleCollapse = () => setCollapse(!collapse);

    return (
        <div className={classes}>
            <span>{title}</span>
            {setCollapse && (
                <button
                    className={classNames([{ [styles["active"]]: collapse }])}
                    onClick={handleCollapse}>
                    <ArrowMore />
                </button>
            )}
        </div>
    );
};

export default CategoryTitle;
