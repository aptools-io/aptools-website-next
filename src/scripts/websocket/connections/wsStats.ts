import { WSocket } from "../websocket";

const openConnection = (dispatchState: React.Dispatch<React.SetStateAction<IWSocketStats>>) => {
    const ws = new WSocket();
    ws.open("/get_stats", dispatchState);
    return ws;
};

const closeConnection = (ws: WSocket) => {
    ws.close();
};

const stats = {
    openConnection,
    closeConnection
};

export default stats;