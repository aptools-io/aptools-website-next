// React
import React from "react";

// Components
import { ErrorPlug } from "src/components/containers";

// Enums
import { EStatusCode } from "src/types/common/statusCode";

const ClientSideErrorPage: React.FC = () => {

    return (
        <>
            <ErrorPlug errorType={EStatusCode.ClientSide} />
        </>
    );
};


export default ClientSideErrorPage;
