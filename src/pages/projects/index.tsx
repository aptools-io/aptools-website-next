// React
import React, { useEffect } from "react";

// Redux
import { useDispatch } from "react-redux";
import { setProjectStatsData } from "src/scripts/redux/slices/statsProjectsSlice";
import { setHeaders } from "src/scripts/redux/slices/headersSlice";
import { setPageTitle } from "src/scripts/redux/slices/pageTitleSlice";

// Components
import { ProjectsPage } from "src/components/pages";

// API
import { projects } from "src/scripts/api/requests";

// Scripts
import filtrateProjects from "src/scripts/util/filtrateProjects";
import categories from "src/scripts/consts/categories";

const Ecosystem = (data: IApiProps) => {
    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(setHeaders(data.headers) || null);
        dispatch(setProjectStatsData(data.projects || null));
        dispatch(setPageTitle("Projects on the Aptos Blockchain"));
    }, [data, dispatch]);

    return <ProjectsPage />;
}; 
export default Ecosystem;

export async function getServerSideProps(context) {
    const projectsUnfiltered = await projects.getData() || []; 

    const { req } = context;
    return { props: {
        "headers": req.headers,
        "projects": filtrateProjects(projectsUnfiltered, categories) || [],
    } };
}
