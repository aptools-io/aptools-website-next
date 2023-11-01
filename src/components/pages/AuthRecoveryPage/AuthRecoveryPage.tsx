// React
import React from "react";

// Redux
import { IRootState } from "src/scripts/redux/store";
import { useSelector } from "react-redux";

// Public
import { AuthEmailConfirm, AuthRecovery } from "src/components/containers";

const AuthRecoveryPage: React.FC = () => {
    const { email } = useSelector((state: IRootState) => state.authConfirm);
    return <>{email?.length > 0 ? <AuthEmailConfirm forgot /> : <AuthRecovery />}</>;
};

export default AuthRecoveryPage;
