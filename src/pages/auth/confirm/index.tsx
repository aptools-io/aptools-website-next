// React
import React, { useEffect, useRef } from "react";
import { AuthSignUp } from "src/components/pages";

const Confirm = () => {
    return <AuthSignUp />;
};
export default Confirm;

export async function getServerSideProps(context) {
    return {
        props: {}
    };
}
