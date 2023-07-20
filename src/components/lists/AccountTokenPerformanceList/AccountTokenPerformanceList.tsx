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
import styles from "./AccountTokenPerformanceList.module.scss";


// Options
import { columnNames, columns } from "./data/listOptions";

// Consts


const AccountTokenPerformanceList: React.FC<IComponent> = ({
    className 
}) => {
    const { accountProfitabilities } = useSelector((state: IRootState) => state.accounts);
    const { profitability = [] } = accountProfitabilities || {};
    const [perPage, setPerPage] = useState(25);
    const [currentPage, setCurrentPage] = useState(1);
   /*  const { coin_pairs = [] } = singleDexData || {};
    const router = useRouter();
    const { pairs = perPages[2], page = 1 } = router.query;

    const hardSorting = useState<{ key: string; sort: string }>({ key: "volume_24h", sort: "desc" });
    const [perPage, setPerPage] = useState(perPages.findIndex(x => x === Number(pairs)) !== -1 ? Number(pairs) : defaultPerPage);
    const [currentPage, setCurrentPage] = useState(Number(page) || 1); */

    const classes = classNames([
        styles["account-token-performance"],
        "list",
        className
    ]);

    if(!accountProfitabilities || !profitability) return <></>;

    return (
        <div className={classes}>
            <strong className={"list__title"}>
                <span>Tokens Trades PnL (Profit And Loss)</span>
            </strong>
            <Paginator 
                changePerPage
                perPageKey={"pairs"}
                pageKey={"page"}
                key={profitability?.length} 
                page={currentPage} 
                perPage={perPage} 
                setPerPage={setPerPage} 
                total={profitability?.length} 
                onChangePage={(page) => {
                    setCurrentPage(page);
                }}
            >
                <ListHeader 
                    columnNames={columnNames} 
                    columns={columns} 
                    data={profitability}
                    key={profitability?.length}
                >
                    <List adoptMobile />
                </ListHeader>
            </Paginator>
        </div>
    );
};

export default AccountTokenPerformanceList;
