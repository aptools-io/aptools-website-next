// React
import React from "react";

// Redux
import { IRootState } from "src/scripts/redux/store";
import { useSelector } from "react-redux";

// Public
import { AuthSignIn } from "src/components/containers";

const AuthSignInPage: React.FC = () => {
    return <AuthSignIn />;
};

export default AuthSignInPage;
