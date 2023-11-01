// React
import React, { useState } from "react";

// Redux
import { IRootState } from "src/scripts/redux/store";
import { useSelector } from "react-redux";

// Public
import { AuthRegisterPassword } from "src/components/containers";

const AuthConfirmPage: React.FC<{ forgot?: boolean }> = ({ forgot = false }) => {
    return (
        <>
            <AuthRegisterPassword forgot={forgot} />
        </>
    );
};

export default AuthConfirmPage;
