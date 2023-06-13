// React
import React, { useRef, useState, Children } from "react";

// Swiper / Components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import { ArrowLeft } from "src/components/svg";

// Styles
import classNames from "classnames";

// Adaptive
import styles from "./Tabs.module.scss";



const Tabs: React.ForwardRefRenderFunction<any, ITabsProps> = ({
    data,
    itemsCount = true,
    children,
    className 
}, ref) => {
    const child: React.ReactNode = Children.only(children);
 
    const [tabId, setTabId] = useState(0);
    const navigationPrevRef = useRef(null);
    const navigationNextRef = useRef(null);
    const [swiper, setSwiper] = useState(null);

    const entries = Object.entries(data);
    const entry = entries?.[tabId]?.[1] || [];

    const classes = classNames([
        styles["tabs"],
        className
    ]);

    const handleTabClick = (index: number) => setTabId(index);
    
    const renderCategory = (item, index: number) => {
        return (
            <SwiperSlide key={index}>
                <div onClick={() => handleTabClick(index)} data-count={item[1].length} className={classNames([
                    styles["tabs__item"],
                    {[styles["active"]]: index === tabId },
                    {[styles["counter"]]: itemsCount }
                ])}>
                    {item[0]}
                </div>
            </SwiperSlide>
        );
    };

    if(!data) return <></>;
    
    return (
        <div ref={ref} className={classes}>
            <div className={styles["tabs__outer"]}>
                <div className={styles["tabs__nav--button"]} onClick={() => swiper.slidePrev()} ref={navigationPrevRef}>
                    <ArrowLeft />  
                </div>
                <div className={styles["tabs__inner"]}>
                        <>
                        <Swiper
                                modules={[Navigation]}
                                navigation={{
                                    prevEl: navigationPrevRef.current,
                                    nextEl: navigationNextRef.current,
                                }}
                                slidesPerView={"auto"}
                               
                                onBeforeInit={(swiper) =>{
                                    /* swiper.params.navigation["prevEl"] = navigationPrevRef.current;
                                    swiper.params.navigation["nextEl"] = navigationNextRef.current; */
                                    console.log(swiper.params.navigation)
                                    swiper.params.navigation["disabledClass"] = styles["tabs__nav--disabled"];
                                    swiper.params.navigation["lockClass"] = styles["tabs__nav--lock"];
                                    
                                }}
                                onInit={(swiper) => {
                                    setSwiper(swiper);
                                    swiper.el.style.display = "block";
                                    swiper.wrapperEl.classList.add(styles["tabs__wrapper"]);
                                }}
                            >
                                {entries.map(renderCategory)}
                            </Swiper>
                        </>
                </div>
                <div className={styles["tabs__nav--button"]} onClick={() => swiper.slideNext()} ref={navigationNextRef}>
                    <ArrowLeft />
                </div>
            </div>
            {React.cloneElement(child as React.ReactElement<IListHeaderProps>, {
                data: entry,
                key: tabId
            }) }
        </div>
    );
};

export default React.forwardRef(Tabs);

