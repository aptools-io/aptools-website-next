// React
import React from "react";

// Redux
import { useSelector } from "react-redux";
import { IRootState } from "src/scripts/redux/store";

// Styles
import styles from "./Projects.module.scss";
import classNames from "classnames";
import { Tabs } from "src/components/ui";

// Components
import ProjectsList from "../ProjectsList/ProjectsList";



const Projects: React.FC<IComponent> = ({
    className 
}) => {
    const { data: projects } = useSelector((state: IRootState) => state.statsProjects);

    const classes = classNames([
        styles["projects"],
        className
    ]);

    if(!projects) return <></>

    return (
        <div className={classes}>
            <Tabs data={projects}>
                <ProjectsList />
            </Tabs>
        </div>
    );
};

export default Projects;
