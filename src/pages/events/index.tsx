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

const eventsData = [
    {
        id: 8,
        title: "Aptos(APT) new project",
        description: "Aptos start new project",
        imageLink:
            "/media/event2023-09-15/e88cd12f929b46984cdc70998187827c.jpg",
        mainLink:
            "https://www.coincarp.com/events/aptos-new-listing-on-digifinex/",
        socialMediaLink: null,
        typeOfEntry: {
            id: 1,
            entryTypeTitle: "Register"
        },
        paidOrFree: {
            id: 1,
            title: "Paid"
        },
        categoryList: [
            {
                id: 10,
                categoryTitle: "Workshop",
                color: null,
                visible: true
            },
            {
                id: 12,
                categoryTitle: "Conference",
                color: null,
                visible: true
            }
        ],
        eventDateRange: {
            id: 10,
            startDate: "2022-10-19",
            endDate: "2022-10-21",
            startTime: "10:00:00",
            endTime: "17:00:00"
        }
    },
    {
        id: 9,
        title: "Aptos(APT) test event ",
        description: "Aptos event ",
        imageLink:
            "/media/event2023-09-15/e88cd12f929b46984cdc70998187827c.jpg",
        mainLink: "",
        socialMediaLink: null,
        typeOfEntry: {
            id: 2,
            entryTypeTitle: "Pre-register"
        },
        paidOrFree: {
            id: 2,
            title: "Free"
        },
        categoryList: [
            {
                id: 8,
                categoryTitle: "AMA",
                color: null,
                visible: true
            },
            {
                id: 12,
                categoryTitle: "Conference",
                color: null,
                visible: true
            }
        ],
        eventDateRange: {
            id: 11,
            startDate: "2022-10-19",
            endDate: "2022-10-21",
            startTime: "10:00:00",
            endTime: "17:00:00"
        }
    },
    {
        id: 6,
        title: "Aptos(APT) Token Unlock",
        description:
            "Retail's Big Show is where the entire retail industry comes together to hear from the biggest changemakers, experience the latest innovations, and make the relationships that matter most.",
        imageLink:
            "/media/event2023-09-15/00067b6b77f1b7ca60e62ea17d706cd9.jpg",
        mainLink: "https://www.aptos.com/events",
        socialMediaLink: "https://nrfbigshow.nrf.com/",
        typeOfEntry: {
            id: 1,
            entryTypeTitle: "Register"
        },
        paidOrFree: {
            id: 1,
            title: "Paid"
        },
        categoryList: [
            {
                id: 14,
                categoryTitle: "Tokenomics",
                color: null,
                visible: true
            }
        ],
        eventDateRange: {
            id: 6,
            startDate: "2023-07-12",
            endDate: "2023-07-13",
            startTime: "12:00:00",
            endTime: "16:00:00"
        }
    },
    {
        id: 2,
        title: "aptos event ",
        description: "This is a sample event description. 12",
        imageLink:
            "/media/event2023-09-15/5fa191ec8e32c45fcc3385c209488636.jpg",
        mainLink: "https://example.com/event",
        socialMediaLink: "https://example.com/event",
        typeOfEntry: {
            id: 1,
            entryTypeTitle: "Register"
        },
        paidOrFree: {
            id: 1,
            title: "Paid"
        },
        categoryList: [
            {
                id: 4,
                categoryTitle: "category 2",
                color: null,
                visible: false
            },
            {
                id: 5,
                categoryTitle: "category 3",
                color: null,
                visible: false
            }
        ],
        eventDateRange: {
            id: 2,
            startDate: "2023-07-20",
            endDate: "2023-07-26",
            startTime: "12:00:00",
            endTime: "16:00:00"
        }
    },
    {
        id: 3,
        title: "aptos event ",
        description: "This is a sample event description. 12",
        imageLink:
            "/media/event2023-09-15/c8f7360f46baebafdf0411d94c544001.jpg",
        mainLink: "https://example.com/event",
        socialMediaLink: "https://example.com/event",
        typeOfEntry: {
            id: 1,
            entryTypeTitle: "Register"
        },
        paidOrFree: {
            id: 1,
            title: "Paid"
        },
        categoryList: [
            {
                id: 4,
                categoryTitle: "category 2",
                color: null,
                visible: false
            },
            {
                id: 5,
                categoryTitle: "category 3",
                color: null,
                visible: false
            }
        ],
        eventDateRange: {
            id: 3,
            startDate: "2023-07-20",
            endDate: "2023-07-26",
            startTime: "12:00:00",
            endTime: "16:00:00"
        }
    },
    {
        id: 4,
        title: "aptos event ",
        description: "This is a sample event description. 12",
        imageLink:
            "/media/event2023-09-15/c8f7360f46baebafdf0411d94c544001.jpg",
        mainLink: "https://example.com/event",
        socialMediaLink: "https://example.com/event",
        typeOfEntry: {
            id: 1,
            entryTypeTitle: "Register"
        },
        paidOrFree: {
            id: 1,
            title: "Paid"
        },
        categoryList: [
            {
                id: 4,
                categoryTitle: "category 2",
                color: null,
                visible: false
            },
            {
                id: 5,
                categoryTitle: "category 3",
                color: null,
                visible: false
            }
        ],
        eventDateRange: {
            id: 4,
            startDate: "2023-07-20",
            endDate: "2023-07-26",
            startTime: "12:00:00",
            endTime: "16:00:00"
        }
    },
    {
        id: 1,
        title: "aptos event first test",
        description: "This is a sample event description. 12",
        imageLink:
            "/media/event2023-09-15/5fa191ec8e32c45fcc3385c209488636.jpg",
        mainLink: "https://example.com/event",
        socialMediaLink: "https://example.com/event",
        typeOfEntry: {
            id: 1,
            entryTypeTitle: "Register"
        },
        paidOrFree: {
            id: 1,
            title: "Paid"
        },
        categoryList: [
            {
                id: 4,
                categoryTitle: "category 2",
                color: null,
                visible: false
            },
            {
                id: 5,
                categoryTitle: "category 3",
                color: null,
                visible: false
            }
        ],
        eventDateRange: {
            id: 1,
            startDate: "2023-07-20",
            endDate: "2023-07-26",
            startTime: "12:00:00",
            endTime: "16:00:00"
        }
    },
    {
        id: 7,
        title: "Labor Day Sample Sale",
        description:
            "Come by and score some insane deals on all your favorite brands! Patio will be filled with awesome product at awesome prices!",
        imageLink:
            "/media/event2023-09-15/00067b6b77f1b7ca60e62ea17d706cd9.jpg",
        mainLink:
            "https://aptoslife.com/events-calendar/#/details/Labor-Day-Sample-Sale/12408773/2023-09-04T10",
        socialMediaLink: null,
        typeOfEntry: {
            id: 1,
            entryTypeTitle: "Register"
        },
        paidOrFree: {
            id: 1,
            title: "Paid"
        },
        categoryList: [
            {
                id: 14,
                categoryTitle: "Tokenomics",
                color: null,
                visible: true
            }
        ],
        eventDateRange: {
            id: 7,
            startDate: "2023-09-04",
            endDate: "2023-09-04",
            startTime: "10:00:00",
            endTime: "17:00:00"
        }
    },
    {
        id: 21,
        title: "Aptos Community Meetup",
        description:
            "Connect with fellow Aptos enthusiasts and developers at our community meetup. Share ideas and insights on the future of blockchain.",
        imageLink:
            "/media/event/2023-09-13/5fa191ec8e32c45fcc3385c209488636.jpg",
        mainLink:
            "https://www.coincarp.com/events/aptos-new-listing-on-digifinex/",
        socialMediaLink: "https://nrfbigshow.nrf.com/",
        typeOfEntry: {
            id: 2,
            entryTypeTitle: "Pre-register"
        },
        paidOrFree: {
            id: 2,
            title: "Free"
        },
        categoryList: [
            {
                id: 11,
                categoryTitle: "Hakaton",
                color: null,
                visible: true
            }
        ],
        eventDateRange: {
            id: 23,
            startDate: "2023-09-13",
            endDate: "2023-09-17",
            startTime: "10:00:00",
            endTime: "17:00:00"
        }
    },
    {
        id: 18,
        title: "Blockchain Technology Summit",
        description:
            "Join us at the Blockchain Technology Summit to explore the latest innovations and trends in the blockchain industry.",
        imageLink:
            "/media/event/2023-09-04/06f7740732af3a4ff9c851aa3e3eb895.jpg",
        mainLink:
            "https://www.coincarp.com/events/aptos-new-listing-on-digifinex/",
        socialMediaLink: "https://nrfbigshow.nrf.com/",
        typeOfEntry: {
            id: 2,
            entryTypeTitle: "Pre-register"
        },
        paidOrFree: {
            id: 2,
            title: "Free"
        },
        categoryList: [
            {
                id: 10,
                categoryTitle: "Workshop",
                color: null,
                visible: true
            },
            {
                id: 11,
                categoryTitle: "Hakaton",
                color: null,
                visible: true
            }
        ],
        eventDateRange: {
            id: 20,
            startDate: "2023-11-15",
            endDate: "2023-11-17",
            startTime: "10:00:00",
            endTime: "17:00:00"
        }
    },
    {
        id: 16,
        title: "Aptos Blockchain Upgrade",
        description:
            " Aptos is thrilled to announce a major blockchain upgrade, introducing cutting-edge features for enhanced security and scalability.",
        imageLink:
            "/media/event/2023-09-04/06f7740732af3a4ff9c851aa3e3eb895.jpg",
        mainLink:
            "https://www.coincarp.com/events/aptos-new-listing-on-digifinex/",
        socialMediaLink: "https://nrfbigshow.nrf.com/",
        typeOfEntry: {
            id: 2,
            entryTypeTitle: "Pre-register"
        },
        paidOrFree: {
            id: 2,
            title: "Free"
        },
        categoryList: [
            {
                id: 8,
                categoryTitle: "AMA",
                color: null,
                visible: true
            },
            {
                id: 12,
                categoryTitle: "Conference",
                color: null,
                visible: true
            }
        ],
        eventDateRange: {
            id: 18,
            startDate: "2023-11-15",
            endDate: "2023-11-17",
            startTime: "10:00:00",
            endTime: "17:00:00"
        }
    },
    {
        id: 17,
        title: "Aptos Blockchain Upgrade",
        description:
            " Aptos is thrilled to announce a major blockchain upgrade, introducing cutting-edge features for enhanced security and scalability.",
        imageLink:
            "/media/event/2023-09-04/06f7740732af3a4ff9c851aa3e3eb895.jpg",
        mainLink:
            "https://www.coincarp.com/events/aptos-new-listing-on-digifinex/",
        socialMediaLink: "https://nrfbigshow.nrf.com/",
        typeOfEntry: {
            id: 2,
            entryTypeTitle: "Pre-register"
        },
        paidOrFree: {
            id: 2,
            title: "Free"
        },
        categoryList: [
            {
                id: 8,
                categoryTitle: "AMA",
                color: null,
                visible: true
            },
            {
                id: 12,
                categoryTitle: "Conference",
                color: null,
                visible: true
            }
        ],
        eventDateRange: {
            id: 19,
            startDate: "2023-11-15",
            endDate: "2023-11-17",
            startTime: "10:00:00",
            endTime: "17:00:00"
        }
    },
    {
        id: 19,
        title: "Aptos Community Meetup",
        description:
            "Connect with fellow Aptos enthusiasts and developers at our community meetup. Share ideas and insights on the future of blockchain.",
        imageLink:
            "/media/event/2023-09-04/06f7740732af3a4ff9c851aa3e3eb895.jpg",
        mainLink:
            "https://www.coincarp.com/events/aptos-new-listing-on-digifinex/",
        socialMediaLink: "https://nrfbigshow.nrf.com/",
        typeOfEntry: {
            id: 2,
            entryTypeTitle: "Pre-register"
        },
        paidOrFree: {
            id: 2,
            title: "Free"
        },
        categoryList: [
            {
                id: 11,
                categoryTitle: "Hakaton",
                color: null,
                visible: true
            }
        ],
        eventDateRange: {
            id: 21,
            startDate: "2023-12-15",
            endDate: "2023-12-17",
            startTime: "10:00:00",
            endTime: "17:00:00"
        }
    },
    {
        id: 10,
        title: "aptos tes event 2",
        description: "Aptos event ",
        imageLink:
            "/media/event/2023-09-04/06f7740732af3a4ff9c851aa3e3eb895.jpg",
        mainLink:
            "https://www.coincarp.com/events/aptos-new-listing-on-digifinex/",
        socialMediaLink: "https://nrfbigshow.nrf.com/",
        typeOfEntry: {
            id: 2,
            entryTypeTitle: "Pre-register"
        },
        paidOrFree: {
            id: 2,
            title: "Free"
        },
        categoryList: [
            {
                id: 8,
                categoryTitle: "AMA",
                color: null,
                visible: true
            },
            {
                id: 12,
                categoryTitle: "Conference",
                color: null,
                visible: true
            }
        ],
        eventDateRange: {
            id: 12,
            startDate: "2023-12-19",
            endDate: "2023-12-21",
            startTime: "10:00:00",
            endTime: "17:00:00"
        }
    },
    {
        id: 11,
        title: "aptos tes event 2",
        description: "Aptos event ",
        imageLink: "",
        mainLink:
            "https://www.coincarp.com/events/aptos-new-listing-on-digifinex/",
        socialMediaLink: "https://nrfbigshow.nrf.com/",
        typeOfEntry: {
            id: 2,
            entryTypeTitle: "Pre-register"
        },
        paidOrFree: {
            id: 2,
            title: "Free"
        },
        categoryList: [
            {
                id: 8,
                categoryTitle: "AMA",
                color: null,
                visible: true
            },
            {
                id: 12,
                categoryTitle: "Conference",
                color: null,
                visible: true
            }
        ],
        eventDateRange: {
            id: 13,
            startDate: "2023-12-19",
            endDate: "2023-12-21",
            startTime: "10:00:00",
            endTime: "17:00:00"
        }
    },
    {
        id: 5,
        title: "NRF 2024",
        description:
            "Retail's Big Show is where the entire retail industry comes together to hear from the biggest changemakers, experience the latest innovations, and make the relationships that matter most.",
        imageLink:
            "/media/event2023-09-15/00067b6b77f1b7ca60e62ea17d706cd9.jpg",
        mainLink: "https://www.aptos.com/events",
        socialMediaLink: "https://nrfbigshow.nrf.com/",
        typeOfEntry: {
            id: 1,
            entryTypeTitle: "Register"
        },
        paidOrFree: {
            id: 1,
            title: "Paid"
        },
        categoryList: [
            {
                id: 12,
                categoryTitle: "Conference",
                color: null,
                visible: true
            }
        ],
        eventDateRange: {
            id: 5,
            startDate: "2024-01-14",
            endDate: "2024-01-14",
            startTime: "12:00:00",
            endTime: "16:00:00"
        }
    },
    {
        id: 12,
        title: "New Aptos event 2",
        description: "Aptos event ",
        imageLink:
            "/media/event/2023-09-04/06f7740732af3a4ff9c851aa3e3eb895.jpg",
        mainLink:
            "https://www.coincarp.com/events/aptos-new-listing-on-digifinex/",
        socialMediaLink: "https://nrfbigshow.nrf.com/",
        typeOfEntry: {
            id: 2,
            entryTypeTitle: "Pre-register"
        },
        paidOrFree: {
            id: 2,
            title: "Free"
        },
        categoryList: [
            {
                id: 8,
                categoryTitle: "AMA",
                color: null,
                visible: true
            },
            {
                id: 12,
                categoryTitle: "Conference",
                color: null,
                visible: true
            }
        ],
        eventDateRange: {
            id: 14,
            startDate: "2024-01-19",
            endDate: "2024-01-21",
            startTime: "10:00:00",
            endTime: "17:00:00"
        }
    },
    {
        id: 13,
        title: "New Aptos event 2",
        description: "Aptos event ",
        imageLink:
            "/media/event/2023-09-04/06f7740732af3a4ff9c851aa3e3eb895.jpg",
        mainLink:
            "https://www.coincarp.com/events/aptos-new-listing-on-digifinex/",
        socialMediaLink: "https://nrfbigshow.nrf.com/",
        typeOfEntry: {
            id: 2,
            entryTypeTitle: "Pre-register"
        },
        paidOrFree: {
            id: 2,
            title: "Free"
        },
        categoryList: [
            {
                id: 8,
                categoryTitle: "AMA",
                color: null,
                visible: true
            },
            {
                id: 12,
                categoryTitle: "Conference",
                color: null,
                visible: true
            }
        ],
        eventDateRange: {
            id: 15,
            startDate: "2024-01-19",
            endDate: "2024-01-21",
            startTime: "10:00:00",
            endTime: "17:00:00"
        }
    },
    {
        id: 14,
        title: "New Aptos event 2",
        description: "Aptos event ",
        imageLink:
            "/media/event/2023-09-04/06f7740732af3a4ff9c851aa3e3eb895.jpg",
        mainLink:
            "https://www.coincarp.com/events/aptos-new-listing-on-digifinex/",
        socialMediaLink: "https://nrfbigshow.nrf.com/",
        typeOfEntry: {
            id: 2,
            entryTypeTitle: "Pre-register"
        },
        paidOrFree: {
            id: 2,
            title: "Free"
        },
        categoryList: [
            {
                id: 8,
                categoryTitle: "AMA",
                color: null,
                visible: true
            },
            {
                id: 12,
                categoryTitle: "Conference",
                color: null,
                visible: true
            }
        ],
        eventDateRange: {
            id: 16,
            startDate: "2024-02-20",
            endDate: "2024-03-11",
            startTime: "10:00:00",
            endTime: "17:00:00"
        }
    },
    {
        id: 15,
        title: "New Aptos event 2",
        description: "Aptos event ",
        imageLink:
            "/media/event/2023-09-04/06f7740732af3a4ff9c851aa3e3eb895.jpg",
        mainLink:
            "https://www.coincarp.com/events/aptos-new-listing-on-digifinex/",
        socialMediaLink: "https://nrfbigshow.nrf.com/",
        typeOfEntry: {
            id: 2,
            entryTypeTitle: "Pre-register"
        },
        paidOrFree: {
            id: 2,
            title: "Free"
        },
        categoryList: [
            {
                id: 8,
                categoryTitle: "AMA",
                color: null,
                visible: true
            },
            {
                id: 12,
                categoryTitle: "Conference",
                color: null,
                visible: true
            }
        ],
        eventDateRange: {
            id: 17,
            startDate: "2024-02-20",
            endDate: "2024-03-11",
            startTime: "10:00:00",
            endTime: "17:00:00"
        }
    }
];
