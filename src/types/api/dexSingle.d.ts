interface IApiDexSingle {
    "name": string;
    "coin_pairs": IApiDexCoinPair[];
    "total_24h_transactions": IPoint[];
    "total_24h_volume": IPoint[];
    "tvl": IPoint[]
}

interface IApiDexCoinPair {
    "24h_txns": number;
    "last_trade": string;
    "pair": string;
    "price": string;
    "tvl": number;
    "tvl_change": number;
    "type": string;
    "volume_24h": number;
    "volume_24h_change": number;
}