// React
import React, { useEffect } from "react";

// Redux
import { useDispatch } from "react-redux";
import { setHeaders } from "src/scripts/redux/slices/headersSlice";
import { setPageTitle } from "src/scripts/redux/slices/pageTitleSlice";

// Components
import { EventsPage, EventsSinglePage } from "src/components/pages";

// API
import { events } from "src/scripts/api/requests";
import {
    setEventData,
    setEventsCategoriesData,
    setEventsData
} from "src/scripts/redux/slices/eventsSlice";

// dummy

const Events = (data: IApiProps) => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setHeaders(data.headers) || null);
        dispatch(setPageTitle("Events"));
        dispatch(setEventData(null) || null);
    }, [data, dispatch]);

    return <EventsSinglePage />;
};
export default Events;

export async function getServerSideProps(context) {
    const { req } = context;

    return {
        notFound: true,
        props: {
            headers: req.headers,
            events: [],
            eventsCategories: (await events.getCategoriesData()) || []
        }
    };
}
