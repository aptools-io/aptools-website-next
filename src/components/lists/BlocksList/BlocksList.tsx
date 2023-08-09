// React
import React, { useState } from "react";

// Redux
import { useDispatch, useSelector } from "react-redux";
import { IRootState } from "src/scripts/redux/store";

// Styles
import classNames from "classnames";
import { List, ListHeader, Paginator, Plug } from "src/components/ui";
import { defaultPerPage, perPages } from "src/scripts/consts/perPages";
import { useRouter } from "next/router";
import styles from "./BlocksList.module.scss";

// Components

// Options
import { columnNames, columns } from "./data/listOptions";
import { blockchain, blocks } from "src/scripts/api/requests";
import { setBlocks } from "src/scripts/redux/slices/blocksSlice";
import { setBlockchain } from "src/scripts/redux/slices/blockchainSlice";

const BlocksList: React.FC<IComponent> = ({
    className 
}) => {
    const { blockchain: blockchainData } = useSelector((state: IRootState) => state.blockchain);
    const { blocks: blocksData } = useSelector((state: IRootState) => state.blocks);
    const [currentPage, setCurrentPage] = useState(1);
    const [perPage, setPerPage] = useState(10); 
    const [loading, setLoading] = useState(0);

    const dispatch = useDispatch();

    const { block_height } = blockchainData || {};
    

    const classes = classNames([
        styles["blocks-list"],
        "list",
        className
    ]);

    if(!blocksData || !block_height) return <Plug noData />;
   
    const handleData = (page: number, perPage: number) => {
        blockchain.getMainData().then((blockchain: unknown) => {
            const blockchainData = blockchain as IApiBlockchainMainData
            dispatch(setBlockchain(blockchainData));
            const { block_height } = blockchainData || {};

            const promises = Array.from({length: perPage}, (_, i) => Number(block_height) - (i + (page * perPage)))
                ?.filter(x => x >= 0)
                ?.map(element => blocks.getBlockByHeightData(element)) || [];

            Promise.all(promises).then((blocks: unknown) => {
                dispatch(setBlocks(blocks as IApiBlock[]));
                setLoading(0);
            }) ;
        })
    }

    return (
        <div className={classes}>
            <Paginator 
                changePerPage
                page={currentPage} 
                perPage={perPage} 
                setPerPage={setPerPage} 
                total={Number(block_height)} 
                onChangePage={async (page) => {
                    setCurrentPage(page);
                    setLoading(1);
                    handleData(page, perPage);
                }}
                onChangePerPage={(perPage) => {
                    setPerPage(perPage);
                    setLoading(1);
                    handleData(currentPage, perPage);
                }}
            >
                <ListHeader 
                    columnNames={columnNames} 
                    columns={columns} 
                    data={blocksData}
                    key={blocksData?.[0]?.block_height}
                >
                    <List adoptMobile loadingCount={loading * perPage} />
                </ListHeader>
            </Paginator>
            
            
        </div>
    );
};

export default BlocksList;
