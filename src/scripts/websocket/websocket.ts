export class WSocket {
    base = process.env.BASE_WEBSOCKET_URL;

    version = "/v1";

    token = process.env.BASE_TOKEN;
    
    open = (url: string, wsRef: React.MutableRefObject<WebSocket>, setData: (data: any) => any, limit: number = null) => {
        if ("WebSocket" in window) {
            const endpoint = `${this.base}${this.version}${url}`;
            wsRef.current = new WebSocket(endpoint);
            wsRef.current.onopen = () => {
                console.log("ws opened");
                wsRef.current.send(this.token);
                if(limit) wsRef.current.send(`${limit}`);
            };
            wsRef.current.onclose = () => console.log("ws closed");

            const wsCurrent = wsRef.current;

            if (!wsCurrent) return;

            wsCurrent.onmessage = e => {
                /* if (isPaused) return; */
                const reader = new FileReader();
                reader.onload = () => {
                    if(typeof reader.result !== "string") return;
                    setData(JSON.parse(reader.result));
                };
                reader.readAsText(e.data);
            };
        } else {
            console.log("WebSocket NOT supported by your Browser!");
            return null;
        }
    };

    send = (wsRef: WebSocket, data: any) => {
        if(wsRef.readyState === WebSocket.OPEN)  wsRef.send(data);
    };
}
