// React
import moment from "moment";
import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

// Components
import { EventsFilter, EventsList, News, NewsBanner, TrendsList } from "src/components/containers";
import { Grid, GridWrapper, Topper } from "src/components/general";
import { Monitor, Calendar, Close } from "src/components/svg";
import { ActiveLink, Button, CategoryTitle, Img, MonthPicker, Select, TextInput } from "src/components/ui";
import { IRootState } from "src/scripts/redux/store";

// static
import NoImageEvent from "public/static/images/svg/no_image_event.svg";

import { events } from "src/scripts/api/requests";
import { ISearchEventsData, setEventsData, setEventsSearchLoading } from "src/scripts/redux/slices/eventsSlice";
import classNames from "classnames";
import useWindowSize from "src/scripts/hooks/useWindowSize";
import styles from "./EventsPage.module.scss";
import media from "./data/adaptive";

interface ISortedEvent {
    title: string;
    elements: IApiEvent[];
}

const EventsPage: React.FC = () => {
    const [sortedEvents, setSortedEvents] = useState([]);
    const [currentPage, setCurrentPage] = useState(0);
    const [filterCollapse, setFilterCollaspe] = useState(false);
    const dispatch = useDispatch();

    const { eventsData, searchEventsData = null, eventsSlidesData = [] } = useSelector((state: IRootState) => state.events);
    console.log(eventsData);

    const { width } = useWindowSize();
    const mediaData = media(width);

    const sortEvents = (events: IApiEvent[], existed?: ISortedEvent[]) => {
        if (!events?.length) return [];

        const sorted = existed || [];
        events.forEach((item, index) => {
            const startDate = item?.eventDateRange?.startDate;
            const title = moment(startDate).format("MMMM YYYY");

            const existsId = sorted.findIndex((e) => e.title === title);
            if (existsId === -1) {
                sorted.push({
                    title,
                    elements: [item]
                });
            } else {
                const existedElements = sorted[existsId]?.elements;
                sorted[existsId].elements = [...existedElements, item];
            }
        });
        console.log(sorted);
        return sorted;
    };

    const handleSearch = (page, data: ISearchEventsData, addNew = false) => {
        if (!page) setCurrentPage(0);

        if (!addNew) dispatch(setEventsSearchLoading(true));
        events.getData(data.searchText, "desc", data.startDate, data.endDate, page, 20, data.paidOrFree, data.categoryIds).then((results) => {
            if (results && results?.content) {
                dispatch(
                    setEventsData(
                        addNew
                            ? {
                                  ...eventsData,
                                  content: [...eventsData.content, ...results.content],
                                  last: results.last
                              }
                            : results
                    )
                );
            }
            if (!addNew) dispatch(setEventsSearchLoading(false));
        });
    };

    const handleLoadMore = () => {
        handleSearch(currentPage + 1, searchEventsData, true);
        setCurrentPage((e) => e + 1);
    };

    useEffect(() => {
        if (!eventsData?.content?.length) {
            setSortedEvents([]);
            return;
        }
        setSortedEvents(sortEvents(eventsData?.content));
    }, [eventsData]);

    useEffect(() => {
        if (!searchEventsData?.clicked) return;
        handleSearch(0, searchEventsData);
    }, [searchEventsData]);

    if (!width) return <></>;

    return (
        <>
            <Topper backlink={"/"} />
            <Grid>
                <GridWrapper>
                    <Grid className={styles["events-page__banner"]}>
                        <GridWrapper>
                            <NewsBanner data={eventsSlidesData} hideBackground />
                        </GridWrapper>
                    </Grid>
                    <Grid className={styles["events-page__content"]}>
                        <GridWrapper gridWidth={mediaData.eventsFilterWrapper}>
                            <CategoryTitle title={"Filter"} greyLine className={styles["events-page__filter-title"]} collapse={filterCollapse} setCollapse={setFilterCollaspe} />
                            <div className={classNames([styles["events-page__collapse"], { [styles["open"]]: filterCollapse }])}>
                                <div className={styles["events-page__collapse-inner"]}>
                                    <EventsFilter />
                                </div>
                            </div>
                        </GridWrapper>
                        <GridWrapper gridWidth={mediaData.eventsListWrapper}>
                            <EventsList sortedEvents={sortedEvents} handleLoadMore={handleLoadMore} last={eventsData?.last} />
                        </GridWrapper>
                    </Grid>
                </GridWrapper>
            </Grid>
        </>
    );
};

export default EventsPage;
