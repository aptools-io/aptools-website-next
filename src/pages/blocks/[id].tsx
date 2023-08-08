// React
import React, { useEffect, useRef } from "react";

// Redux
import { useDispatch } from "react-redux";

// Components

// API
import { dexSingle } from "src/scripts/api/requests";

const BlocksId = (data: IApiProps) => {
    const dispatch = useDispatch();
    return <></>;
}; 
export default BlocksId;

export async function getServerSideProps(context) {

    return { props: {
        
    } };
}
