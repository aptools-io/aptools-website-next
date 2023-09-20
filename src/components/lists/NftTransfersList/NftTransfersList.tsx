// React
import React, { useState } from "react";
import { ListHeader, List, Paginator, Skeleton } from "src/components/ui";
import { shortenHashString } from "src/scripts/util/strings";
import useWindowSize from "src/scripts/hooks/useWindowSize";
import { useDispatch, useSelector } from "react-redux";
import { IRootState } from "src/scripts/redux/store";

// Options
import { useRouter } from "next/router";
import { nfts } from "src/scripts/api/requests";
import { setNftsCollectionTransfers } from "src/scripts/redux/slices/nftsSlice";
import { columnNames, columns } from "./data/listOptions";
import media from "./data/adaptive";

const NftTransfersList: React.FC<IComponent> = () => {
    const router = useRouter();
    const dispatch = useDispatch();
    const { id, name } = router?.query || {};
    const { nftsCollectionTransfers, nftsCollectionGeneralInfo, nftsLoading } =
        useSelector((state: IRootState) => state.nfts);

    const { width } = useWindowSize();
    const mediaData = media(width);

    const [loading, setLoading] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    const [perPage, setPerPage] = useState(10);

    if (nftsLoading) return <Skeleton style={{ height: 460 }} />;

    if (!width) return <></>;

    const handleChangePage = (page) => {
        setLoading(1);
        nfts.getNftsCollectionTransfersData(
            page,
            perPage,
            id as string,
            name as string
        ).then((e: unknown) => {
            setCurrentPage(page);
            const result = e as IApiNftCollectionTransfer[];
            dispatch(setNftsCollectionTransfers(result));
            setLoading(0);
        });
    };

    const handleChangePerPage = (perPage) => {
        setPerPage(perPage);
        setCurrentPage(1);
        setLoading(1);
        nfts.getNftsCollectionTransfersData(
            currentPage,
            perPage,
            id as string,
            name as string
        ).then((e: unknown) => {
            const result = e as IApiNftCollectionTransfer[];
            dispatch(setNftsCollectionTransfers(result));
            setLoading(0);
        });
    };

    return (
        <Paginator
            paginatorName={"nftTransfersList"}
            page={currentPage}
            perPage={perPage}
            key={`${nftsCollectionTransfers?.[0]?.version}+${nftsCollectionTransfers?.length}`}
            changePerPage
            total={nftsCollectionGeneralInfo?.transfers}
            setPerPage={setPerPage}
            onChangePage={handleChangePage}
            onChangePerPage={handleChangePerPage}>
            <ListHeader
                columnNames={columnNames}
                columns={columns}
                data={nftsCollectionTransfers}>
                <List loadingCount={loading * perPage} adoptMobile />
            </ListHeader>
        </Paginator>
    );
};

export default NftTransfersList;
