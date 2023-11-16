// React
import moment from "moment";
import React, { useEffect, useRef, useState } from "react";

import { Grid, GridWrapper, Topper } from "src/components/general";
import { ActiveLink, Button, Img, Plug } from "src/components/ui";
import { useSelector } from "react-redux";
import { IRootState } from "src/scripts/redux/store";
import useWindowSize from "src/scripts/hooks/useWindowSize";
import classNames from "classnames";
import { ArrowLeftBig, Bell, Calendar, Coins, CoinsSmall, Marker, Monitor, Star } from "src/components/svg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import { NavigationOptions } from "swiper/types";
import NoImageEvent from "public/static/images/svg/no_image_event.svg";
import media from "./data/adaptive";
import styles from "./EventsSinglePage.module.scss";

const EventsSinglePage: React.FC = () => {
    const navigationPrevRef = useRef(null);
    const navigationNextRef = useRef(null);
    const [swiper, setSwiper] = useState(null);

    const { eventData } = useSelector((state: IRootState) => state.events);
    const { title, imageLink, eventDateRange, categoryList, contentList, eventCost, paidOrFree, mainLink, location, description, eventList } = eventData || {};
    const { startDate, endDate } = eventDateRange || {};
    const { width } = useWindowSize();
    const mediaData = media(width);

    const renderCategories = (item, index) => {
        const { categoryTitle, color } = item || {};
        const style = { "--default-plate-color": color } as React.CSSProperties;

        return (
            <li style={style} key={index}>
                {categoryTitle}
            </li>
        );
    };

    const renderContent = (item, index) => {
        const { imageLink, message } = item || {};
        return (
            <section key={index} className={styles["content"]}>
                {message && <div className={styles["message"]} dangerouslySetInnerHTML={{ __html: message }} />}
                {imageLink && (
                    <div className={styles["image"]}>
                        <Img {...(imageLink ? { src: `${process.env.BASE_URL}${imageLink}` } : { src: "" })} alt={"preview"} />
                    </div>
                )}
            </section>
        );
    };

    if (!width) return <></>;

    const renderContentInner = () => {
        if (contentList?.length > 0) return <div className={styles["event-content__text-content-inner"]}>{contentList.map(renderContent)}</div>;

        if (description)
            return (
                <div className={styles["event-content__text-content-inner"]}>
                    <section className={styles["content"]}>
                        <div className={styles["message"]} dangerouslySetInnerHTML={{ __html: description }} />
                    </section>
                </div>
            );
    };

    const renderCategory = (item, index) => {
        const style = {
            "--default-plate-color": item?.color
        } as React.CSSProperties;

        return (
            <li style={style} key={index}>
                {item.categoryTitle}
            </li>
        );
    };

    const renderEventItem = (item: IApiEvent, index: number) => {
        const { eventDateRange, imageLink, title, description, categoryList, socialMediaLink, paidOrFree } = item || {};
        const date = moment(eventDateRange?.startDate).format("DD.MM.YYYY");
        return (
            <SwiperSlide key={index}>
                <div className={styles["events-list__category-item"]}>
                    <div className={styles["events-list__category-item-inner"]}>
                        <div className={styles["top"]}>
                            <span className={styles["date"]}>
                                <Calendar />
                                {date}
                            </span>
                            <div className={styles["image"]}>
                                <Img src={`${process.env.BASE_URL}${imageLink}`} alt={title} customNoImageLogo={NoImageEvent.src} />
                                <ul className={styles["categories"]}>
                                    {categoryList.map(renderCategory)}
                                    {paidOrFree.title === "Free" ? renderCategory({ categoryTitle: "Free" }, "Free") : renderCategory({ categoryTitle: "Paid" }, "Paid")}
                                </ul>
                            </div>

                            <strong className={styles["title"]}>{title}</strong>
                            <p className={styles["description"]}>{description?.length > 80 ? `${description.slice(0, 80)}...` : description}</p>
                        </div>

                        <div className={styles["bottom"]}>
                            {socialMediaLink ? (
                                <ActiveLink href={socialMediaLink}>
                                    <a className={styles["social"]}>
                                        <Monitor />
                                        {socialMediaLink?.length > 25 ? `${socialMediaLink.slice(0, 25)}...` : socialMediaLink}
                                    </a>
                                </ActiveLink>
                            ) : (
                                <div />
                            )}
                            <Button href={`/events/${item?.id}`} after={"forward"}>
                                Go
                            </Button>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
        );
    };

    return (
        <div className={styles["event-content__outer"]}>
            <Grid columns={12}>
                <GridWrapper grid={{ start: mediaData.mainWrapper[0], end: mediaData.mainWrapper[1] }}>
                    <Topper className={styles["event-single__topper"]} backlink={"/events"} />
                </GridWrapper>
                <GridWrapper grid={{ start: mediaData.mainWrapper[0], end: mediaData.mainWrapper[1] }}>
                    <div className={styles["event-content"]}>
                        <div className={styles["event-content__image"]}>
                            <Img src={`${process.env.BASE_URL}${imageLink}`} alt={title} />
                        </div>
                        <Grid columns={mediaData.contentColumns}>
                            <GridWrapper grid={{ start: mediaData.secondWrapper[0], end: mediaData.secondWrapper[1] }}>
                                <div className={styles["event-content__text"]}>
                                    <div className={styles["event-content__text-content"]}>
                                        <strong className={styles["title"]}>{title}</strong>
                                        <div className={styles["event-content__text-info"]}>
                                            {/* <span className={styles["date"]}>
                                                {moment(startDate).format("DD.MM.YYYY")} - {moment(endDate).format("DD.MM.YYYY")}
                                            </span> */}
                                            {categoryList?.length > 0 && <ul className={styles["categories"]}>{categoryList.map(renderCategories)}</ul>}
                                        </div>
                                        <div className={styles["event-content__text-plates"]}>
                                            {(startDate || endDate) && (
                                                <div className={classNames([styles["plate"], { [styles["full"]]: startDate && endDate }])}>
                                                    {startDate && (
                                                        <div className={styles["info"]}>
                                                            <span>
                                                                <Calendar />
                                                                Start
                                                            </span>
                                                            <p>{startDate}</p>
                                                        </div>
                                                    )}
                                                    {endDate && (
                                                        <div className={styles["info"]}>
                                                            <span>
                                                                <Calendar />
                                                                End
                                                            </span>
                                                            <p>{endDate}</p>
                                                        </div>
                                                    )}
                                                </div>
                                            )}
                                            {(eventCost || paidOrFree?.title === "Free") && (
                                                <div className={styles["plate"]}>
                                                    {
                                                        <div className={styles["info"]}>
                                                            <span>
                                                                <CoinsSmall />
                                                                Cost
                                                            </span>
                                                            <p>{eventCost || paidOrFree?.title}</p>
                                                        </div>
                                                    }
                                                </div>
                                            )}
                                            {mainLink && (
                                                <div className={styles["plate"]}>
                                                    {
                                                        <div className={styles["info"]}>
                                                            <span>
                                                                <Monitor />
                                                                Link
                                                            </span>
                                                            <p>
                                                                <ActiveLink href={mainLink}>
                                                                    <a>{mainLink?.length > 25 ? `${mainLink.slice(0, 25)}...` : mainLink}</a>
                                                                </ActiveLink>
                                                            </p>
                                                        </div>
                                                    }
                                                </div>
                                            )}
                                            {location?.location && (
                                                <div className={styles["plate"]}>
                                                    {
                                                        <div className={styles["info"]}>
                                                            <span>
                                                                <Marker />
                                                                Location
                                                            </span>
                                                            <p data-blue>{location?.location}</p>
                                                        </div>
                                                    }
                                                </div>
                                            )}
                                        </div>

                                        {(contentList?.length > 0 || description) && renderContentInner()}
                                    </div>
                                </div>
                            </GridWrapper>
                            <GridWrapper grid={{ start: mediaData.thirdWrapper[0], end: mediaData.thirdWrapper[1] }}>
                                <div className={styles["creator"]}>
                                    <strong>
                                        <Star />
                                        Event Creator
                                    </strong>
                                    <div>
                                        <span>Eddy White</span>
                                        <p>Aptos CEO</p>
                                    </div>
                                </div>
                                <div className={styles["buttons"]}>
                                    <Button>
                                        <Bell />
                                        Add in Calendar
                                    </Button>
                                    <Button invert>Go to event</Button>
                                </div>
                            </GridWrapper>
                            {eventList && (
                                <GridWrapper grid={{ start: 1, end: mediaData.slider }}>
                                    <div className={styles["events-list"]}>
                                        <div className={styles["events-list__nav--button"]} onClick={() => swiper.slidePrev()} ref={navigationPrevRef}>
                                            <ArrowLeftBig />
                                        </div>
                                        <div className={styles["events-list__inner"]}>
                                            <>
                                                <Swiper
                                                    modules={[Navigation]}
                                                    navigation={{
                                                        prevEl: navigationPrevRef.current,
                                                        nextEl: navigationNextRef.current
                                                    }}
                                                    slidesPerView={"auto"}
                                                    onBeforeInit={(swiper) => {
                                                        const nav = swiper.params.navigation as NavigationOptions;
                                                        nav.disabledClass = styles["events-list__nav--disabled"];
                                                        nav.lockClass = styles["events-list__nav--lock"];
                                                    }}
                                                    onInit={(swiper) => {
                                                        setSwiper(swiper);
                                                        swiper.wrapperEl.classList.add(styles["events-list__items"]);
                                                    }}>
                                                    {eventList.map(renderEventItem)}
                                                </Swiper>
                                            </>
                                        </div>
                                        <div className={styles["events-list__nav--button"]} onClick={() => swiper.slideNext()} ref={navigationNextRef}>
                                            <ArrowLeftBig />
                                        </div>
                                    </div>
                                </GridWrapper>
                            )}
                        </Grid>
                    </div>
                </GridWrapper>
            </Grid>
        </div>
    );
};

export default EventsSinglePage;
