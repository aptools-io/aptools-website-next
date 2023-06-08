// React
import React, { Children, useState, useEffect }  from "react";

// Styles
import styles from "./ListHeader.module.scss";
import classNames from "classnames";

// Components
import { SortArrowDown, SortArrowUp } from "src/components/svg";

const ListHeader: React.ForwardRefRenderFunction<any, IListHeaderProps> = ({
    columnNames = [],
    columns = ["100%"],
    data = [],
    children,
    className 
}, ref) => {
    const child: React.ReactNode = Children.only(children);
    const defaultSortIndex = columnNames?.findIndex(x => x.defaultSort);

    const [sorting, setSorting] = useState({
        "key": defaultSortIndex > -1 ? columnNames?.[defaultSortIndex]?.key : columnNames?.[0]?.key,
        "sort": "desc"
    })
    const [sortedData, setSortedData] = useState(data);
    
    const classes = classNames([
        styles["list-header"],
        className
    ]);

    const style = {
        "--list-columns": columns.join(' ')
    } as React.CSSProperties;

    
    const handleSort = (e, key: string) => {
        const button = e.currentTarget;
        const sortType = button.dataset.sort === "desc" ? "asc" : "desc";
        button.dataset.sort = sortType;

        setSorting({
            "key": key,
            "sort": sortType
        })
    }

    const sort = (a, b) => {
        const x = a?.[sorting.key];
        const y = b?.[sorting.key];

        if(!Number.isNaN(Number(x)) && !Number.isNaN(Number(y))) return Number(x) - Number(y);
        if(typeof x === "string" && typeof y === "string") return x.localeCompare(y);
        return x - y;
    }

    useEffect(() => {
        const newArray = [...sortedData];
        let sorted = newArray.sort(sort);
        sorted = sorting.sort === "desc" ? sorted.reverse() : sorted;

        setSortedData(sorted);
    }, [data, sorting]) 

    const renderColumns = (item: IColumnName, index) => 
        <button 
            className={
                classNames([
                    styles["list-header__item"], 
                    { [styles["right"]]: item.right },
                    { [styles["sorted"]]: item.key === sorting.key }
                ])}
            key={index}
            data-sort={"desc"}
            onClick={(e) => handleSort(e, item.key)}
        >
            {item.value} <div className={styles["sort"]}><SortArrowUp /> <SortArrowDown /></div>
        </button>

    return (
        <div ref={ref} style={style} className={classes}>
            <ul className={styles["list-header__items"]}>
                {columnNames.map(renderColumns)}
            </ul>
            {React.cloneElement(child as React.ReactElement<IListProps>, {
                data: sortedData, columnNames, columns
            }) }
        </div>
    );
};

export default React.forwardRef(ListHeader);
