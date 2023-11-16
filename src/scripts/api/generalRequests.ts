import { checkLogined } from "src/scripts/common/user";
import { auth } from "src/scripts/api/requests";

const getGeneralRequests = async (context) => {
    const user = (await checkLogined(context, auth)).data || {};
    return {
        user
    };
};

export default getGeneralRequests;
