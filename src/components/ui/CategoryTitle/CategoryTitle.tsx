// React
import React from "react";

// Styles
import classNames from "classnames";
import styles from "./CategoryTitle.module.scss";

// Other

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
