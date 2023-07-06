// React
import React from "react";

// Redux
import { useSelector } from "react-redux";
import { IRootState } from "src/scripts/redux/store";

// Styles
import classNames from "classnames";
import { Tabs } from "src/components/ui";
import styles from "./Projects.module.scss";

// Components
import ProjectsList from "../ProjectsList/ProjectsList";


const News: React.FC<IComponent> = ({
    className 
}) => {
    const { data: projects } = useSelector((state: IRootState) => state.statsProjects);

    const classes = classNames([
        styles["projects"],
        className
    ]);

    if(!projects) return <></>;

    return (
        <div className={classes}>
            <Tabs data={projects}>
                test
            </Tabs>
        </div>
    );
};

export default News;
