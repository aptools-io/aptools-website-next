// React
import moment from "moment";
import React, { useEffect, useRef, useState } from "react";

import { Grid, GridWrapper, Topper } from "src/components/general";
import { Img } from "src/components/ui";
import { useSelector } from "react-redux";
import { IRootState } from "src/scripts/redux/store";
import styles from "./EventsSinglePage.module.scss";

const EventsSinglePage: React.FC = () => {
    const { eventData } = useSelector((state: IRootState) => state.events);
    const { title, imageLink, eventDateRange, categoryList } = eventData || {};
    const { startDate, endDate } = eventDateRange || {};
    console.log(eventData);
    const renderCategories = (item, index) => {
        const { categoryTitle, color } = item || {};
        const style = { "--default-plate-color": color } as React.CSSProperties;

        return (
            <li style={style} key={index}>
                {categoryTitle}
            </li>
        );
    };
    return (
        <>
            <Grid columns={10}>
                <GridWrapper grid={{ start: 2, end: 9 }}>
                    <Topper
                        className={styles["event-single__topper"]}
                        backlink={"/events"}
                    />
                </GridWrapper>
                <GridWrapper grid={{ start: 2, end: 9 }}>
                    <div className={styles["event-content"]}>
                        <div className={styles["event-content__image"]}>
                            <Img
                                {...(imageLink
                                    ? {
                                          src: `${process.env.BASE_URL}${imageLink}`
                                      }
                                    : { src: "" })}
                                alt={title}
                            />
                        </div>
                        <div className={styles["event-content__text"]}>
                            <div className={styles["event-content__text-info"]}>
                                <span className={styles["date"]}>
                                    {moment(startDate).format("DD.MM.YYYY")} -{" "}
                                    {moment(endDate).format("DD.MM.YYYY")}
                                </span>
                                {categoryList?.length && (
                                    <ul className={styles["categories"]}>
                                        {categoryList.map(renderCategories)}
                                        {categoryList.map(
                                            renderCategories
                                        )}{" "}
                                        {categoryList.map(renderCategories)}{" "}
                                        {categoryList.map(renderCategories)}{" "}
                                        {categoryList.map(renderCategories)}
                                    </ul>
                                )}
                            </div>
                        </div>
                    </div>
                </GridWrapper>
            </Grid>
        </>
    );
};

export default EventsSinglePage;
