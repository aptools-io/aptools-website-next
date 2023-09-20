// React
import React, { useState } from "react";

// Components
import {
    AptLogoBanner,
    Button,
    MonthPicker,
    Select,
    Socials,
    TextInput,
    ThemeSwitcher
} from "src/components/ui";

// Styles
import classNames from "classnames";
import { Close } from "src/components/svg";
import moment from "moment";
import { useDispatch, useSelector } from "react-redux";
import { IRootState } from "src/scripts/redux/store";
import {
    setEventsSearchData,
    setEventsSearchLoading
} from "src/scripts/redux/slices/eventsSlice";
import styles from "./EventsFilter.module.scss";

// Other

const EventsFilter: React.FC<IComponent> = ({ className }) => {
    const { eventsData = [], eventsCategoriesData = [] } = useSelector(
        (state: IRootState) => state.events
    );
    const dispatch = useDispatch();

    const [searchText, setSearchText] = useState("");
    const [searchCategories, setSearchCategories] = useState([]);
    const [paid, setPaid] = useState(null);

    const [dateRange, setDateRange] = useState({
        date: {
            from: {
                month: moment().month(),
                year: moment().year()
            },
            to: {
                month: moment().month(),
                year: moment().year()
            },
            start: moment().startOf("month").format("YYYY-MM-DD"),
            end: moment().endOf("month").format("YYYY-MM-DD"),
            startShort: moment().format("MMM YYYY"),
            endShort: moment().format("MMM YYYY")
        },
        selectedYear: moment().year(),
        selecting: false
    });

    const classes = classNames([styles["events-filter"], className]);

    const handlePaid = (type: string) => {
        if (paid === type) {
            setPaid(null);
            return;
        }
        setPaid(type);
    };

    const handleCategory = (id: number) => {
        const tempCategories = [...searchCategories];
        const foundedIndex = tempCategories.findIndex(
            (element) => element === id
        );
        if (foundedIndex > -1) tempCategories.splice(foundedIndex, 1);
        else tempCategories.push(id);

        setSearchCategories(tempCategories);
    };

    const handleSearch = () => {
        const paidTypes = {
            paid: 1,
            free: 2
        };

        dispatch(
            setEventsSearchData({
                clicked: true,
                searchText,
                startDate: dateRange.date.start,
                endDate: dateRange.date.end,
                paidOrFree: paidTypes[paid] || null,
                categoryIds:
                    searchCategories.length === 0 ? null : searchCategories
            })
        );
    };

    const renderSearchEventsCategories = (
        item: IApiEventCategory,
        index: number
    ) => {
        return (
            <li
                key={index}
                className={classNames([
                    styles["events-filter__categories-item"],
                    {
                        [styles["active"]]:
                            searchCategories.findIndex((e) => e === item.id) >
                            -1
                    }
                ])}
                onClick={() => handleCategory(item.id)}>
                <Close />
                {item.categoryTitle}
            </li>
        );
    };

    return (
        <div className={classes}>
            <div className={styles["events-filter__input-search"]}>
                <TextInput
                    searchIcon
                    placeholder={"Search"}
                    value={searchText}
                    onChange={(e) => setSearchText(e.target.value)}
                />
                <Button
                    className={styles["events-filter__search"]}
                    onClick={handleSearch}
                    invert>
                    Search
                </Button>
            </div>
            <div className={styles["events-filter__input"]}>
                <span className={styles["title"]}>View on page</span>
                <div className={styles["inner"]}>
                    <Select
                        label={`${dateRange.date.startShort} - ${dateRange.date.endShort}`}>
                        <MonthPicker
                            value={dateRange}
                            onChange={setDateRange}
                        />
                    </Select>
                </div>
            </div>
            {eventsCategoriesData?.length && (
                <div className={styles["events-filter__input"]}>
                    <span className={styles["title"]}>Event type</span>
                    <ul
                        className={classNames([
                            styles["inner"],
                            styles["events-filter__categories"]
                        ])}>
                        {eventsCategoriesData.map(renderSearchEventsCategories)}
                    </ul>
                </div>
            )}
            <div className={styles["events-filter__input"]}>
                <span className={styles["title"]}>Payment</span>
                <div
                    className={classNames([
                        styles["inner"],
                        styles["events-filter__paid"]
                    ])}>
                    <button
                        className={classNames([
                            styles["events-filter__paid-item"],
                            { [styles["active"]]: paid === "free" }
                        ])}
                        onClick={() => handlePaid("free")}>
                        <Close />
                        Free
                    </button>
                    <button
                        className={classNames([
                            styles["events-filter__paid-item"],
                            { [styles["active"]]: paid === "paid" }
                        ])}
                        onClick={() => handlePaid("paid")}>
                        <Close />
                        Paid
                    </button>
                </div>
            </div>
        </div>
    );
};

export default EventsFilter;
