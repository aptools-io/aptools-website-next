// React
import React from "react";

// Components
import { Grid, GridWrapper } from "src/components/general";
import { ActiveLink, Plate } from "src/components/ui";
import { ArrowMore } from "src/components/svg";
import LinesEllipsis from "react-lines-ellipsis";
import responsiveHOC from "react-lines-ellipsis/lib/responsiveHOC";

// Styles
import styles from "./ProjectItem.module.scss";

// Data
import socials from "src/scripts/common/socials";
import classNames from "classnames";

const ProjectItem: React.FC<{ 
    item: IApiProject, 
    index: number, 
    mediaData?: any, 
    lastItem?: any, 
    all?: boolean,
    classNameWrapper?: string
} & IComponent> = ({ item, index, mediaData, lastItem, all, className, classNameWrapper }) => {
    const { description } = item || {};
    const slicedDescription = item?.description?.length > 50 ? `${item?.description?.slice(0, 50)}...` : item?.description;

    const renderSocial = (item: IApiProjectSocials, index: number) => (
        <ActiveLink key={index} className={styles["projects-item__social-wrapper"]} href={item.link}>
            <a className={styles["projects-item__social"]} target={"_blank"}>
                {socials[item.name] || <>x</>}
            </a>
        </ActiveLink>
    );
    
    return (
        <>
            <GridWrapper gridWidth={mediaData.project} className={classNameWrapper}>
                <Plate 
                    compressed 
                    image={`${process.env.BASE_URL}/${item.image}`}
                    title={item.name}
                    className={classNames([styles["projects-item"], className])}
                    style={{ animation: `fade-in .5s ${index / 10}s normal forwards ease` }}
                    titleLink={`/projects/${item.name}`}
                >
                    <ActiveLink href={`/projects/${item.name}`}>
                        <a className={styles["projects-item__description"]}>
                            {slicedDescription || ""}
                        </a>
                    </ActiveLink>
                    {item?.socials && <span className={styles["projects-item__socials"]}>
                        {item?.socials?.map(renderSocial)}
                    </span>}
                </Plate>
            </GridWrapper>
            {(index === lastItem - 1 && !all) &&
                <GridWrapper gridWidth={mediaData.project}>
                    <div style={{ animation: `fade-in .5s ${index / 10}s normal forwards ease` }} className={styles["projects-item__more"]}>
                        <ActiveLink href={"/projects"}>
                            <a>
                                See more <ArrowMore/>
                            </a>
                        </ActiveLink>
                    </div>
                </GridWrapper>
            }
        </>
    );
};

export default ProjectItem;