import { Api } from "../api";

const getData = async (): Promise<any> => {
    const api = new Api(false, process.env.BASE_API3_URL, "");
    return api.get("/find", {}, { sortDate: "desc" }, {}) as unknown as any;
};

const events = {
    getData
};

export default events;
