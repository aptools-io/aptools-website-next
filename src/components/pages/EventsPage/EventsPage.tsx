// React
import moment from "moment";
import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

// Components
import { News, NewsBanner, TrendsList } from "src/components/containers";
import { Grid, GridWrapper, Topper } from "src/components/general";
import { Monitor, Calendar } from "src/components/svg";
import {
    ActiveLink,
    Button,
    CategoryTitle,
    Img,
    MonthPicker,
    Select,
    TextInput
} from "src/components/ui";
import { IRootState } from "src/scripts/redux/store";

// static
import NoImageEvent from "public/static/images/svg/no_image_event.svg";

import { events } from "src/scripts/api/requests";
import { setEventsData } from "src/scripts/redux/slices/eventsSlice";
import styles from "./EventsPage.module.scss";

interface ISortedEvent {
    title: string;
    elements: IApiEvent[];
}

const EventsPage: React.FC = () => {
    const [sortedEvents, setSortedEvents] = useState([]);
    const [searchText, setSearchText] = useState("");
    const dispatch = useDispatch();

    const [dateRange, setDateRange] = useState({
        month: {
            from: {
                month: moment().month(),
                year: moment().year()
            },
            to: {
                month: moment().month(),
                year: moment().year()
            }
        },
        selectedYear: moment().year(),
        selecting: false
    });
    const { eventsData = [] } = useSelector(
        (state: IRootState) => state.events
    );

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
        return sorted;
    };

    useEffect(() => {
        console.log(eventsData);

        setSortedEvents(sortEvents(eventsData));
    }, [eventsData]);

    const handleSearch = async () => {
        const results = await events.getData(searchText);
        dispatch(setEventsData(results));
    };

    const getRange = () => {
        let to = null;

        if (dateRange.selecting) return "Selecting...";

        if (
            !(
                dateRange.month.from.month === dateRange.month.to.month &&
                dateRange.month.from.year === dateRange.month.to.year
            )
        )
            to = `${moment.monthsShort(dateRange.month.to.month)} ${
                dateRange.month.to.year
            }`;

        return `${moment.monthsShort(dateRange.month.from.month)} ${
            dateRange.month.from.year
        }${to ? ` - ${to}` : ""}`;
    };

    const renderCategory = (item, index) => (
        <li key={index}>{item.categoryTitle}</li>
    );

    const renderEvents = (item: IApiEvent, index: number) => {
        const {
            eventDateRange,
            imageLink,
            title,
            description,
            categoryList,
            paidOrFree
        } = item || {};
        const date = moment(eventDateRange?.startDate).format("DD.MM.YYYY");
        return (
            <li key={index} className={styles["events__category-item"]}>
                <div className={styles["events__category-item-inner"]}>
                    <div className={styles["top"]}>
                        <span className={styles["date"]}>
                            <Calendar />
                            {date}
                        </span>
                        <div className={styles["image"]}>
                            <Img
                                src={`${process.env.BASE_URL}${imageLink}`}
                                alt={title}
                                customNoImageLogo={NoImageEvent.src}
                            />
                            <ul className={styles["categories"]}>
                                {categoryList.map(renderCategory)}
                                {paidOrFree.title === "Free"
                                    ? renderCategory(
                                          { categoryTitle: "Free" },
                                          "Free"
                                      )
                                    : renderCategory(
                                          { categoryTitle: "Paid" },
                                          "Paid"
                                      )}
                            </ul>
                        </div>

                        <strong className={styles["title"]}>{title}</strong>
                        <p className={styles["description"]}>
                            {description.length > 80
                                ? `${description.slice(0, 80)}...`
                                : description}
                        </p>
                    </div>

                    <div className={styles["bottom"]}>
                        <div className={styles["social"]}>
                            <Monitor />
                            t.me/TurkeyAptos
                        </div>
                        <Button href={`/events/${item?.id}`} after={"forward"}>
                            Go
                        </Button>
                    </div>
                </div>
            </li>
        );
    };

    const renderEventsCategories = (item: ISortedEvent, index: number) => {
        return (
            <li key={index} className={styles["events__category"]}>
                <CategoryTitle title={item?.title} />
                <ul className={styles["events__category-items"]}>
                    {item?.elements.map(renderEvents)}
                </ul>
            </li>
        );
    };

    return (
        <>
            <Topper backlink={"/"} />
            <Grid>
                <GridWrapper>
                    <Grid>
                        <GridWrapper>
                            <NewsBanner />
                        </GridWrapper>
                    </Grid>
                    <Grid>
                        <GridWrapper gridWidth={3}>
                            <CategoryTitle title={"Filter"} />
                            <div className={styles["events-filter"]}>
                                <div
                                    className={
                                        styles["events-filter__input-search"]
                                    }>
                                    <TextInput
                                        searchIcon
                                        placeholder={"Search"}
                                        value={searchText}
                                        onChange={(e) =>
                                            setSearchText(e.target.value)
                                        }
                                    />
                                    <Button
                                        className={
                                            styles["events-filter__search"]
                                        }
                                        onClick={handleSearch}
                                        invert>
                                        Search
                                    </Button>
                                </div>
                                <div className={styles["events-filter__input"]}>
                                    <span className={styles["title"]}>
                                        View on page
                                    </span>
                                    <div className={styles["inner"]}>
                                        <Select label={getRange()}>
                                            <MonthPicker
                                                value={dateRange}
                                                onChange={setDateRange}
                                            />
                                        </Select>
                                    </div>
                                </div>
                                <div className={styles["events-filter__input"]}>
                                    <span className={styles["title"]}>
                                        Event type
                                    </span>
                                    <div className={styles["inner"]}></div>
                                </div>
                                <div className={styles["events-filter__input"]}>
                                    <span className={styles["title"]}>
                                        Payment
                                    </span>
                                    <div className={styles["inner"]}></div>
                                </div>
                            </div>
                        </GridWrapper>
                        <GridWrapper gridWidth={7}>
                            <div className={styles["events"]}>
                                <ul className={styles["events__categories"]}>
                                    {sortedEvents.map(renderEventsCategories)}
                                </ul>
                                <Button
                                    className={styles["events__more"]}
                                    invert
                                    before={"plus"}>
                                    Load more events
                                </Button>
                            </div>
                        </GridWrapper>
                    </Grid>
                </GridWrapper>
            </Grid>
        </>
    );
};

export default EventsPage;
