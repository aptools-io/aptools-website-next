// React
import React, { useEffect, useRef } from "react";
import { AuthSignUpPage } from "src/components/pages";

const SignUp = () => {
    return <AuthSignUpPage />;
};
export default SignUp;

export async function getServerSideProps(context) {
    return {
        props: {}
    };
}
