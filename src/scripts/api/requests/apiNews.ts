import { Api } from "../api";

const getNewsData = async (): Promise<IApiProject[]> => {
    const api = new Api(false, true);
    return api.get("/api/news/get/news?isApproved=false&limit=10") as unknown as IApiProject[];
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