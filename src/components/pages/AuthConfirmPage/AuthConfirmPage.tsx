// React
import React, { useState } from "react";

// Redux
import { IRootState } from "src/scripts/redux/store";
import { useSelector } from "react-redux";

// Public
import { AuthRegisterPassword } from "src/components/containers";

const AuthConfirmPage: React.FC = () => {
    return (
        <>
            <AuthRegisterPassword />
        </>
    );
};

export default AuthConfirmPage;
