export class WSocket {
    base = process.env.BASE_WSS_URL;

    token = process.env.BASE_TOKEN;

    wsCloseRequest = false;

    isWSfree = true;

    ws: WebSocket | null = null;

    close = () => {
        
        if(this.ws) this.ws.close();
        console.log(this.ws);
    };
    
    open = async (url: string, dispatchState: React.Dispatch<React.SetStateAction<unknown>>) => {
        if ("WebSocket" in window) {
            if (!this.isWSfree) return;
            this.ws = new WebSocket(`${this.base}${url}`);
            this.isWSfree = false;
    
            this.ws.onopen = () => {
                this.ws.send(this.token);
            };
            
            this.ws.binaryType = "blob";
            this.ws.onmessage = (event) => {
                if (this.wsCloseRequest) {
                    this.ws.send("kill me");
                    this.ws.close();
                    this.isWSfree = true;
                    return;
                }

                const reader = new FileReader();
                reader.onload = () => {
                    if(typeof reader.result === "string")
                        dispatchState(JSON.parse(reader.result));
                };
                reader.readAsText(event.data);
            };
            this.ws.onclose = () => {
                console.log("Connection is closed...");
            };
        } else {
            console.log("WebSocket NOT supported by your Browser!");
        }
    };
}
