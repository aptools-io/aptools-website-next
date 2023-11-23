import { Api } from "../api";

const getData = async (search: string = "", sortDate: string = "desc", startDate: string = "", endDate: string = "", page: number = 0, limit: number = 20, paidOrFree: number = 0, categoryIds: number[] = null): Promise<any> => {
    const api = new Api(false, process.env.BASE_API3_URL, "");

    return api.post(
        "/find",
        {
            "content-type": "application/json"
        },
        {},
        {
            search,
            sortDate,
            eventDateRange: {
                startDate,
                endDate
            },
            typeOfEntry: null,
            page,
            limit,
            paidOrFree,
            categoryIds
        }
    ) as unknown as any;
};

const getEventData = async (id: string): Promise<any> => {
    const api = new Api(false, process.env.BASE_API3_URL, "");
    return api.get(`/find/by_id/${id}`, {}, {}, null) as unknown as any;
};

const getCategoriesData = async (): Promise<any> => {
    const api = new Api(false, process.env.BASE_API3_URL, "");
    return api.get("/category/get/all", {}, {}, null) as unknown as any;
};

const getSlidesData = async (): Promise<any> => {
    const api = new Api(false, process.env.BASE_API3_URL, "");
    return api.get("/slider/find", {}, {}, null) as unknown as any;
};

const events = {
    getData,
    getEventData,
    getCategoriesData,
    getSlidesData
};

export default events;
