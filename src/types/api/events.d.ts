interface IApiEvent {
    id: number;
    title: string;
    description: string;
    imageLink: string;
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
