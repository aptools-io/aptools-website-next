import { WSocket } from "../websocket";
import { setAptosStatsData } from "src/scripts/redux/slices/statsAptosSlice";
import { AnyAction, Dispatch } from "@reduxjs/toolkit";

const openConnection = (wsRef: React.MutableRefObject<WebSocket>, dispatch: Dispatch<AnyAction>) => {
    const ws = new WSocket();
    ws.open("/get_stats", wsRef, (data: any) => dispatch(setAptosStatsData(data)));
};

const aptosStats = {
    openConnection
};

export default aptosStats;