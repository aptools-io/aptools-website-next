interface IApiEvent {
    id: number;
    title: string;
    description: string;
    imageLink: string;
    socialMediaLink: string;
    eventStatus: string;
    mainLink: string;
    location: { id: number; location: string };
    paidOrFree: { id: number; title: string };
    eventCost: number;
    typeOfEntry: {
        id: number;
        entryTypeTitle: string;
    };
    categoryList: {
        id: number;
        categoryTitle: string;
        color: string;
        visible: boolean;
    }[];
    eventDateRange: {
        id: number;
        startDate: string;
        endDate: string;
        startTime: string;
        endTime: string;
        event: null;
    };
    paidOrFree: {
        id: number;
        title: string;
    };
}
interface IApiEvents {
    content: IApiEvent[];
    totalElements: number;
    totalPages: number;
    sort: {
        empty: boolean;
        sotred: boolean;
        unsorted: boolean;
    };
    size: number;
    pageable: {
        offset: number;
        pageNumber: number;
        pageSize: number;
        paged: boolean;
        sort: {
            empty: boolean;
            sotred: boolean;
            unsorted: boolean;
        };
        unpaged: boolean;
    };
    numberOfElements: number;
    number: number;
    last: boolean;
    first: boolean;
    empty: boolean;
}

interface IApiEventCategory {
    id: number;
    categoryTitle: string;
    color: string;
    visible: boolean;
}

interface IApiEventSingle extends IApiEvent {
    contentList: IApiEventSingleContent[];
    url?: string;
    id?: number;
    eventList?: IApiEvent[];
}

interface IApiEventSingleContent {
    id: number;
    order: number;
    message: string;
    imageLink: string;
}

interface IApiEventsSlide {
    id: number;
    title: string;
    description: string;
    eventLink: string;
    imageLink: string;
    dateRange: {
        startDate: string;
        endDate: string;
        startTime: string;
        endTime: string;
    };
    visible: boolean;
}
