// React
import React from "react";

// Styles
import classNames from "classnames";
import styles from "./TitleSwitcher.module.scss";

const TitleSwitcher: React.FC<ITitleSwitcherProps> = ({ 
    title,
    data,
    settedData,
    setData,
    children,
    className,
    style
}) => {
    const classes = classNames([
        styles["title-switcher"],
        className
    ]);

    const renderItems = (item: ITitleSwitcherData, index: number) => {
        return (
            <button 
                key={index} 
                className={classNames([
                    styles["title-switcher__item"],
                    { [styles.active]: settedData.key === item.key }
                ])} 
                onClick={() => setData(item)}
            >
                {item.value}
            </button>
        );
    };

    return (
        <div style={style} className={classes}>
            <div className={styles["title-switcher__wrapper"]}>
                {title && 
                    <strong className={styles["title-switcher__title"]}>{title}</strong>}
                {data?.length && 
                    <div className={styles["title-switcher__items"]}>{data.map(renderItems)}</div>}
            </div>
            <div className={styles["title-switcher__inner"]}>
                {children}
            </div>
        </div>
    );
};

export default TitleSwitcher;
