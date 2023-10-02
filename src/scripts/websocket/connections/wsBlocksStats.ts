import { setAptosStatsData, setTransactionsData, setWebsocket } from "src/scripts/redux/slices/statsAptosSlice";
import { AnyAction, Dispatch } from "@reduxjs/toolkit";
import { setBlocks } from "src/scripts/redux/slices/blocksSlice";
import { WSocket } from "../websocket";

const openFullConnection = (wsRef: React.MutableRefObject<WebSocket>, dispatch: Dispatch<AnyAction>, limit = 20) => {
    const ws = new WSocket();

    ws.open(
        "/live_blocks",
        wsRef,
        (data: any) => {
            dispatch(setWebsocket({ ws, wsRef: wsRef.current }));
            dispatch(setBlocks(data));
        },
        limit
    );
};

const blocksStats = {
    openFullConnection
};

export default blocksStats;
