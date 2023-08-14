// React
import React from "react";

// Components
import { Grid, GridWrapper } from "src/components/general";
import { ActiveLink, Plate, ProjectItem } from "src/components/ui";
import { ArrowMore } from "src/components/svg";
import LinesEllipsis from "react-lines-ellipsis";
import responsiveHOC from "react-lines-ellipsis/lib/responsiveHOC";

// Styles
import styles from "./ProjectsList.module.scss";

const ProjectsList: React.FC<{ all?: boolean, data?: IApiProject[], mediaData: any }> = ({ all = false, data, mediaData }) => {

    if(!mediaData.projectWrapper) return <></>;

    const lastItem = data.length > mediaData.projectsCount ? mediaData.projectsCount : data.length;


    return (
        <Grid columns={mediaData.projectWrapper} className={styles["projects-list__items"]}>
            {data?.map((item, index) => 
                <ProjectItem 
                    key={index} 
                    item={item} 
                    mediaData={mediaData} 
                    lastItem={lastItem} 
                    all={all} 
                    index={index} 
                />).slice(0, !all ? mediaData.projectsCount : data.length)}
        </Grid>
    );
};

export default ProjectsList;