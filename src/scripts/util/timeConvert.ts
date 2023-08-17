import moment from "moment";
import { formatNumber } from "./numbers";

const ensureMillisecondTimestamp = (timestamp: string) => {
    if (timestamp?.length > 13) {
        timestamp = timestamp.slice(0, 13);
    }
    if (timestamp?.length === 10) {
        timestamp += "000";
    }
    return parseInt(timestamp, 10);
};

const parseTimestamp = (timestamp: string) => {
    return moment(ensureMillisecondTimestamp(timestamp));
};

const setTimeAgoValue = (number: number, concat: string) => {
    if ((number === 0 && concat !== "sec") || !number === undefined) return "";
    return `${number}${concat}`;
};

const timeAgo = (time, outside = false) => {
    if (time === "0" || !time || time === undefined) return "-";
    const timestamp = time;
    const currentTime = moment();
    const pastTime = moment(timestamp);
    const duration = moment.duration(currentTime.diff(pastTime));

    const asYears = Math.floor(duration.asYears());
    const asMonths = Math.floor(duration.asMonths());
    const asDays = Math.floor(duration.asDays());
    const asHours = Math.floor(duration.asHours());
    const asMinutes = Math.floor(duration.asMinutes());
    const asSeconds = Math.floor(duration.asSeconds());

    const years = duration.years();
    const months = duration.months();
    const days = duration.days();

    const hours = duration.hours();
    const minutes = duration.minutes();
    const seconds = duration.seconds();

    if (outside) {
        if (asMonths > 0)
            return `${asMonths} month${asMonths > 1 ? "s" : ""} ago`;
        if (asDays > 0) return `${asDays} day${asDays > 1 ? "s" : ""} ago`;
        if (asHours > 0) return `${asHours} hour${asHours > 1 ? "s" : ""} ago`;
        if (asMinutes > 0)
            return `${asMinutes} minute${asMinutes > 1 ? "s" : ""} ago`;
        if (asSeconds > 0)
            return `${asSeconds} second${asSeconds > 1 ? "s" : ""} ago`;
    }

    if (asDays < 32) {
        const formattedDuration = `${setTimeAgoValue(
            asDays,
            "d"
        )} ${setTimeAgoValue(hours, "h")} ${setTimeAgoValue(
            minutes,
            "m"
        )} ${setTimeAgoValue(seconds, "sec")} ago`;
        return formattedDuration;
    }
    const formattedDuration = `${setTimeAgoValue(years, "y")} ${setTimeAgoValue(
        months,
        "mth"
    )} ${setTimeAgoValue(days, "d")} ago`;
    return formattedDuration;
};

const transactionDate = (timestamp, secs = false) =>
    moment(!secs ? timestamp / 1000 : timestamp * 1000).format(
        "DD MMM YYYY HH:mm:ss"
    );

const timerFrom = (timestamp: number, currentTimestamp: number) => {
    let difference = currentTimestamp - timestamp * 1000;

    const daysDifference = Math.floor(difference / 1000 / 60 / 60 / 24);
    difference -= daysDifference * 1000 * 60 * 60 * 24;

    const hoursDifference = Math.floor(difference / 1000 / 60 / 60);
    difference -= hoursDifference * 1000 * 60 * 60;

    const minutesDifference = Math.floor(difference / 1000 / 60);
    difference -= minutesDifference * 1000 * 60;

    const secondsDifference = Math.floor(difference / 1000);

    return `${formatNumber(
        daysDifference
    )}d ${hoursDifference}h ${minutesDifference}m ${secondsDifference}s`;
};

const calculateValidatorsEpoch = (
    lastReconfigurationTime: string,
    epochInterval: string,
    rewardsRate: string,
    rewardsRateDenominator: string
) => {
    const startTimestamp = parseTimestamp(lastReconfigurationTime);
    const nowTimestamp = parseTimestamp(moment.now().toString());
    const timePassed = moment.duration(nowTimestamp.diff(startTimestamp));
    const timePassedInMin = timePassed.asMinutes();
    const epochIntervalInMin = moment
        .duration(parseInt(epochInterval, 10) / 1000, "milliseconds")
        .asMinutes();

    const timeRemaining = (epochIntervalInMin - timePassedInMin).toFixed(0);
    const percentage = parseInt(
        ((timePassedInMin * 100) / epochIntervalInMin).toFixed(0),
        10
    );

    const ratePerEpoch = parseInt(rewardsRate, 10);
    const denominator = parseInt(rewardsRateDenominator, 10);

    const epochInSec = parseInt(epochInterval, 10) / 1000 / 1000;
    const yearInSec = 60 * 60 * 24 * 365;
    const epochsPerYear = yearInSec / epochInSec;

    const rate = (((ratePerEpoch * epochsPerYear) / denominator) * 100).toFixed(
        0
    );

    return { timeRemaining, percentage, rate };
};

const addZero = (number: number) => {
    if (number < 10 && number > -1) return `0${number}`;
    return number;
};

const time = (timestamp: string) => {
    const time = new Date(timestamp);
    return `${addZero(time.getHours())}:${addZero(time.getMinutes())}:${addZero(
        time.getSeconds()
    )}`;
};

const timeFull = (timestamp: string | number) => {
    const time = new Date(timestamp);
    return `${addZero(time.getUTCDate())}.${addZero(
        time.getMonth() + 1
    )}.${time.getFullYear()}, ${addZero(time.getHours())}:${addZero(
        time.getMinutes()
    )}:${addZero(time.getSeconds())}`;
};

const dateDiffInDays = (date1: Date, date2: Date) => {
    const diffInMs = date2.getTime() - date1.getTime();
    const diffInDays = Math.round(diffInMs / (1000 * 60 * 60 * 24));
    return diffInDays;
};

const chartDate = (v: string) => {
    const formatter = new Intl.DateTimeFormat("en", { month: "short" });
    return `${new Date(v).getDate()} ${formatter.format(new Date(v))}'${
        new Date(v).getFullYear() % 100
    }`;
};
export {
    ensureMillisecondTimestamp,
    parseTimestamp,
    timerFrom,
    dateDiffInDays,
    timeFull,
    time,
    addZero,
    timeAgo,
    chartDate,
    transactionDate,
    calculateValidatorsEpoch
};
