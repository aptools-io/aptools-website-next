// React
import React from "react";

// Components
import { ErrorPlug } from "src/components/containers";

// Enums
import { EStatusCode } from "src/types/common/statusCode";

const ServerErrorPage: React.FC = () => {

    return (
        <>
            <ErrorPlug errorType={EStatusCode.ServerError} />
        </>
    );
};


export default ServerErrorPage;
