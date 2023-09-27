import moment from "moment";

const dateRangeDefault = {
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
};
export default dateRangeDefault;
