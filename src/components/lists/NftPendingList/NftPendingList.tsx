// React
import React, { useState } from "react";
import { ListHeader, List , Paginator, Plug, Skeleton } from "src/components/ui";
import { shortenHashString } from "src/scripts/util/strings";
import useWindowSize from "src/scripts/hooks/useWindowSize";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { IRootState } from "src/scripts/redux/store";
import { nfts } from "src/scripts/api/requests";
import { setNftsCollectionPendingClaims } from "src/scripts/redux/slices/nftsSlice";
import { columnNames, columns } from "./data/listOptions";
import media from "./data/adaptive";

const NftPendingList: React.FC<IComponent> = () => {
    const router = useRouter();
    const dispatch = useDispatch();
    const { id, name } = router?.query || {};
    const { nftsCollectionPendingClaims, nftsLoading } = useSelector((state: IRootState) => state.nfts);
    const { total, list } = nftsCollectionPendingClaims || {};

    const { width } = useWindowSize();
    const mediaData = media(width);

    const [loading, setLoading] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    const [perPage, setPerPage] = useState(10);

    if(nftsLoading) return <Skeleton style={{ height: 460 }} />;

    if (!width) return <></>;

    if (!list) return <Plug noData />;

    const handleChangePage = (page) => {
        setLoading(1);
        nfts.getNftsCollectionPendingClaimsData(page, perPage, id as string, name as string).then((e: unknown) => {
            setCurrentPage(page);
            const result = e as IApiNftCollectionPendingClaims;
            dispatch(setNftsCollectionPendingClaims(result));
            setLoading(0);
        });
    };

    const handleChangePerPage = (perPage) => {
        setPerPage(perPage);
        setCurrentPage(1);
        setLoading(1);
        nfts.getNftsCollectionPendingClaimsData(currentPage, perPage, id as string, name as string).then((e: unknown) => {
            const result = e as IApiNftCollectionPendingClaims;
            dispatch(setNftsCollectionPendingClaims(result));
            setLoading(0);
        });
    };

    return (
        <Paginator
            key={`${list?.[0]?.version}+${list?.length}`} 
            page={currentPage}
            perPage={perPage}
            changePerPage
            total={total}
            setPerPage={setPerPage}
            onChangePage={handleChangePage}
            onChangePerPage={handleChangePerPage}
        >
            <ListHeader
                columnNames={columnNames}
                columns={columns}
                data={list}
            >
                <List loadingCount={loading * perPage} adoptMobile />
            </ListHeader>
        </Paginator>
    );
};

export default NftPendingList;
