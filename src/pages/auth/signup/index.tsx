// React
import React, { useEffect, useRef } from "react";
import { AuthSignUp } from "src/components/pages";

const SignUp = () => {
    return <AuthSignUp />;
};
export default SignUp;

export async function getServerSideProps(context) {
    return {
        props: {}
    };
}
