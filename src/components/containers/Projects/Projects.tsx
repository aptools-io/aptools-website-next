// React
import React, { useState } from "react";

// Redux
import { useSelector } from "react-redux";
import { IRootState } from "src/scripts/redux/store";

// Styles
import classNames from "classnames";
import { Plug, Skeleton, Tabs } from "src/components/ui";
import useWindowSize from "src/scripts/hooks/useWindowSize";
import styles from "./Projects.module.scss";

// Components
import ProjectsList from "../ProjectsList/ProjectsList";
import media from "./data/adaptive";

const Projects: React.FC<
    { all?: boolean; queryTab?: boolean } & IComponent
> = ({ all = false, queryTab = false, className }) => {
    const { data: projects = null } = useSelector(
        (state: IRootState) => state.statsProjects
    );
    const [currentTab, setCurrentTab] = useState(0);
    const { width } = useWindowSize();
    const mediaData = media(width);

    const classes = classNames([styles.projects, className]);

    if (!projects || !Object.keys(projects)?.length)
        return (
            <div className={classes}>
                <Skeleton />
            </div>
        );

    return (
        <div className={classes}>
            <Tabs
                queryTab={queryTab}
                data={projects}
                onChangeTab={setCurrentTab}>
                <ProjectsList
                    all={all}
                    mediaData={mediaData}
                    tabId={currentTab}
                />
            </Tabs>
        </div>
    );
};

export default Projects;
