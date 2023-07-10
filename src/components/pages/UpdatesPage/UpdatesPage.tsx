// React
import React from "react";

// Components
import { News, NewsBanner, TrendsList } from "src/components/containers";
import { Grid, GridWrapper, Topper } from "src/components/general";
import { CategoryTitle } from "src/components/ui";

const UpdatesPage: React.FC = () => {

    return (
        <>
            <Topper backlink={"/news"} />
            <Grid>
                <GridWrapper>
                    <NewsBanner />
                    <News />
                </GridWrapper>
            </Grid> 
        </>
    );
};


export default UpdatesPage;
