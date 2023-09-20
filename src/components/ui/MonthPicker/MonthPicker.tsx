// React
import React, {
    Children,
    useRef,
    useState,
    cloneElement,
    useEffect
} from "react";

// Styles
import classNames from "classnames";
import { ArrowLeft } from "src/components/svg";
import moment from "moment";
import { addZero } from "src/scripts/util/timeConvert";
import styles from "./MonthPicker.module.scss";

// Util

const MonthPicker: React.FC<IMonthPickerProps> = ({
    onChange,
    value = null,
    setShow
}) => {
    const [lastDate, setLastDate] = useState(false);
    const [hoveredMonth, setHoveredMonth] = useState({
        month: null,
        year: null
    });

    const classes = classNames([
        styles["month-picker"],
        { [styles["active"]]: lastDate }
    ]);

    const handleChangeYear = (number: number) => {
        onChange({
            ...value,
            selectedYear: value.selectedYear + number
        });
    };

    const handleChangeMonth = (month) => {
        const setted = {
            ...value,
            date: {
                ...value.date,
                [!lastDate ? "from" : "to"]: {
                    year: value.selectedYear,
                    month
                }
            },
            selecting: !lastDate
        };

        if (
            lastDate &&
            (setted.date.to.year < setted.date.from.year ||
                (setted.date.to.year === setted.date.from.year &&
                    setted.date.to.month < setted.date.from.month))
        ) {
            const tempSetted = structuredClone(setted);
            setted.date.from = tempSetted.date.to;
            setted.date.to = tempSetted.date.from;
        }

        const startDate = moment(
            `${setted.date.from.year}-${addZero(
                setted.date.from.month + 1
            )}-01T00:00:00`
        );
        const endDate = moment(
            `${setted.date.to.year}-${addZero(
                setted.date.to.month + 1
            )}-01T00:00:00`
        );
        setted.date.start = startDate.startOf("month").format("YYYY-MM-DD");
        setted.date.end = endDate.endOf("month").format("YYYY-MM-DD");

        setted.date.startShort = startDate.format("MMM YYYY");
        setted.date.endShort = endDate.format("MMM YYYY");

        if (onChange) onChange(setted);
        setLastDate(!lastDate);
    };

    const handleMouseEnter = (month) => {
        setHoveredMonth({ month, year: value.selectedYear });
    };

    const renderMonths = (item, index) => {
        const classes = classNames([
            {
                [styles["active"]]:
                    (value.date.from.month === index &&
                        value.date.from.year === value.selectedYear) ||
                    (value.date.to.month === index &&
                        value.date.to.year === value.selectedYear &&
                        !lastDate)
            },
            {
                [styles["selected"]]:
                    hoveredMonth.month === index &&
                    hoveredMonth.year === value.selectedYear
            },
            {
                [styles["ranged"]]:
                    (lastDate &&
                        ((hoveredMonth.month < index &&
                            index < value.date.from.month &&
                            value.date.from.year === value.selectedYear) ||
                            (hoveredMonth.month < index &&
                                value.date.from.year > value.selectedYear) || // back
                            (hoveredMonth.month > index &&
                                index > value.date.from.month &&
                                value.date.from.year === value.selectedYear) ||
                            (hoveredMonth.month > index &&
                                value.date.from.year < value.selectedYear))) || // front
                    (!lastDate &&
                        ((value.selectedYear === value.date.from.year &&
                            value.selectedYear !== value.date.to.year &&
                            value.date.from.month < index) ||
                            (value.selectedYear === value.date.to.year &&
                                value.selectedYear !== value.date.from.year &&
                                value.date.to.month > index) ||
                            (value.selectedYear > value.date.from.year &&
                                value.selectedYear < value.date.to.year) ||
                            (value.selectedYear === value.date.from.year &&
                                value.selectedYear === value.date.to.year &&
                                index > value.date.from.month &&
                                index < value.date.to.month)))
            }
        ]);
        return (
            <li key={index}>
                <button
                    className={classes}
                    onMouseEnter={() => handleMouseEnter(index)}
                    onClick={() => handleChangeMonth(index)}>
                    {moment.monthsShort(index)}
                </button>
            </li>
        );
    };

    return (
        <div className={classes}>
            <div className={styles["month-picker__years"]}>
                <button onClick={() => handleChangeYear(-1)}>
                    <ArrowLeft />
                </button>
                <div className={styles["year"]}>{value?.selectedYear}</div>
                <button onClick={() => handleChangeYear(1)}>
                    <ArrowLeft />
                </button>
            </div>

            <ul className={styles["month-picker__months"]}>
                {new Array(12).fill(null).map(renderMonths)}
            </ul>
        </div>
    );
};

export default MonthPicker;
