// React
import React, { useEffect } from "react";


// Components;
import { BlocksPage } from "src/components/pages";

// Redux
import { useDispatch } from "react-redux";
import { setPageTitle } from "src/scripts/redux/slices/pageTitleSlice";
import { setBlocks } from "src/scripts/redux/slices/blocksSlice";

// API
import { blockchain, blocks } from "src/scripts/api/requests";
import { setBlockchain } from "src/scripts/redux/slices/blockchainSlice";

const Blocks = (data: IApiProps) => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setPageTitle("Latest Blocks"));
        dispatch(setBlockchain(data.blockchain));
        dispatch(setBlocks(data.blocks));
    }, []);

    return <BlocksPage />;
};
export default Blocks;

export async function getServerSideProps(context) {
    const { req } = context;
    const blockchainData = await blockchain.getMainData() || {};

    if(!blockchainData) return {
        notFound: true
    };

    const { block_height } = blockchainData as IApiBlockchainMainData;

    const promises = Array.from({length: 25}, (_, i) => Number(block_height) - i)?.map(element => blocks.getBlockByHeightData(element)) || [];
    const blocksData = await Promise.all(promises);

    return { props: { 
        headers: req.headers,
        blockchain: blockchainData,
        blocks: blocksData
    } };
}
