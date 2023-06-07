export class WSocket {
    base = process.env.BASE_WSS_URL;

    token = process.env.BASE_TOKEN;
    
    open = (url: string, wsRef: React.MutableRefObject<WebSocket>, setData: (data: any) => any) => {
        if ("WebSocket" in window) {
            wsRef.current = new WebSocket(`${this.base}${url}`);
            wsRef.current.onopen = () => {
                console.log("ws opened");
                wsRef.current.send(this.token);
            }
            wsRef.current.onclose = () => console.log("ws closed");

            const wsCurrent = wsRef.current;

            if (!wsCurrent) return;

            wsCurrent.onmessage = e => {
                /* if (isPaused) return; */
                const reader = new FileReader();
                reader.onload = () => {
                    if(typeof reader.result !== "string") return;
                    setData(JSON.parse(reader.result))
                };
                reader.readAsText(e.data);
            };
        } else {
            console.log("WebSocket NOT supported by your Browser!");
            return null;
        }
    };
}
