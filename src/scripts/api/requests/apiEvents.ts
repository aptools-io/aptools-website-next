import { Api } from "../api";

const getData = async (searchText: string = ""): Promise<any> => {
    const api = new Api(false, process.env.BASE_API3_URL, "");
    return api.get(
        "/find",
        {},
        { sortDate: "desc", search: searchText },
        {}
    ) as unknown as any;
};

const events = {
    getData
};

export default events;
