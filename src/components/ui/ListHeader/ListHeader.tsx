// React
import React, { Children, useState, useEffect }  from "react";

// Styles
import classNames from "classnames";

// Components
import { SortArrowDown, SortArrowUp } from "src/components/svg";
import styles from "./ListHeader.module.scss";

const ListHeader: React.ForwardRefRenderFunction<any, IListHeaderProps> = ({
    columnNames = [],
    columns = ["100%"],
    data = [],
    children,
    className 
}, ref) => {
    const child: any = Children.only(children);
    const defaultSortIndex = columnNames?.findIndex(x => x.defaultSort);
    const defaultSortType = columnNames?.[defaultSortIndex]?.defaultSortType || "desc";

    const [sorting, setSorting] = useState({
        "key": defaultSortIndex > -1 ? columnNames?.[defaultSortIndex]?.key : columnNames?.[0]?.key,
        "sort": defaultSortType
    });
    const [sortedData, setSortedData] = useState(data.length ? data.map((item, index) => { 
        if(typeof item === "object" && !Array.isArray(item))  return { ...item, "_id": index };
        return item;
    }) : []);
    
    const classes = classNames([
        styles["list-header"],
        className
    ]);

    const style = {
        "--list-columns": columns.join(" ")
    } as React.CSSProperties;

    
    const handleSort = (e, key: string) => {
        const button = e.currentTarget;
        const sortType = button.dataset.sort === "desc" ? "asc" : "desc";
        button.dataset.sort = sortType;

        setSorting({
            "key": key,
            "sort": sortType
        });
    };

    const sort = (a, b) => {
        const x = a?.[sorting.key];
        const y = b?.[sorting.key];

        if(!Number.isNaN(Number(x)) && !Number.isNaN(Number(y))) return Number(x) - Number(y);
        if(typeof x === "string" && typeof y === "string") return x.localeCompare(y);
        return x - y;
    };

    useEffect(() => {
        const newArray = [...sortedData];
        let sorted = newArray.sort(sort)
        sorted = sorting.sort === "desc" ? sorted.reverse() : sorted;

        setSortedData([...sorted.map((x: any) => { return { ...x, "_sort": sorting.sort, "_count": sorted?.length || 0 } })]);
    }, [data, sorting]); 

    const renderColumns = (item: IColumnName, index) => {
        if(item.headRemove) return <></>;
        return (
            <>
                {item.headHideMobile && 
                    <div className={classNames([
                        styles["list-header__item"], 
                        styles["hide-mobile"]
                    ])}/>
                }
                <button 
                    className={
                        classNames([
                            styles["list-header__item"], 
                            { [styles["right"]]: item.right },
                            { [styles["sorted"]]: item.key === sorting.key }
                        ])}
                    key={index}
                    data-sort={defaultSortType}
                    onClick={(e) => handleSort(e, item.key)}
                >
                    {item.value} <div className={styles["sort"]}><SortArrowUp /> <SortArrowDown /></div>
                </button>
            </>
        );
    };
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
