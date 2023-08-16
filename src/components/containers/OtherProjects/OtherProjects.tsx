// React
import React, { useRef, useState } from "react";

// Redux
import { useSelector } from "react-redux";
import { IRootState } from "src/scripts/redux/store";

// Styles
import classNames from "classnames";
import { ActiveLink, Img, Plug, ProjectItem, Socials, Tabs } from "src/components/ui";
import useWindowSize from "src/scripts/hooks/useWindowSize";

// Components

// Data
import { ArrowLeftBig } from "src/components/svg";

import { Swiper, SwiperSlide } from "swiper/react";
import { NavigationOptions } from "swiper/types";
import { Navigation, Pagination } from "swiper";
import ProjectsList from "../ProjectsList/ProjectsList";
import styles from "./OtherProjects.module.scss";


const OtherProjects: React.FC<IComponent> = ({
    className 
}) => {
    const { project, otherProjects } = useSelector((state: IRootState) => state.statsProjects);
    const navigationPrevRef = useRef(null);
    const navigationNextRef = useRef(null);
    const [swiper, setSwiper] = useState(null);

    const { name, image, description, socials } = project || {};
    if(!otherProjects?.length) return <Plug noData />;

    const classes = classNames([
        styles["other-projects"],
        className
    ]);

    const pagination = {
        clickable: true,
        dynamicBullets: true,
        dynamicMainBullets: 6,
        el: `.${styles["other-projects__dots"]}`,
        bulletActiveClass: styles.active,
        renderBullet (index, className) {
            return `<button class="${styles["other-projects__dot"]} ${className}"></button>`;
        },
    };


    const renderTrendItem = (item, index: number) => {
        return (
            <SwiperSlide key={index}>
                <ProjectItem 
                    item={item} 
                    index={index} 
                    all={true} 
                    mediaData={{ project: 1 }} 
                    className={styles["other-projects__item"]}
                    classNameWrapper={styles["other-projects__item-wrapper"]}
                />
            </SwiperSlide>
        );
    };
  
    return (
        <div className={styles["other-projects__outer"]}>     
            <strong className={styles["other-projects__title"]}>Other projects</strong>   
            <div className={classes}>
                <div className={styles["other-projects__nav--button"]} onClick={() => swiper.slidePrev()} ref={navigationPrevRef}>
                    <ArrowLeftBig />  
                </div>
                <div className={styles["other-projects__inner"]}>
                    <>
                        <Swiper
                            modules={[Navigation, Pagination]}
                            navigation={{
                                prevEl: navigationPrevRef.current,
                                nextEl: navigationNextRef.current,
                            }}
                            pagination={pagination}
                            breakpoints={{
                                0: {
                                    slidesPerView: 1
                                },
                                768: {
                                    slidesPerView: "auto"
                                }
                            }}
                            onBeforeInit={(swiper) =>{
                                const nav = swiper.params.navigation as NavigationOptions;
                                nav.disabledClass = styles["other-projects__nav--disabled"];
                                nav.lockClass = styles["other-projects__nav--lock"];
                            }}
                            onInit={(swiper) => {
                                setSwiper(swiper);
                                swiper.wrapperEl.classList.add(styles["other-projects__items"]);
                            }}
                        >
                            {otherProjects.map(renderTrendItem)}
                        </Swiper>
                    </>
                </div>
                <div className={styles["other-projects__nav--button"]} onClick={() => swiper.slideNext()} ref={navigationNextRef}>
                    <ArrowLeftBig />
                </div>
            </div>
            <div className={styles["other-projects__dots"]}/>
        </div>
    );
};

export default OtherProjects;
