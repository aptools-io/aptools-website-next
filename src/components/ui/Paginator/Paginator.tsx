// React
import React, { useMemo, useState } from "react";

// Styles
import classNames from "classnames";
import styles from "./Paginator.module.scss";

// Components
import { ArrowLeftDoublePagination, ArrowLeftPagination } from "src/components/svg";

const Paginator: React.FC<IPaginatorProps> = ({ 
    page = 1,
    perPage = 10,
    total = 1000,
    shift = 3,
    onChangePage = null, 
    children,
    className,
    style
}) => {
    const [paginationRange, setPaginationRange] = useState([]);
    const classes = classNames([
        styles["paginator"],
        className
    ]);

    const pageCount = Math.ceil(total / 10); 

    const start = page < shift + 1 ? Array.from({length: shift + 1}, (_, i) => i + 1) : [1];
    const center = page >= shift + 1 && page <= pageCount - shift + 1 ? [page - 2, page - 1, page, page + 1, page + 2] : [];
    const end = Array.from({length: shift}, (_, i) => pageCount - i).reverse();
;
    const renderPagination = (item, index) => {
        return (
            <li 
                key={index} 
                className={classNames([
                    styles["paginator__page"],
                    { [styles["active"]]: page == item },
                    { [styles["dots"]]: item == "..." }
                ])}
            >
                <button onClick={() => onChangePage(item)}>{item}</button>
            </li>
        )
    }
    return (
        <div style={style} className={classes}>
            <div className={styles["paginator__inner"]}>{children}</div>
            <ul className={styles["paginator__pages"]}>
                <button className={classNames([styles["paginator__arrow-left"], { [styles["disabled"]]: page == 1 }])} onClick={() => onChangePage(1)}><ArrowLeftDoublePagination /></button>
                <button className={classNames([styles["paginator__arrow-left"], { [styles["disabled"]]: page == 1 }])} onClick={() => onChangePage(page - 1)}><ArrowLeftPagination /></button>

                {[...start, ...(page >= shift + 1 ? ["..."] : []), ...center,  ...(page <= pageCount - shift - 1 ? ["..."] : []), ...end].map(renderPagination)}

                <button className={classNames([styles["paginator__arrow-right"], { [styles["disabled"]]: page == pageCount }])} onClick={() => onChangePage(page + 1)}><ArrowLeftPagination /></button>
                <button className={classNames([styles["paginator__arrow-right"], { [styles["disabled"]]: page == pageCount }])} onClick={() => onChangePage(pageCount)}><ArrowLeftDoublePagination /></button>
            </ul>
        </div>
    );
};

export default Paginator;
