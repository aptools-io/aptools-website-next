// React
import React, { useEffect, useState } from "react";

// Redux
import { useSelector } from "react-redux";
import { IRootState } from "src/scripts/redux/store";

// Styles
import classNames from "classnames";
import { List, ListHeader, Paginator, Skeleton, Tabs } from "src/components/ui";
import useWindowSize from "src/scripts/hooks/useWindowSize";

// Components

// Other
import { perPages, defaultPerPage } from "src/scripts/consts/perPages";
import { useRouter } from "next/router";
import { accounts } from "src/scripts/api/requests";
import media from "./data/adaptive";
import styles from "./AccountsList.module.scss";
// Options
/* import { columnNames, columns } from "./data/listOptionsDesktop"; */

const Accounts: React.FC<IComponent> = ({
    className 
}) => {
    const { accountsWallets } = useSelector((state: IRootState) => state.accounts);
    const { wallets } = accountsWallets || {};
    const { width } = useWindowSize();
    const { columnNames = null, columns = null } = media(width) || {};

    const router = useRouter();

    const [currentPage, setCurrrentPage] = useState(1);
    const [loading, setLoading] = useState(0);
    const { pairs = perPages[2], page = 1 } = router.query;
    const [perPage, setPerPage] = useState(perPages.findIndex(x => x === Number(pairs)) !== -1 ? Number(pairs) : defaultPerPage);
    const [accountsData, setAccountsData] = useState(wallets);

    const handleFetchData = async (page, customPerPage = null) => {
        const pPage = customPerPage || perPage;
        const data = await accounts.getAccountsData(pPage, pPage * (page - 1)).then(e => {
            setLoading(0);
            setCurrrentPage(page);
            return e;
        }) as IApiWallet[];
        setAccountsData([...data]);
    };

    /* useEffect(() => {
        handleFetchData(currentPage);
    }, [perPage]) */

    const classes = classNames([
        styles["accounts"],
        "list",
        className
    ]);

    if(!wallets || !columnNames || !columns || !width) return <></>;

    const slisedData = accountsData.slice(perPage * (currentPage - 1), perPage * currentPage);
    const { balance_rank: last_balance_rank = currentPage } = accountsData[accountsData.length - 1] || {};


    return (
        <div className={classes}>
            {/* <strong className={"list__title"}>
                <span>DEX Volume</span>
            </strong> */}
            <Paginator 
                page={currentPage} 
                perPage={perPage} 
                changePerPage
                total={100} 
                setPerPage={setPerPage}
                onChangePage={(page) => {
                    setCurrrentPage(page)
                }}
                onChangePerPage={(perPage) => {
                    setPerPage(perPage)
                }}
            >
                <ListHeader 
                    columnNames={columnNames} 
                    columns={columns} 
                    data={accountsData.slice(perPage * (currentPage - 1), perPage * currentPage)}
                    key={last_balance_rank * slisedData?.length}
                >
                    <List loadingCount={perPage * loading} loadingComponent={<Skeleton style={{ height: "20px", minHeight: "20px" }} />} />
                </ListHeader>
            </Paginator>
        </div>
    );
};

export default Accounts;
