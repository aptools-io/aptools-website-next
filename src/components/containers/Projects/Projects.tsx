// React
import React, { useEffect, useRef, useState } from "react";

// Swiper / Components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import { ArrowLeft } from "src/components/svg";

// Styles
import styles from "./Projects.module.scss";
import classNames from "classnames";
import { Grid, GridWrapper } from "src/components/general";
import { ActiveLink, Plate } from "src/components/ui";
import categories from "src/scripts/consts/categories";
import socials from "./data/socials";


const Projects: React.FC<IProjectsProps> = ({
    projects,
    className 
}) => {
    const [tabId, setTabId] = useState(0);
    const navigationPrevRef = useRef(null);
    const navigationNextRef = useRef(null);
    const [swiper, setSwiper] = useState(null);

    const classes = classNames([
        styles["projects"],
        className
    ]);


    const handleTabClick = (index: number) => {
        setTabId(index)
    }
    
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
        return (
            <GridWrapper key={item.name} gridWidth={2}>
                <Plate 
                    compressed 
                    image={`${process.env.BASE_HTTPS_URL}/${item.image}`}
                    title={item.name}
                    className={styles["projects__item"]}
                    style={{ animation: `fade-in .5s ${index / 10}s normal forwards ease` }}
                >
                    <span className={styles["projects__item-description"]}>
                        {item.description}
                    </span>
                    <span className={styles["projects__item-socials"]}>
                        {item.socials.map(renderSocial)}
                    </span>
                </Plate>
            </GridWrapper>
        )
    }

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
                <Grid className={styles["projects__items"]}>
                    {projects[categories[tabId]]?.map(renderItem).slice(0, 14)}
                </Grid>
            }
        </div>
    );
};

export default Projects;
