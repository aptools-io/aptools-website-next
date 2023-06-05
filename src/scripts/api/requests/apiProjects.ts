import { Api } from "../api";

const getData = async (): Promise<IApiProject[]> => {
    const api = new Api(false);
    return api.get("/projects1") as unknown as IApiProject[];
};

const projects = {
    getData
};

export default projects;