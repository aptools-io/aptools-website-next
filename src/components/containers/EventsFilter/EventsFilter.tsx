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
import dateRangeDefault from "./dateRangeDefault";

// Other

const EventsFilter: React.FC<IComponent> = ({ className }) => {
    const { eventsCategoriesData = [] } = useSelector(
        (state: IRootState) => state.events
    );

    const dispatch = useDispatch();

    const [searchText, setSearchText] = useState("");
    const [searchCategories, setSearchCategories] = useState([]);
    const [paid, setPaid] = useState(null);

    const [dateRange, setDateRange] = useState(dateRangeDefault);

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

    const handleReset = () => {
        setSearchText("");
        setSearchCategories([]);
        setPaid(null);
        setDateRange(dateRangeDefault);
        handleSearch({
            clicked: true,
            searchText: "",
            startDate: null,
            endDate: null,
            paidOrFree: null,
            categoryIds: null
        });
    };

    const handleSearch = (customData = null) => {
        const paidTypes = {
            paid: 1,
            free: 2
        };

        const data = customData || {
            clicked: true,
            searchText,
            startDate: dateRange.date.start,
            endDate: dateRange.date.end,
            paidOrFree: paidTypes[paid] || null,
            categoryIds: searchCategories.length === 0 ? null : searchCategories
        };

        dispatch(setEventsSearchData(data));
    };

    const renderSearchEventsCategories = (
        item: IApiEventCategory,
        index: number
    ) => {
        const style = {
            "--default-plate-color": item?.color
        } as React.CSSProperties;
        return (
            <li
                key={index}
                style={style}
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
            <div className={styles["events-filter__input"]}>
                <span className={styles["title"]}>Reset filter</span>
                <Button
                    className={styles["events-filter__reset"]}
                    onClick={handleReset}
                    invert>
                    Reset
                </Button>
            </div>
        </div>
    );
};

export default EventsFilter;
