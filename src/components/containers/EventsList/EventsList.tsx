// React
import React, { useState } from "react";

// Components
import { ActiveLink, AptLogoBanner, Button, CategoryTitle, Img, MonthPicker, Select, Skeleton, Socials, TextInput, ThemeSwitcher } from "src/components/ui";

// Styles
import classNames from "classnames";
import { Calendar, Close, Monitor } from "src/components/svg";
import moment from "moment";
import { useDispatch, useSelector } from "react-redux";
import { IRootState } from "src/scripts/redux/store";
import { setEventsSearchData } from "src/scripts/redux/slices/eventsSlice";
import NoImageEvent from "public/static/images/svg/no_image_event.svg";
import styles from "./EventsList.module.scss";

// Other
interface ISortedEvent {
    title: string;
    elements: IApiEvent[];
}

const EventsList: React.FC<
    IComponent & {
        sortedEvents: ISortedEvent[];
        handleLoadMore: () => void;
        last: boolean;
    }
> = ({ className, sortedEvents, handleLoadMore = null, last = false }) => {
    const { searchLoading } = useSelector((state: IRootState) => state.events);
    const classes = classNames([styles["events-list"], className]);

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

    const renderEvents = (item: IApiEvent, index: number) => {
        const { eventDateRange, imageLink, title, description, categoryList, socialMediaLink, paidOrFree } = item || {};
        const date = moment(eventDateRange?.startDate).format("DD.MM.YYYY");
        return (
            <li key={index} className={styles["events-list__category-item"]}>
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
                        <p className={styles["description"]}>{description.length > 80 ? `${description.slice(0, 80)}...` : description}</p>
                    </div>

                    <div className={styles["bottom"]}>
                        {socialMediaLink ? (
                            <ActiveLink href={socialMediaLink}>
                                <a className={styles["social"]}>
                                    <Monitor />
                                    {socialMediaLink}
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
            </li>
        );
    };

    const renderEventsCategories = (item: ISortedEvent, index: number) => {
        return (
            <li key={index} className={styles["events-list__category"]}>
                <CategoryTitle title={item?.title} />
                <ul className={styles["events-list__category-items"]}>{item?.elements.map(renderEvents)}</ul>
            </li>
        );
    };

    const renderSkeletons = (item: null, index: number) => (
        <li key={index} className={styles["events-list__category-item"]}>
            <Skeleton style={{ minHeight: 230 }} />
        </li>
    );

    return (
        <div className={classes}>
            {!searchLoading ? <ul className={styles["events-list__categories"]}>{sortedEvents.map(renderEventsCategories)}</ul> : <ul className={styles["events-list__category-items"]}>{new Array(20).fill(null).map(renderSkeletons)}</ul>}
            {!last && (
                <Button className={styles["events-list__more"]} invert before={"plus"} onClick={handleLoadMore}>
                    Load more events
                </Button>
            )}
        </div>
    );
};

export default EventsList;
