// React
import { useRouter } from "next/router";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ListHeader, List , Paginator, Plug, Skeleton } from "src/components/ui";
import { nfts } from "src/scripts/api/requests";
import useWindowSize from "src/scripts/hooks/useWindowSize";
import { setNftsCollectionHolders } from "src/scripts/redux/slices/nftsSlice";
import { IRootState } from "src/scripts/redux/store";
import media2 from "./data/adaptiveTable";


const NftHoldersList: React.FC<IComponent> = () => {
    const router = useRouter();
    const dispatch = useDispatch();
    const { id, name } = router?.query || {};
    const { nftsCollectionHolders, nftsCollectionGeneralInfo, nftsLoading } = useSelector((state: IRootState) => state.nfts);

    const { width } = useWindowSize();
    const { columnNames = null, columns = null } = media2(width) || {};

    const [loading, setLoading] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    const [perPage, setPerPage] = useState(10);

    if(nftsLoading) return <Skeleton style={{ height: 460 }} />;

    if (!width) return <></>;

    if(!nftsCollectionHolders?.length) return <Plug noData />;

    const handleChangePage = (page) => {
        setLoading(1);
        nfts.getNftsCollectionHoldersData(page, perPage, id as string, name as string).then((e: unknown) => {
            setCurrentPage(page);
            const result = e as IApiNftCollectionHolder[];
            dispatch(setNftsCollectionHolders(result));
            setLoading(0);
        });
    };

    const handleChangePerPage = (perPage) => {
        setPerPage(perPage);
        setCurrentPage(1);
        setLoading(1);
        nfts.getNftsCollectionHoldersData(currentPage, perPage, id as string, name as string).then((e: unknown) => {
            const result = e as IApiNftCollectionHolder[];
            dispatch(setNftsCollectionHolders(result));
            setLoading(0);
        });
    };

    return (
        <Paginator
            key={`${nftsCollectionHolders?.[0]?.owner}+${nftsCollectionHolders?.length}`} 
            page={currentPage}
            perPage={perPage}
            changePerPage
            total={nftsCollectionGeneralInfo?.holders}
            setPerPage={setPerPage}
            onChangePage={handleChangePage}
            onChangePerPage={handleChangePerPage}
        >
            <ListHeader 
                columnNames={columnNames} 
                columns={columns} 
                data={nftsCollectionHolders}
            >
                <List loadingCount={loading * perPage} />
            </ListHeader>
        </Paginator>
    );
};

export default NftHoldersList;
