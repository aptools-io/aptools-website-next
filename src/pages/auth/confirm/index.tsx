// React
import React, { useEffect, useRef } from "react";
import { AuthConfirmPage } from "src/components/pages";

const Confirm = () => {
    return <AuthConfirmPage />;
};
export default Confirm;

export async function getServerSideProps(context) {
    const { req, query } = context;
    const { id } = query || {};

    if (!id)
        return {
            notFound: true
        };

    return {
        props: {}
    };
}
