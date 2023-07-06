interface IApiNews {
    emtpy: boolean;
    first: boolean;
    last: false;
    number: number;
    numberOfElements: number;
    pageable: IApiPageable
    content: IApiNewsContent[];
}

interface IApiNewsContent {
    category: IApiCategory;
    id: number;
    imageLink: string;
}

interface IApiPageable {
    offset: number;
    pageNumber: number;
    pageSize: number;
    paged: boolean;
    sort: {
        empty: boolean;
        sorted: boolean;
        unsorted: boolean;
    }
    totalElements: number;
    totalPages: number;
}

