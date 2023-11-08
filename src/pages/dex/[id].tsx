// React
import React, { useEffect, useRef } from "react";

// Redux
import { useDispatch } from "react-redux";
import { setSingleDex } from "src/scripts/redux/slices/singleDexSlice";
import { setHeaders } from "src/scripts/redux/slices/headersSlice";
import { setPageTitle, setPageType } from "src/scripts/redux/slices/pageTitleSlice";

// Components
import { DexSinglePage } from "src/components/pages";

// API
import { dexSingle } from "src/scripts/api/requests";

const DexId = (data: IApiProps) => {
    const dispatch = useDispatch();
    useEffect(() => {
        const title = data.dex_single?.name;
        dispatch(setHeaders(data.headers) || null);
        dispatch(setSingleDex(data.dex_single) || null);
        dispatch(setPageTitle(title ? `${title} – Dex Analytics` : ""));
        /* dispatch(setPageType("DEX")); */
    }, [data, dispatch]);

    return <DexSinglePage />;
};
export default DexId;

export async function getServerSideProps(context) {
    const { req, query } = context;
    const { id } = query || {};

    const dex = await dexSingle.getData(id.replaceAll(" ", "-"));

    if (!dex)
        return {
            notFound: true
        };

    return {
        props: {
            headers: req.headers,
            dex_single: dex
        }
    };
}
