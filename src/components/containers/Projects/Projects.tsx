// React
import React, { useEffect, useRef, useState } from "react";

// Swiper / Components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import { ArrowLeft } from "src/components/svg";

// Redux
import { useSelector } from "react-redux";
import { IRootState } from "src/scripts/redux/store";

// Styles
import styles from "./Projects.module.scss";
import classNames from "classnames";
import { Grid, GridWrapper } from "src/components/general";
import { ActiveLink, Plate } from "src/components/ui";

// Data
import categories from "src/scripts/consts/categories";
import socials from "./data/socials";

// Adaptive
import useWindowSize from "src/scripts/hooks/useWindowSize";
import media from "./data/adaptive";



const Projects: React.FC<IComponent> = ({
    className 
}) => {
    const { data: projects } = useSelector((state: IRootState) => state.statsProjects);

    const [tabId, setTabId] = useState(0);
    const navigationPrevRef = useRef(null);
    const navigationNextRef = useRef(null);
    const [swiper, setSwiper] = useState(null);

    const { width } = useWindowSize();
    const mediaData = media(width);

    const classes = classNames([
        styles["projects"],
        className
    ]);


    const handleTabClick = (index: number) => setTabId(index);
    
    const renderCategory = (item, index: number) => {
        return (
            <SwiperSlide key={index}>
                <div onClick={() => handleTabClick(index)} data-count={item[1].length} className={classNames([
                    styles["projects__tab"],
                    {[styles["active"]]: index === tabId }
                ])}>
                    {item[0]}
                </div>
            </SwiperSlide>
        )
    }

    const renderSocial = (item: IApiProjectSocials, index: number) => (
        <ActiveLink key={index} className={styles["projects__item-social-wrapper"]} href={item.link}>
            <a className={styles["projects__item-social"]}>
                {socials[item.name] || <>x</>}
            </a>
        </ActiveLink>
    )

    const renderItem = (item: IApiProject, index: number) => {
        const lastItem = projects[categories[tabId]].length > mediaData.projectsCount ? mediaData.projectsCount : projects[categories[tabId]].length;
        const key = item.name + categories[tabId] + index;
        return (
            <React.Fragment key={key}>
                <GridWrapper gridWidth={mediaData.project}>
                    <Plate 
                        compressed 
                        image={`${process.env.BASE_HTTPS_URL}/${item.image}`}
                        title={item.name}
                        className={styles["projects__item"]}
                        style={{ animation: `fade-in .5s ${index / 10}s normal forwards ease` }}
                        titleLink={`/projects/${item.name}`}
                    >
                        <ActiveLink href={`/projects/${item.name}`}>
                            <a className={styles["projects__item-description"]}>{item.description}</a>
                        </ActiveLink>
                        <span className={styles["projects__item-socials"]}>
                            {item.socials.map(renderSocial)}
                        </span>
                    </Plate>
                </GridWrapper>
                {index === lastItem - 1 && 
                <GridWrapper gridWidth={mediaData.project}>
                    <div style={{ animation: `fade-in .5s ${index / 10}s normal forwards ease` }} className={styles["projects__item-more"]}>
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

    if(!projects) return <></>

    return (
        <div className={classes}>
            <div className={styles["projects__tabs-outer"]}>
                <div className={styles["projects__tabs-nav--button"]} onClick={() => swiper.slidePrev()} ref={navigationPrevRef}>
                    <ArrowLeft />  
                </div>
                <div className={styles["projects__tabs-inner"]}>
                    {Object.keys(projects).length &&
                        <>
                            <Swiper
                                modules={[Navigation]}
                                navigation={true}
                                slidesPerView={"auto"}
                                onBeforeInit={(swiper) =>{
                                    swiper.params.navigation["prevEl"] = navigationPrevRef.current;
                                    swiper.params.navigation["nextEl"] = navigationNextRef.current;
                                    swiper.params.navigation["disabledClass"] = styles["projects__tabs-nav--disabled"];
                                    swiper.params.navigation["lockClass"] = styles["projects__tabs-nav--lock"];
                                    
                                }}
                                onInit={(swiper) => {
                                    setSwiper(swiper);
                                    swiper.el.style.display = "block"
                                    swiper.wrapperEl.classList.add(styles["projects__tabs-wrapper"]);
                                }}
                            >
                                {Object.entries(projects).map(renderCategory)}
                            </Swiper>
                            
                        </>
                    }
                </div>
                <div className={styles["projects__tabs-nav--button"]} onClick={() => swiper.slideNext()} ref={navigationNextRef}>
                    <ArrowLeft />
                </div>
            </div>
            {Object.keys(projects).length && 
                <Grid columns={mediaData.projectWrapper} className={styles["projects__items"]}>
                    {projects[categories[tabId]]?.map(renderItem).slice(0, mediaData.projectsCount)}
                </Grid>
            }
        </div>
    );
};

export default Projects;
