interface IApiNews {
    content: IApiNewsContent[];
    emtpy: boolean;
    first: boolean;
    last: false;
    number: number;
    numberOfElements: number;
    pageable: IApiPageable;
    size: number;
    sort: {
        empty: boolean;
        sorted: boolean;
        unsorted: boolean;
    }
    totalElements: number;
    totalPages: number;
}

interface IApiNewsContent {
    category: IApiNewsCategory;
    id: number;
    imageLink?: string;
    insertedAt: number[];
    title?: string;
    description?: string;
}

interface IApiNewsCategory {
    categoryTitle: string;
    id: number;
}

interface IApiPageable {
    offset: number;
    pageNumber: number;
    pageSize: number;
    paged: boolean;
    unpaged: boolean;
}

