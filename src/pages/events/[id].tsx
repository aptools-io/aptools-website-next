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
import { setEventData, setEventsCategoriesData, setEventsData } from "src/scripts/redux/slices/eventsSlice";
import getGeneralRequests from "src/scripts/api/generalRequests";

// dummy

const Events = (data: IApiProps) => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setHeaders(data.headers) || null);
        dispatch(setPageTitle(data.event?.title || "Events"));
        dispatch(setEventData(data.event) || null);
    }, [data, dispatch]);

    return <EventsSinglePage />;
};
export default Events;

export async function getServerSideProps(context) {
    const { req, query } = context;
    const { id } = query || {};

    const event = await events.getEventData(id);

    if (!event)
        return {
            notFound: true
        };

    if (event?.url)
        return {
            redirect: {
                destination: event?.url
            }
        };

    return {
        props: {
            general: await getGeneralRequests(context),
            headers: req.headers,
            event: event || [],
            eventsCategories: (await events.getCategoriesData()) || []
        }
    };
}
