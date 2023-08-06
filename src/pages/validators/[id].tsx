// React
import React, { useEffect, useRef } from "react";

// Redux
import { useDispatch } from "react-redux";
import { setHeaders } from "src/scripts/redux/slices/headersSlice";
import { setPageTitle } from "src/scripts/redux/slices/pageTitleSlice";

// Components
import { ValidatorsSinglePage } from "src/components/pages";

// API


const ValidatorsId = (data: IApiProps) => {
    const dispatch = useDispatch();
 
    useEffect(() => {
        dispatch(setHeaders(data.headers) || null);
        dispatch(setPageTitle("Validator"));
    }, [data, dispatch]);

    return <ValidatorsSinglePage />;
}; 
export default ValidatorsId;

export async function getServerSideProps(context) {
    const { req, query } = context;

    return { props: {
        "headers": req.headers,
    } };
}
