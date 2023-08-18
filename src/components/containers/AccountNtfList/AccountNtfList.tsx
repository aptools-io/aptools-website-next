// React
import React, { useEffect, useState } from "react";

// Redux
import { useDispatch, useSelector } from "react-redux";
import { IRootState } from "src/scripts/redux/store";

// Components
import { AccountPerformance, AccountTokenStats } from "src/components/charts";
import { Grid, GridWrapper } from "src/components/general";

// Styles
import classNames from "classnames";
import { Button, Img, Paginator, Plug, Skeleton, TextInput } from "src/components/ui";
import { percentClass } from "src/scripts/util/classes";
import { formatNumber } from "src/scripts/util/numbers";
import { concatString } from "src/scripts/util/strings";
import { Magnifier } from "src/components/svg";
import { accounts } from "src/scripts/api/requests";
import { setAccountNftsCollectionsData } from "src/scripts/redux/slices/accountsSlice";
import { useRouter } from "next/router";
import AccountNtfFolder from "../AccountNtfFolder/AccountNtfFolder";
import styles from "./AccountNtfList.module.scss";

const AccountNtfList: React.FC<IComponent> = ({
    className 
}) => {
    const { accountNftsCollections, accountsLoading: loading = false } = useSelector((state: IRootState) => state.accounts);
    const { collections = [], total } = accountNftsCollections || {};

    const [filteredNfts, setFilteredNtfs] = useState(collections);
    const [searchQuery, setSearchQuery] = useState("");
    const [currentPage, setCurrrentPage] = useState(1);
    const [perPage, setPerPage] = useState(5);

    const dispatch = useDispatch();
    const router = useRouter();
    const { id } = router.query;

    const classes = classNames([
        styles["account-nft-list"],
        className
    ]);
    
    useEffect(() => {
        if(collections?.length) setFilteredNtfs(collections.filter(x => {
            if(searchQuery === "") return collections;
            return x.name.toLowerCase().indexOf(searchQuery.toLowerCase()) !== -1;
        }));
    }, [searchQuery, collections]);

    if(loading) return <Skeleton style={{ height: 360 }} />;

    if(!collections?.length) return <Plug noData />;


    const handleInputChange = (e) => {
        setSearchQuery(e.currentTarget.value);
    };

    const handleLoadMore = async () => {
        setCurrrentPage((page) => page + 1);
        await accounts.getAccountNftCollectionsData(id, perPage, currentPage + 1).then((e: unknown) => {
            const result = e as IApiAccountNftCollections;
            dispatch(setAccountNftsCollectionsData({ ...result, collections: [...collections || [], ...result?.collections || []] }));
        });
    };

    return (
        <div className={classes}>
            <div className={styles["account-nft-list__search"]}>
                <TextInput value={searchQuery} onChange={handleInputChange} searchIcon />
            </div>
            {filteredNfts && 
                <div className={styles["account-nft-list__inner"]}>
                	{/* <Paginator
                        page={currentPage} 
                        perPage={perPage} 
                        changePerPage
                        total={total} 
                        setPerPage={setPerPage}
                        onChangePage={async (page) => {
                            setCurrrentPage(page);
                            await accounts.getAccountNftCollectionsData(id, perPage, page).then((e: unknown) => {
                                const result = e as IApiAccountNftCollections;
                                dispatch(setAccountNftsCollectionsData(result));
                            });
                        }}
                        onChangePerPage={async (perPage) => {
                            setPerPage(perPage);
                            await accounts.getAccountNftCollectionsData(id, perPage, currentPage).then((e: unknown) => {
                                const result = e as IApiAccountNftCollections;
                                dispatch(setAccountNftsCollectionsData(result));
                            });
                        }}
                    > */}
                	<ul className={styles["account-nft-list__folders"]}>
                		{filteredNfts.map((item, index) => <AccountNtfFolder index={index} key={index} item={item} />)}
                	</ul>
                	{/* </Paginator> */}
                	<Button
                		disabled={!(filteredNfts?.length < total) || !!searchQuery} 
                		invert 
                		className={styles["account-nft-list__load-more"]} 
                		onClick={handleLoadMore}
                	>
                        Load more
                	</Button>
                </div>
            }
        </div>
    );
};

export default AccountNtfList;
