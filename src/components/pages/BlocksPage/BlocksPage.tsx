// React
import React from "react";
import { Grid, GridWrapper, Topper } from "src/components/general";
import { BlocksList } from "src/components/lists";

const BlocksPage: React.FC = () => {

    return (
        <>
            <Topper backlink={"/"} />
            <Grid>
                <GridWrapper>
                    <BlocksList />
                </GridWrapper>
            </Grid>
        </>
    );
};


export default BlocksPage;
