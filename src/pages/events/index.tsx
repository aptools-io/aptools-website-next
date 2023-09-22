// React
import React, { useEffect } from "react";

// Redux
import { useDispatch } from "react-redux";
import { setHeaders } from "src/scripts/redux/slices/headersSlice";
import { setPageTitle } from "src/scripts/redux/slices/pageTitleSlice";

// Components
import { EventsPage } from "src/components/pages";

// API
import { events } from "src/scripts/api/requests";
import {
    setEventsCategoriesData,
    setEventsData
} from "src/scripts/redux/slices/eventsSlice";

// dummy

const Events = (data: IApiProps) => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setHeaders(data.headers) || null);
        dispatch(setPageTitle("Events"));
        dispatch(setEventsData(data.events) || null);
        dispatch(setEventsCategoriesData(data.eventsCategories) || null);
        console.log(data);
    }, [data, dispatch]);

    return <EventsPage />;
};
export default Events;

export async function getServerSideProps(context) {
    const { req } = context;
    return {
        props: {
            headers: req.headers,
            events:
                (await events.getData(
                    "",
                    "desc",
                    null,
                    null,
                    0,
                    20,
                    null,
                    null
                )) || [],
            eventsCategories: (await events.getCategoriesData()) || []
        }
    };
}
