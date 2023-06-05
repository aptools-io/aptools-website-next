// React
import React from "react";

// Styles
import styles from "./CategoryTitle.module.scss";

// Other
import classNames from "classnames";

const CategoryTitle: React.FC<ICategoryTitleProps> = ({ 
    title,
}) => {
  
    const classes = classNames([
        styles["category-title"],
    ]);
    
    return (
        <div className={classes}>
            {title}
        </div>
    );
};


export default CategoryTitle;
