// React
import React from "react";

// Styles
import classNames from "classnames";
import { ArrowLeftDoublePagination, ArrowLeftPagination } from "src/components/svg";
import styles from "./Paginator.module.scss";

// Components

const Paginator: React.FC<IPaginatorProps> = ({ 
    page = 1,
    total = 1000,
    shift = 2,
    onChangePage = null, 
    children,
    className,
    style
}) => {
    const classes = classNames([
        styles["paginator"],
        className
    ]);

    const pageCount = Math.ceil(90 / 10); 


    const pages = [...new Array(pageCount).fill(true).map((_, i) => {
        const shift = 3;
        if((i === page - shift || i === page + shift) && (i !== 0 && i !== pageCount - 1))  return "...";
        if(i < page - shift && i !== 0) return undefined;
        if(i > page + shift && i !== page - 1) return undefined;

        return ++i;
    }).filter(item => item)];
;
    const renderPagination = (item, index) => {
        return (
            <li 
                key={index} 
                className={classNames([
                    styles["paginator__page"],
                    { [styles["active"]]: page === item },
                    { [styles["dots"]]: item === "..." }
                ])}
            >
                <button onClick={() => onChangePage(item)}>{item}</button>
            </li>
        );
    };
    return (
        <div style={style} className={classes}>
            <div className={styles["paginator__inner"]}>{children}</div>
            <ul className={styles["paginator__pages"]}>
                <button className={classNames([styles["paginator__arrow-left"], { [styles["disabled"]]: page === 1 }])} onClick={() => onChangePage(1)}><ArrowLeftDoublePagination /></button>
                <button className={classNames([styles["paginator__arrow-left"], { [styles["disabled"]]: page === 1 }])} onClick={() => onChangePage(page - 1)}><ArrowLeftPagination /></button>

                {pages.map(renderPagination)}

                <button className={classNames([styles["paginator__arrow-right"], { [styles["disabled"]]: page === pageCount }])} onClick={() => onChangePage(page + 1)}><ArrowLeftPagination /></button>
                <button className={classNames([styles["paginator__arrow-right"], { [styles["disabled"]]: page === pageCount }])} onClick={() => onChangePage(-1)}><ArrowLeftDoublePagination /></button>
            </ul>
        </div>
    );
};

export default Paginator;
