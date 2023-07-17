// React
import React, { useRef, useState, Children, useEffect } from "react";

// Swiper / Components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import { ArrowLeft } from "src/components/svg";

// Styles
import classNames from "classnames";

// Adaptive
import styles from "./Tabs.module.scss";
import Skeleton from "../Skeleton/Skeleton";



const Tabs: React.ForwardRefRenderFunction<any, ITabsProps> = ({
    data,
    dataArray,
    defaultEntry = null,
    itemsCount = true,
    children,
    className 
}, ref) => {

    const child: React.ReactNode = Children.only(children);
 
    const [tabId, setTabId] = useState(0);

    const navigationPrevRef = useRef(null);
    const navigationNextRef = useRef(null);
    const [swiper, setSwiper] = useState(null);

    const [customEntry, setCustomEntry] = useState(null);
    const [customComponent, setCustomComponent] = useState(null);
    const [loading, setLoading] = useState(false);

    const entries = data ? Object.entries(data) : dataArray;
    const entry = entries?.[tabId]?.[1] || null;

    const classes = classNames([
        styles["tabs"],
        className
    ]);

    const handleTabClick = (
        index: number, 
        getData: ITab
    ) => {
        setTabId(index);
        
        if(getData.action) {
            setLoading(true);
            getData.action(setCustomEntry, setLoading, getData.id);
        } 
    };
    
    const renderCategory = (item: ITab | [ string, any ], index: number) => {
        const checkItem = Array.isArray(item);
        
        return (
            <SwiperSlide key={index}>
                <div onClick={() => handleTabClick(index, !checkItem && { action: item.action, id: item.id, component: item.component })} data-count={checkItem && item[1].length} className={classNames([
                    styles["tabs__item"],
                    {[styles["active"]]: index === tabId },
                    {[styles["counter"]]: itemsCount }
                ])}>
                    {checkItem ? item[0] : item.title}
                </div>
            </SwiperSlide>
        );
    };
   

    if(!(data || dataArray)) return <></>;

    const getComponent = () => {
        if(loading) return new Array(10).fill(null).map((_, index) => <Skeleton key={index} style={{ height: "205px", minHeight: "205px" }} />);
        if(dataArray?.[tabId].component) return dataArray?.[tabId].component();
        return React.cloneElement(child as React.ReactElement<IListHeaderProps>, {
            data: entry || customEntry || defaultEntry || [],
        });
    };
    
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
            {getComponent()}
        </div>
    );
};

export default React.forwardRef(Tabs);

