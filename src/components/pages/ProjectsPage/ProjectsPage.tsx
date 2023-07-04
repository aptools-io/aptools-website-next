// React
import React from "react";

// Components
import { Projects } from "src/components/containers";
import { Topper } from "src/components/general";

const ProjectsPage: React.FC = () => {

    return (
        <>
            <Topper backlink={"/"} />
            <Projects all />
        </>
    );
};


export default ProjectsPage;
