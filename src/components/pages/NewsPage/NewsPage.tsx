// React
import React from "react";

// Components
import { Projects } from "src/components/containers";
import { Grid, GridWrapper, Topper } from "src/components/general";
import { CategoryTitle } from "src/components/ui";

const NewsPage: React.FC = () => {

    return (
        <>
            <Topper backlink={"/"} />
            <Grid>
                <GridWrapper>
                    <CategoryTitle title={"In trends"} />
                    {/* <TrendsNews /> */}
                    <CategoryTitle title={"Last News"} />
                    {/* <News /> */}
                </GridWrapper>
            </Grid> 
        </>
    );
};


export default NewsPage;
