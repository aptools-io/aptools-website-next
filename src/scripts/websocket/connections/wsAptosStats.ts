import { setAptosStatsData, setTransactionsData, setWebsocket } from "src/scripts/redux/slices/statsAptosSlice";
import { AnyAction, Dispatch } from "@reduxjs/toolkit";
import { WSocket } from "../websocket";

const openConnection = (wsRef: React.MutableRefObject<WebSocket>, dispatch: Dispatch<AnyAction>) => {
    const ws = new WSocket();
    /* dispatch(setWebsocket({ ws, wsRef })); */
    ws.open("/get_stats", wsRef, (data: any) => dispatch(setAptosStatsData(data)));
};

const openFullConnection = (wsRef: React.MutableRefObject<WebSocket>, dispatch: Dispatch<AnyAction>, limit = 20) => {
    const ws = new WSocket();
   
    ws.open("/live_transactions", wsRef, (data: any) => { 
        dispatch(setWebsocket({ ws, wsRef: wsRef.current }));
        dispatch(setTransactionsData(data));
    }, limit);
};

const aptosStats = {
    openConnection,
    openFullConnection
};

export default aptosStats;