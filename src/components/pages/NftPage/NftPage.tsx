// React
import React, { useState } from "react";
import { Grid, GridWrapper, Topper } from "src/components/general";
import { Paginator, Plug, Skeleton } from "src/components/ui";
import useWindowSize from "src/scripts/hooks/useWindowSize";
import styles from "./NftPage.module.scss";
import NftElement from "../../ui/NftElement/NftElement";
import media from "./data/adaptive";
import { useDispatch, useSelector } from "react-redux";
import { IRootState } from "src/scripts/redux/store";
import { nfts } from "src/scripts/api/requests";
import { setNftsCollectionList, setNftsCollectionListInventories } from "src/scripts/redux/slices/nftsSlice";
import classNames from "classnames";

const NftPage: React.FC = () => {
    const { width } = useWindowSize();
    const mediaData = media(width);
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(0);

    const { nftsCollectionList, nftsCollectionListInventories: inventoryList } = useSelector((state: IRootState) => state.nfts);
    const { list, total } = nftsCollectionList || {};
  

    const [currentPage, setCurrrentPage] = useState(1);
    const [perPage, setPerPage] = useState(10);


    if(!list?.length || !inventoryList.length) return <Plug noData />;

    const renderList = (nft: IApiNftCollection, index: number) => {
        const { list } = inventoryList?.[index] || {};
        const { name, transfers, creator_address } = nft || {};
        return (
            <div key={(index + 1) + (perPage * currentPage)} className={styles["nft__block"]}>
                <NftElement
                    id={(index + 1) + (perPage * (currentPage - 1))}
                    nftImage={list?.[0]?.uri}
                    title={name}
                    floor={"2.30 APT"}
                    transfers={transfers}
                    creator={creator_address}
                />
            </div>
        );
    }

    const handleChangePage = async (page) => {
        setCurrrentPage(page);
        setLoading(1);
        nfts.getNftsCollectionListData(page - 1, perPage).then((e: unknown) => {
            const result = e as IApiNftCollectionList
            dispatch(setNftsCollectionList(result));

            const { list } = result || {};
            const promises = list?.map(element => nfts.getNftsCollectionInventoryData(0, 1, element?.creator_address, element?.name)) || [];
            Promise.all(promises).then((e: unknown) => {
                const result = e as IApiNftCollectionInventories[]
                dispatch(setNftsCollectionListInventories(result));
                setLoading(0);
            })
        });
    }

    const handleChangePerPage = (perPage) => {
        setPerPage(perPage);
        setLoading(1);
        nfts.getNftsCollectionListData(0, perPage).then((e: unknown) => {
            const result = e as IApiNftCollectionList
            dispatch(setNftsCollectionList(result));

            const { list } = result || {};
            const promises = list?.map(element => nfts.getNftsCollectionInventoryData(0, 1, element?.creator_address, element?.name)) || [];
            Promise.all(promises).then((e: unknown) => {
                const result = e as IApiNftCollectionInventories[]
                dispatch(setNftsCollectionListInventories(result));
                setLoading(0);
            })
        });
    }

    const renderSkeleton = (item, index) => (
        <div key={index} className={classNames([styles["nft__block"], styles["paddings"]])}>
            <Skeleton style={{ minHeight: 100, height: 100 }} />
        </div>
    )

    return (
        <>
            <Topper backlink={"/"} />
            <Paginator
                page={currentPage}
                perPage={perPage}
                changePerPage
                total={total}
                setPerPage={setPerPage}
                onChangePage={handleChangePage}
                onChangePerPage={handleChangePerPage}
            >
                <Grid key={perPage} columns={mediaData.moneyFlowWrapper} gap={0}>
                    <GridWrapper gridWidth={1}>
                        {!loading ? 
                            list
                                .filter((item, outerIndex) => outerIndex % 2 !== 1)
                                .map((item, index) => renderList(item, index * 2)) :
                            Array.from({length: Math.ceil(perPage / 2)}).map(renderSkeleton)
                        }
                    </GridWrapper>
                    <GridWrapper gridWidth={1}>
                        {!loading ?
                            list
                                .filter((item, outerIndex) => outerIndex % 2 === 1)
                                .map((item, index) => renderList(item, ((index + 1) * 2) - 1)) :
                            Array.from({length: Math.floor(perPage / 2)}).map(renderSkeleton)
                        }
                    </GridWrapper>
                </Grid>
            </Paginator>
        </>
    );
};

export default NftPage;
