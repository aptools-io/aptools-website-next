import { Api } from "../api";

const postErrorToLogger = async (type: string, title: string, info: string = null, avoidErrorRecursion: boolean = false) => {
    const api = new Api(false, process.env.BASE_API_LOGGER, null, avoidErrorRecursion);
    return api.post(
        "/errors/new",
        {
            Authorization: "Bearer a23ert*HJGJGHg@HHJ*KKLDFD*sNSFSDAAAa@12343455@HHJ*KKLDFDlmDFDSFS"
        },
        {},
        {
            serviceName: "AptoolsAnalyticsWebsite", // requeired
            timestamp: Math.floor(new Date().getTime() / 1000), // requeired
            errorType: type, // requeired
            env: process.env.BASE_LOGGER_ENV, // requeired
            errorTitle: title, // required,
            error: info,
            customData: "{}"
        }
    );
};

const logger = {
    postErrorToLogger
};

export default logger;
