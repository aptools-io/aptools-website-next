// React
import React, { useEffect, useRef } from "react";
import { AuthEmailConfirm } from "src/components/pages";

const Confirm = () => {
    return <AuthEmailConfirm />;
};
export default Confirm;

export async function getServerSideProps(context) {
    return {
        props: {}
    };
}
