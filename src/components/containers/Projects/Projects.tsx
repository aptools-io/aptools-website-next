// React
import React from "react";

// Redux
import { useSelector } from "react-redux";
import { IRootState } from "src/scripts/redux/store";

// Styles
import classNames from "classnames";
import { Plug, Tabs } from "src/components/ui";
import useWindowSize from "src/scripts/hooks/useWindowSize";
import styles from "./Projects.module.scss";

// Components
import ProjectsList from "../ProjectsList/ProjectsList";
import media from "./data/adaptive";


const Projects: React.FC<{ all?: boolean } & IComponent> = ({
    all = false,
    className 
}) => {
    const { data: projects = null } = useSelector((state: IRootState) => state.statsProjects);
    const { width } = useWindowSize();
    const mediaData = media(width);

    const classes = classNames([
        styles["projects"],
        className
    ]);
    console.log(projects);

    if(!projects || !Object.keys(projects)?.length) return <div className={classes}><Plug noData /></div>;

    return (
        <div className={classes}>
            <Tabs data={projects}>
                <ProjectsList all={all} mediaData={mediaData} />
            </Tabs>
        </div>
    );
};

export default Projects;
