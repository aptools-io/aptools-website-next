// React
import React from "react";

// Redux
import { useSelector } from "react-redux";
import { IRootState } from "src/scripts/redux/store";

// Styles
import classNames from "classnames";
import { ActiveLink, Img, Plug, Socials, Tabs } from "src/components/ui";
import useWindowSize from "src/scripts/hooks/useWindowSize";
import styles from "./OtherProjects.module.scss";

// Components
import ProjectsList from "../ProjectsList/ProjectsList";

// Data
import socialsImages from "../Projects/data/socials";

const OtherProjects: React.FC<IComponent> = ({
    className 
}) => {
    const { project } = useSelector((state: IRootState) => state.statsProjects);
    const { name, image, description, socials } = project || {};
    /* const { width } = useWindowSize();
    const mediaData = media(width); */

    const classes = classNames([
        styles["stats-project"],
        className
    ]);
  
    return (
        <div className={classes}>
            <strong>Other projects</strong>
        </div>
    );
};

export default OtherProjects;
