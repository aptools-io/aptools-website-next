// React
import React, { useEffect } from "react";

// Redux
import { useDispatch } from "react-redux";
import { setOtherProjectsData, setProjectData, setProjectStatsData } from "src/scripts/redux/slices/statsProjectsSlice";
import { setHeaders } from "src/scripts/redux/slices/headersSlice";
import { setPageTitle } from "src/scripts/redux/slices/pageTitleSlice";

// Components
import { ProjectsSinglePage } from "src/components/pages";

// API
import { projects } from "src/scripts/api/requests";

// Scripts
import filtrateProjects from "src/scripts/util/filtrateProjects";
import categories from "src/scripts/consts/categories";
import getGeneralRequests from "src/scripts/api/generalRequests";

const EcosystemId = (data: IApiProps) => {
    const dispatch = useDispatch();

    useEffect(() => {
        const { name } = data?.project || {};
        dispatch(setHeaders(data.headers) || null);
        dispatch(setPageTitle(name));
        dispatch(setProjectData(data.project));
        dispatch(setOtherProjectsData(data.other_projects));
    }, [data, dispatch]);

    return <ProjectsSinglePage />;
};
export default EcosystemId;

export async function getServerSideProps(context) {
    const { req, query } = context;
    const { id } = query || {};

    const projectsUnfiltered = (await projects.getData()) || [];
    const projectId = projectsUnfiltered.findIndex((x) => x.name === id);

    const project = projectsUnfiltered[projectId];
    const otherProjects = (filtrateProjects(projectsUnfiltered, null, project.category, true) as []) || [];
    const splicedProjects = [...otherProjects];
    splicedProjects.splice(projectId, 1);

    return {
        props: {
            general: await getGeneralRequests(context),
            spaceBetween: true,
            headers: req.headers,
            project,
            other_projects: splicedProjects
        }
    };
}
