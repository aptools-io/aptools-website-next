// React
import React, { useMemo, useState } from "react";

// Styles
import classNames from "classnames";
import styles from "./Paginator.module.scss";

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

    const currentPosition = Array.from({length: 0 + shift}, (_, i) => i + page);

    const start = page < shift + 1 ? Array.from({length: shift + 1}, (_, i) => i + 1) : [1];
    const center = page >= shift + 1 && page <= pageCount - shift + 1 ? [page - 2, page - 1, page, page + 1, page + 2] : [];
    const end = Array.from({length: shift}, (_, i) => pageCount - i).reverse();
;
    const renderPagination = (item, index) => {
        return (
            <li key={index} className={styles["paginator__page"]}><button onClick={() => onChangePage(item)}>{item}</button></li>
        )
    }
    return (
        <div style={style} className={classes}>
            <div className={styles["paginator__inner"]}>{children}</div>
            <ul className={styles["paginator__pages"]}>
                {[...start, ...(page >= shift + 1 ? ["..."] : []), ...center,  ...(page <= pageCount - shift - 1 ? ["..."] : []), ...end].map(renderPagination)}
            </ul>
        </div>
    );
};

export default Paginator;
