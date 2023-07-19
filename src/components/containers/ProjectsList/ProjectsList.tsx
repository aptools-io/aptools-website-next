// React
import React from "react";

// Components
import { Grid, GridWrapper } from "src/components/general";
import { ActiveLink, Plate } from "src/components/ui";
import { ArrowMore } from "src/components/svg";
import LinesEllipsis from "react-lines-ellipsis";
import responsiveHOC from "react-lines-ellipsis/lib/responsiveHOC";

// Styles
import styles from "./ProjectsList.module.scss";




// Data
import socials from "../Projects/data/socials";

const ProjectsList: React.FC<{ all?: boolean, data?: IApiProject[], mediaData: any }> = ({ all = false, data, mediaData }) => {
    const ResponsiveEllipsis = responsiveHOC()(LinesEllipsis);

    if(!mediaData.projectWrapper) return <></>;

    const renderSocial = (item: IApiProjectSocials, index: number) => (
        <ActiveLink key={index} className={styles["projects-list__item-social-wrapper"]} href={item.link}>
            <a className={styles["projects-list__item-social"]}>
                {socials[item.name] || <>x</>}
            </a>
        </ActiveLink>
    );
    
    const renderItem = (item: IApiProject, index: number) => {
        const lastItem = data.length > mediaData.projectsCount ? mediaData.projectsCount : data.length;
        console.log(item)
        return (
            <React.Fragment key={index}>
                <GridWrapper gridWidth={mediaData.project}>
                    <Plate 
                        compressed 
                        image={`${process.env.BASE_URL}/${item.image}`}
                        title={item.name}
                        className={styles["projects-list__item"]}
                        style={{ animation: `fade-in .5s ${index / 10}s normal forwards ease` }}
                        titleLink={`/projects/${item.name}`}
                    >
                        <ActiveLink href={`/projects/${item.name}`}>
                            <a className={styles["projects-list__item-description"]}>
                                <ResponsiveEllipsis 
                                    text={item?.description || ""}
                                    maxLine='3'
                                    ellipsis='...'
                                    basedOn='letters'
                                />
                            </a>
                        </ActiveLink>
                        <span className={styles["projects-list__item-socials"]}>
                            {item.socials.map(renderSocial)}
                        </span>
                    </Plate>
                </GridWrapper>
                {(index === lastItem - 1 && !all) &&
                <GridWrapper gridWidth={mediaData.project}>
                    <div style={{ animation: `fade-in .5s ${index / 10}s normal forwards ease` }} className={styles["projects-list__item-more"]}>
                        <ActiveLink href={"/projects"}>
                            <a>
                                See more <ArrowMore/>
                            </a>
                        </ActiveLink>
                    </div>
                </GridWrapper>}
            </React.Fragment>
        );
    };

    return (
        <Grid columns={mediaData.projectWrapper} className={styles["projects-list__items"]}>
            {data?.map(renderItem).slice(0, !all ? mediaData.projectsCount : data.length)}
        </Grid>
    );
};

export default ProjectsList;