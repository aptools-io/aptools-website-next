// React
import React, { useState } from "react";

// Redux
import { useSelector } from "react-redux";
import { IRootState } from "src/scripts/redux/store";

// Styles
import classNames from "classnames";
import { List, ListHeader, Paginator } from "src/components/ui";
import styles from "./DexPairsList.module.scss";


// Options
import { columnNames, columns } from "./data/listOptions";

const DexPairsList: React.FC<IComponent> = ({
    className 
}) => {
    const { data: singleDexData } = useSelector((state: IRootState) => state.singleDex);
    const { coin_pairs = [] } = singleDexData || {};
    const hardSorting = useState<{ key: string; sort: string }>({ key: "volume_24h", sort: "desc" });
    const perPage = 10;
    const [currentPage, setCurrentPage] = useState(1);

    const classes = classNames([
        styles["dex-pairs"],
        "list",
        className
    ]);

    if(!singleDexData || !coin_pairs) return <></>;

    return (
        <div className={classes}>
            <strong className={"list__title"}>
                <span>Pairs</span>
            </strong>
            <Paginator page={currentPage} perPage={perPage} total={coin_pairs.length} onChangePage={(page) => {
                setCurrentPage(page);
            }}>
                <ListHeader 
                    columnNames={columnNames} 
                    columns={columns} 
                    hardSorting={hardSorting}
                    data={coin_pairs}
                >
                    <List adoptMobile slice={[(currentPage - 1) * perPage, currentPage * perPage]} />
                </ListHeader>
            </Paginator>
        </div>
    );
};

export default DexPairsList;
