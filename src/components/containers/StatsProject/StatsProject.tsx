// React
import React from "react";

// Redux
import { useSelector } from "react-redux";
import { IRootState } from "src/scripts/redux/store";

// Styles
import classNames from "classnames";
import { ActiveLink, Img, Plug, Socials, Tabs } from "src/components/ui";
import useWindowSize from "src/scripts/hooks/useWindowSize";
import socialsImages from "src/scripts/common/socials";
import styles from "./StatsProject.module.scss";

// Components
import ProjectsList from "../ProjectsList/ProjectsList";

// Data

const StatsProject: React.FC<IComponent> = ({ className }) => {
    const { project } = useSelector((state: IRootState) => state.statsProjects);
    const { name, image, description, socials } = project || {};
    /* const { width } = useWindowSize();
    const mediaData = media(width); */

    const classes = classNames([styles["stats-project"], className]);

    const renderSocial = (item: IApiProjectSocials, index: number) => (
        <ActiveLink
            key={index}
            className={styles["stats-project__info-social-wrapper"]}
            href={item.link}>
            <a
                className={styles["stats-project__info-social"]}
                target={"_blank"}>
                {socialsImages[item.name] || <>x</>}
            </a>
        </ActiveLink>
    );

    return (
        <div className={classes}>
            <div className={styles["stats-project__info"]}>
                <div className={styles["stats-project__info-description"]}>
                    {description}
                </div>
                <div className={styles["stats-project__info-socials"]}>
                    <strong>Links</strong>
                    {socials && (
                        <span
                            className={
                                styles["stats-project__info-socials-container"]
                            }>
                            {socials?.map(renderSocial)}
                        </span>
                    )}
                </div>
            </div>
            <div className={styles["stats-project__image"]}>
                <Img alt={name} src={`${process.env.BASE_URL}/${image}`} />
            </div>
        </div>
    );
};

export default StatsProject;
