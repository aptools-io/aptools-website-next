// React
import React, { useEffect, useState } from "react";

// Next
import { useRouter } from "next/router";

// Redux
import { useSelector } from "react-redux";
import { IRootState } from "src/scripts/redux/store";

// Styles
import classNames from "classnames";
import { List, ListHeader, Paginator } from "src/components/ui";
import { perPages, defaultPerPage } from "src/scripts/consts/perPages";
import styles from "./DexPairsList.module.scss";


// Options
import { columnNames, columnNamesType, columns, columnsType } from "./data/listOptions";

// Consts


const DexPairsList: React.FC<IComponent> = ({
    className 
}) => {
    const { data: singleDexData } = useSelector((state: IRootState) => state.singleDex);
    const { coin_pairs = [] } = singleDexData || {};
    const router = useRouter();
    const { pairs = perPages[2], page = 1 } = router.query;

    const hardSorting = useState<{ key: string; sort: string }>({ key: "volume_24h", sort: "desc" });
    const [perPage, setPerPage] = useState(perPages.findIndex(x => x === Number(pairs)) !== -1 ? Number(pairs) : defaultPerPage);
    const [currentPage, setCurrentPage] = useState(Number(page) || 1);

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
            <Paginator 
                changePerPage
                perPageKey={"pairs"}
                pageKey={"page"}
                key={singleDexData?.name} 
                page={currentPage} 
                perPage={perPage} 
                setPerPage={setPerPage} 
                total={coin_pairs.length} 
                onChangePage={(page) => {
                    setCurrentPage(page);
                }}
            >
                <ListHeader 
                    columnNames={singleDexData?.name === "Tsunami" ? columnNamesType : columnNames} 
                    columns={singleDexData?.name === "Tsunami" ? columnsType : columns} 
                    data={coin_pairs}
                    hardSorting={hardSorting}
                >
                    <List adoptMobile slice={[(currentPage - 1) * perPage, currentPage * perPage]} />
                </ListHeader>
            </Paginator>
        </div>
    );
};

export default DexPairsList;
