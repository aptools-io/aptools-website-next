const { createServer } = require("http");
const { parse } = require("url");
const next = require("next");
const Consul = require("consul");
const dotenv = require("dotenv");
const fs = require("fs");

dotenv.config({
    path: ".env"
});

const port = parseInt(process.env.BASE_CUSTOM_SERVER_PORT || "3000", 10);
const dev = process.env.BASE_NEXT_START_ENV !== "prod";
const app = next({ dev });
const handle = app.getRequestHandler();

const registerService = async (consul) => {
    await consul.agent.service.register({
        name: `AptoolsAnalyticsWebsite-${process.env.BASE_ENV_FULL}`,
        id: `aptools-analytics-website-${process.env.BASE_ENV_FULL}-1`,
        check: {
            http: process.env.SITE_URL,
            interval: "15s",
            deregistercriticalserviceafter: "1m"
        }
    });
};

const writeKV = async (consul, data) => {
    if (data) {
        const production = process.env.BASE_ENV_FULL === "production" ? "prod" : process.env.BASE_ENV_FULL;
        consul.kv.set({
            key: `configurations-${production}/aptools-analytics-website`,
            value: JSON.stringify(data, null, 4)
        });
    }
};

/* const deregisterService = async (consul) => {
    await consul.agent.service.deregister({
        id: `aptools-analytics-website-${process.env.BASE_ENV_FULL}-1`
    });
}; */

app.prepare().then(() => {
    let consul = null;
    createServer((req, res) => {
        const parsedUrl = parse(req.url, true);
        handle(req, res, parsedUrl);
        req.on("close", () => {
            //if (consul) deregisterService(consul);
        });
    }).listen(port);

    if (!dev) {
        consul = new Consul({
            host: "192.168.1.29",
            port: 8500
        });
        registerService(consul);

        try {
            const envFileData = fs.readFileSync(".env", "utf8");
            const envParsed = dotenv.parse(envFileData);

            writeKV(consul, envParsed);
        } catch (err) {
            console.error(err);
        }
    }

    console.log(`> Server listening at http://localhost:${port} as ${dev ? "development" : process.env.BASE_NEXT_START_ENV}`);
});
