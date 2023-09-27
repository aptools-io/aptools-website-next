// React
import moment from "moment";
import React, { useEffect, useRef, useState } from "react";

import { Grid, GridWrapper, Topper } from "src/components/general";
import { Img } from "src/components/ui";
import { useSelector } from "react-redux";
import { IRootState } from "src/scripts/redux/store";
import useWindowSize from "src/scripts/hooks/useWindowSize";
import styles from "./EventsSinglePage.module.scss";
import media from "./data/adaptive";

const EventsSinglePage: React.FC = () => {
    const { eventData } = useSelector((state: IRootState) => state.events);
    const { title, imageLink, eventDateRange, categoryList, contentList } = eventData || {};
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

    return (
        <>
            <Grid columns={10}>
                <GridWrapper grid={{ start: mediaData.mainWrapper[0], end: mediaData.mainWrapper[1] }}>
                    <Topper className={styles["event-single__topper"]} backlink={"/events"} />
                </GridWrapper>
                <GridWrapper grid={{ start: mediaData.mainWrapper[0], end: mediaData.mainWrapper[1] }}>
                    <div className={styles["event-content"]}>
                        <div className={styles["event-content__image"]}>
                            <Img src={`${process.env.BASE_URL}${imageLink}`} alt={title} />
                        </div>
                        <Grid columns={10}>
                            <GridWrapper grid={{ start: mediaData.mainWrapper[0], end: mediaData.mainWrapper[1] }}>
                                <div className={styles["event-content__text"]}>
                                    <div className={styles["event-content__text-info"]}>
                                        <span className={styles["date"]}>
                                            {moment(startDate).format("DD.MM.YYYY")} - {moment(endDate).format("DD.MM.YYYY")}
                                        </span>
                                        {categoryList?.length > 0 && <ul className={styles["categories"]}>{categoryList.map(renderCategories)}</ul>}
                                    </div>
                                    <div className={styles["event-content__text-content"]}>
                                        <strong className={styles["title"]}>{title}</strong>
                                        {contentList?.length > 0 && <div className={styles["event-content__text-content-inner"]}>{contentList.map(renderContent)}</div>}
                                    </div>
                                </div>
                            </GridWrapper>
                        </Grid>
                    </div>
                </GridWrapper>
            </Grid>
        </>
    );
};

export default EventsSinglePage;
