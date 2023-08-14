// React
import React, { useState } from "react";
import { Grid } from "src/components/general";
import NftInventoryItem from "src/components/ui/NftInventoryItem/NftInventoryItem";
import useWindowSize from "src/scripts/hooks/useWindowSize";
import { Paginator, Plug, Skeleton } from "src/components/ui";
import { useDispatch, useSelector } from "react-redux";
import { IRootState } from "src/scripts/redux/store";
import { nfts } from "src/scripts/api/requests";
import { useRouter } from "next/router";
import { setNftsCollectionInventory } from "src/scripts/redux/slices/nftsSlice";
import media from "./data/adaptive";

const NftInventory: React.FC<IComponent> = () => {
    const router = useRouter();
    const dispatch = useDispatch();
    const { id, name } = router?.query || {};
    
    const { nftsCollectionListInventory, nftsLoading } = useSelector((state: IRootState) => state.nfts);
    const { list, total } = nftsCollectionListInventory || {};

    const { width } = useWindowSize();
    const mediaData = media(width);

    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [perPage, setPerPage] = useState(10);

    if(nftsLoading) return <Skeleton style={{ height: 460 }} />;

    if(!list?.length) return <Plug noData />;

    const handleChangePage = (page) => {
        setLoading(true);
        nfts.getNftsCollectionInventoryData(((page - 1) * perPage), perPage, id as string, name as string).then((e: unknown) => {
            setCurrentPage(page);
            const result = e as IApiNftCollectionInventories;
            dispatch(setNftsCollectionInventory(result));
            setLoading(false);
        });
    };

    const handleChangePerPage = (perPage) => {
        setPerPage(perPage);
        setCurrentPage(1);
        setLoading(true);
        nfts.getNftsCollectionPendingClaimsData(currentPage, perPage, id as string, name as string).then((e: unknown) => {
            const result = e as IApiNftCollectionInventories;
            dispatch(setNftsCollectionInventory(result));
            setLoading(false);
        });
    };


    return (
        <Paginator
            page={currentPage}
            perPage={perPage}
            changePerPage
            total={total}
            setPerPage={setPerPage}
            onChangePage={handleChangePage}
            onChangePerPage={handleChangePerPage}
        >
            <Grid gap={16} columns={mediaData.moneyFlowWrapper}>
                {!loading ? 
                    list.map((item, index) => <NftInventoryItem key={index} item={item} />) :
                    list.map((item, index) => <NftInventoryItem key={index} />)}
            </Grid>
        </Paginator>
    );
};

export default NftInventory;
