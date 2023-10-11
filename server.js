const { createServer } = require("http");
const { parse } = require("url");
const next = require("next");
const Consul = require("consul");
const dotenv = require("dotenv");
const fs = require("fs");
const stringify = require("dotenv-stringify");
const { series } = require("async");
const { execSync } = require("child_process");

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

const writeKV = async (consul, data, production) => {
    if (data) {
        consul.kv.set({
            key: `configurations-${production}/aptools-analytics-website`,
            value: JSON.stringify(data, null, 4)
        });
    }
};

const readKV = async (consul, data, production) => {
    if (data) {
        const keysFromConsul = await consul.kv.get({
            key: `configurations-${production}/aptools-analytics-website`
        });
        if (keysFromConsul?.Value) {
            const parsedKeysFromConsul = JSON.parse(keysFromConsul.Value);

            const envFileData = fs.readFileSync(".env", "utf8");
            const envParsed = dotenv.parse(envFileData);
            Object.keys(envParsed).forEach((key) => {
                if (!parsedKeysFromConsul?.[key]) {
                    parsedKeysFromConsul[key] = envParsed[key];
                    writeKV(consul, parsedKeysFromConsul, production);
                }
            });
        }
    }
};

const rewriteV = async (consul, data, production, server) => {
    if (data) {
        const keysFromConsul = await consul.kv.get({
            key: `configurations-${production}/aptools-analytics-website`
        });
        if (keysFromConsul?.Value) {
            const parsedKeysFromConsul = JSON.parse(keysFromConsul.Value);

            const envParsed = process.env;

            Object.keys(envParsed).forEach((key) => {
                if (parsedKeysFromConsul[key] && envParsed[key] !== parsedKeysFromConsul[key]) {
                    envParsed[key] = parsedKeysFromConsul[key];
                    server.close();
                    app.close();

                    execSync(`${process.env.NODE_COMMAND || "npm"} run start:custom:u`, { stdio: "inherit", env: parsedKeysFromConsul, shell: "/bin/bash" });
                }
            });
        }
    }
};

const checkKeys = async (consul, data, production, server) => {
    setInterval(() => {
        readKV(consul, data, production);
        rewriteV(consul, data, production, server);
    }, 10000);
};

const appStart = () => {
    app.prepare().then(() => {
        let consul = null;
        const server = createServer((req, res) => {
            const parsedUrl = parse(req.url, true);
            handle(req, res, parsedUrl);
            req.on("close", () => {
                //if (consul) deregisterService(consul);
            });
        }).listen(port);

        if (!dev) {
            const notWrite = process.argv[2] === "--unconsul";
            consul = new Consul({
                host: "192.168.1.29",
                port: 8500
            });
            registerService(consul);
            const production = process.env.BASE_ENV_FULL === "production" ? "prod" : process.env.BASE_ENV_FULL;

            try {
                const envFileData = fs.readFileSync(".env", "utf8");
                const envParsed = dotenv.parse(envFileData);

                if (!notWrite) writeKV(consul, envParsed, production);
                checkKeys(consul, envParsed, production, server);
            } catch (err) {
                console.error(err);
            }
        }

        console.log(`> Server listening at http://localhost:${port} as ${dev ? "development" : process.env.BASE_NEXT_START_ENV}`);
    });
};

appStart();
