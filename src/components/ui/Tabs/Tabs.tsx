// React
import React, { useRef, useState, Children, useEffect } from "react";

// Next
import { useRouter } from "next/router";

// Swiper / Components
import { Swiper, SwiperSlide } from "swiper/react";
import { NavigationOptions } from "swiper/types";
import { Navigation } from "swiper";
import { ArrowLeft } from "src/components/svg";

// Styles
import classNames from "classnames";

// Adaptive
import useLocalStorage from "src/scripts/hooks/useLocalStorage";
import styles from "./Tabs.module.scss";
import Skeleton from "../Skeleton/Skeleton";

const Tabs: React.ForwardRefRenderFunction<any, ITabsProps> = (
    {
        data,
        dataArray,
        defaultEntry = null,
        itemsCount = true,
        hideSingle = false,
        onChangeTab = null,
        queryTab = false,
        windowLoad = false,
        tabsName = null,
        children,
        className
    },
    ref
) => {
    const child: React.ReactNode = Children.only(children);
    const router = useRouter();
    const { tab } = router.query || {};
    const [tabsStates, setTabsStates] = useLocalStorage("tabsStates", {});
    const [tabId, setTabId] = useState(queryTab ? Number(tab) || 0 : 0);

    const navigationPrevRef = useRef(null);
    const navigationNextRef = useRef(null);
    const [lineElement, setLineElement] = useState(null);
    const [swiper, setSwiper] = useState(null);

    const [customEntry, setCustomEntry] = useState(null);
    const [loading, setLoading] = useState(false);

    const entries = data ? Object.entries(data) : dataArray;
    const entry = entries?.[tabId]?.[1] || null;

    const classes = classNames([styles.tabs, className]);

    useEffect(() => {
        if (swiper?.el) updateLine(tabId);
    }, [swiper, lineElement]);

    useEffect(() => {
        if (typeof window === "undefined") return;
        const settedTab = tabsStates?.[tabsName] || null;
        const currentEntry = entries[settedTab] || null;

        const handleSettedTab = () => {
            if (settedTab !== null)
                handleTabClick(settedTab, currentEntry as ITab, true);
        };
        if (!windowLoad) {
            if (settedTab !== null)
                handleTabClick(settedTab, currentEntry as ITab, true);
            return;
        }
        window.addEventListener("load", handleSettedTab);
        return () => {
            window.removeEventListener("load", handleSettedTab);
        };
    }, [tabsStates]);

    useEffect(() => {
        if (!tabsName) return;

        const handleSetRemoteTab = (e) => {
            if (e.detail.tabsName !== tabsName) return;
            const { tabId } = e.detail;
            if (swiper?.el) {
                const element = entries[tabId];
                const checkItem = Array.isArray(element);
                if (!checkItem) handleTabClick(tabId, element);
            }
        };
        window.addEventListener("setRemoteTab", handleSetRemoteTab);
        return () => {
            window.removeEventListener("setRemoteTab", handleSetRemoteTab);
        };
    }, [swiper]);

    const updateLine = (index) => {
        if (!swiper?.el || !lineElement) return;

        const items = swiper.el.querySelectorAll(`.${styles.tabs__item}`);

        if (!items[index]) return;

        lineElement.style.left = `${items[index].offsetLeft}px`;
        lineElement.style.width = `${
            items[index].getBoundingClientRect().width
        }px`;
    };

    const handleTabClick = (
        index: number,
        getData: ITab,
        noSaveStates = false
    ) => {
        if (tabId === index) return;
        if (tabsName && !noSaveStates) {
            setTabsStates({
                ...tabsStates,
                [tabsName]: index
            });
        }
        if (onChangeTab) onChangeTab(index);
        setTabId(index);
        updateLine(index);

        if (getData?.action) {
            setLoading(true);
            const query =
                typeof router.query?.id === "string" ? router.query?.id : "";
            getData.action(
                setCustomEntry,
                setLoading,
                getData.id,
                query,
                router?.query
            );
        }
    };

    const renderCategory = (item: ITab | [string, any], index: number) => {
        const checkItem = Array.isArray(item);

        return (
            <SwiperSlide key={index}>
                <div
                    onClick={() =>
                        handleTabClick(
                            index,
                            !checkItem && {
                                action: item.action,
                                id: item.id,
                                component: item.component
                            }
                        )
                    }
                    data-count={checkItem && item[1].length}
                    className={classNames([
                        styles.tabs__item,
                        { [styles.active]: index === tabId },
                        { [styles.counter]: itemsCount }
                    ])}>
                    {checkItem ? item[0] : item.title}
                </div>
            </SwiperSlide>
        );
    };

    if (!(data || dataArray)) return <></>;

    const getComponent = () => {
        if (loading)
            return new Array(10)
                .fill(null)
                .map((_, index) => (
                    <Skeleton
                        key={index}
                        style={{ height: "60px", minHeight: "60px" }}
                    />
                ));
        if (dataArray?.[tabId]?.component)
            return dataArray?.[tabId].component();

        return React.cloneElement(
            child as React.ReactElement<IListHeaderProps>,
            {
                data: entry || customEntry || defaultEntry || [],
                key: new Date().getTime()
            }
        );
    };

    if (hideSingle && dataArray?.length === 1) return <>{getComponent()}</>;

    return (
        <div ref={ref} className={classes}>
            <div className={styles.tabs__outer}>
                <div
                    className={styles["tabs__nav--button"]}
                    onClick={() => swiper.slidePrev()}
                    ref={navigationPrevRef}>
                    <ArrowLeft />
                </div>
                <div className={styles.tabs__inner}>
                    <>
                        <Swiper
                            modules={[Navigation]}
                            navigation={{
                                prevEl: navigationPrevRef.current,
                                nextEl: navigationNextRef.current
                            }}
                            slidesPerView={"auto"}
                            onBeforeInit={(swiper) => {
                                const nav = swiper.params
                                    .navigation as NavigationOptions;
                                nav.disabledClass =
                                    styles["tabs__nav--disabled"];
                                nav.lockClass = styles["tabs__nav--lock"];
                            }}
                            onInit={(swiper) => {
                                setSwiper(swiper);
                                swiper.el.style.display = "block";
                                swiper.wrapperEl.classList.add(
                                    styles.tabs__wrapper
                                );

                                if (
                                    lineElement ||
                                    swiper.wrapperEl.querySelectorAll(
                                        `.${styles.tabs__line}`
                                    ).length
                                )
                                    return;
                                const line = document.createElement("i");
                                line.classList.add(styles.tabs__line);

                                swiper.wrapperEl.append(line);
                                setLineElement(line);
                            }}>
                            {/* <SwiperSlide style={{ position: "absolute", maxWidth: 0, maxHeight: 0 }}><i ref={lineRef} className={styles["tabs__line"]}/></SwiperSlide> */}
                            {entries.map(renderCategory)}
                        </Swiper>
                    </>
                </div>
                <div
                    className={styles["tabs__nav--button"]}
                    onClick={() => swiper.slideNext()}
                    ref={navigationNextRef}>
                    <ArrowLeft />
                </div>
            </div>
            {getComponent()}
        </div>
    );
};

export default React.forwardRef(Tabs);
