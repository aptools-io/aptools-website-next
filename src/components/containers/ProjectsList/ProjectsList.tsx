// React
import React, { } from "react";

// Styles
import styles from "./ProjectsList.module.scss";
import { Grid, GridWrapper } from "src/components/general";
import { ActiveLink, Plate, Tabs } from "src/components/ui";

// Data
import socials from "./data/socials";

// Adaptive
import useWindowSize from "src/scripts/hooks/useWindowSize";
import media from "./data/adaptive";


const ProjectsList: React.FC<{ data?: IApiProject[] }> = ({ data }) => {
    const { width } = useWindowSize();
    const mediaData = media(width);
    
    const renderSocial = (item: IApiProjectSocials, index: number) => (
        <ActiveLink key={index} className={styles["projects-list__item-social-wrapper"]} href={item.link}>
            <a className={styles["projects-list__item-social"]}>
                {socials[item.name] || <>x</>}
            </a>
        </ActiveLink>
    )

    const renderItem = (item: IApiProject, index: number) => {
        const lastItem = data.length > mediaData.projectsCount ? mediaData.projectsCount : data.length;
        return (
            <React.Fragment key={index}>
                <GridWrapper gridWidth={mediaData.project}>
                    <Plate 
                        compressed 
                        image={`${process.env.BASE_HTTPS_URL}/${item.image}`}
                        title={item.name}
                        className={styles["projects-list__item"]}
                        style={{ animation: `fade-in .5s ${index / 10}s normal forwards ease` }}
                        titleLink={`/projects/${item.name}`}
                    >
                        <ActiveLink href={`/projects/${item.name}`}>
                            <a className={styles["projects-list__item-description"]}>{item.description}</a>
                        </ActiveLink>
                        <span className={styles["projects-list__item-socials"]}>
                            {item.socials.map(renderSocial)}
                        </span>
                    </Plate>
                </GridWrapper>
                {index === lastItem - 1 && 
                <GridWrapper gridWidth={mediaData.project}>
                    <div style={{ animation: `fade-in .5s ${index / 10}s normal forwards ease` }} className={styles["projects-list__item-more"]}>
                        <ActiveLink href={"/projects"}>
                            <a>
                                See more
                            </a>
                        </ActiveLink>
                    </div>
                </GridWrapper>}
            </React.Fragment>
        )
    }
    


    return (
        <Grid columns={mediaData.projectWrapper} className={styles["projects-list__items"]}>
            {data?.map(renderItem).slice(0, mediaData.projectsCount)}
        </Grid>
    )
}

export default ProjectsList;