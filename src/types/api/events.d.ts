interface IApiEvent {
    id: number;
    title: string;
    description: string;
    imageLink: string;
    socialMediaLink: string;
    typeOfEntry: {
        id: number;
        entryTypeTitle: string;
    };
    categoryList: {
        id: number;
        categoryTitle: string;
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

interface IApiEventSingle {
    test: string;
}

interface IApiEventCategory {
    id: number;
    categoryTitle: string;
    visible: boolean;
}
