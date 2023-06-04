import { Api } from "../api"

const getData = async () => {
    const api = new Api(false);
    return await api.get("/projects1");
}

const projects = {
    getData
}

export default projects;