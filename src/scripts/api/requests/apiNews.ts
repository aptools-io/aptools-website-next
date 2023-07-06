import { Api } from "../api";

const getNewsData = async (limit = 10, categoryId = 1 ): Promise<IApiProject[]> => {
    const api = new Api(false, true);

    const limitString = limit ? `&limit=${limit}` : "";
    const categoryIdString = categoryId ? `&categoryId=${categoryId}` : "";
    return api.get(`/api/news/get/news?isApproved=true${limitString}${categoryIdString}`) as unknown as IApiProject[];
};


const getNewsCategoriesData = async (): Promise<IApiProject[]> => {
    const api = new Api(false, true);
    return api.get("/api/category/get/all") as unknown as IApiProject[];
};

const news = {
    getNewsData,
    getNewsCategoriesData
};

export default news;