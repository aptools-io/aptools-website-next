// React
import React from "react";


const Dex = (data: IApiProps) => {

    return <></>;
}; 
export default Dex;

export async function getServerSideProps(context) {
    return {
        redirect: {
            destination: "/",
            permanent: false,
        },
    };
}
