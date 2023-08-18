// React
import React, { useEffect, useRef } from "react";

// Redux
import { useDispatch } from "react-redux";

// Components
import { BlocksSinglePage } from "src/components/pages";

// API
import { blocks } from "src/scripts/api/requests";
import { setBlock } from "src/scripts/redux/slices/blocksSlice";
import { setPageTitle } from "src/scripts/redux/slices/pageTitleSlice";

const BlocksId = (data: IApiProps) => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setPageTitle("Block"));
        dispatch(setBlock(data.block));
    }, []);
    return <BlocksSinglePage/>;
}; 
export default BlocksId;

export async function getServerSideProps(context) {
    const { req, query } = context;
    const { id } = query || {};

    const isHeight = !(id.indexOf("v-") > -1);

    const block = isHeight ? 
        await blocks.getBlockByHeightData(id, true) : 
        await blocks.getBlockByVersionData(id.slice(2), true);

    if(!block) return {
        notFound: true
    };

    return { props: {
        headers: req.headers,
        block
    } };
}
