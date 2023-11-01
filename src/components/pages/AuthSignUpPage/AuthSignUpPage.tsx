// React
import React, { useState } from "react";

// Redux
import { IRootState } from "src/scripts/redux/store";
import { useSelector } from "react-redux";

// Public
import { AuthEmailConfirm, AuthSignUp } from "src/components/containers";

const AuthSignUpPage: React.FC = () => {
    const { email, agreement } = useSelector((state: IRootState) => state.authConfirm);
    return <>{email?.length > 0 && agreement ? <AuthEmailConfirm /> : <AuthSignUp />}</>;
};

export default AuthSignUpPage;
