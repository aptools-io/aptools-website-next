// React
import React from "react";
import { OtherProjects, StatsProject } from "src/components/containers";

// Components
import { Grid, GridWrapper, Topper } from "src/components/general";

const ProjectsSinglePage: React.FC = () => {
    return (
        <>
            <Grid>
                <GridWrapper>
                    <Topper backlink={"/projects"} />
                    <StatsProject />
                </GridWrapper>
            </Grid>
            <Grid>
                <GridWrapper>
                    <OtherProjects />
                </GridWrapper>
            </Grid>
            {/* <Projects all /> */}
        </>
    );
};

export default ProjectsSinglePage;
