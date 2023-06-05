interface IWSocketStats {
    "epoch": number,
    "epoch_started": number,
    "slot": number,
    "slot_time_m": string,
    "tps": number,
    "price_usd": string,
    "price_btc": string,
    "price_diff_usd": string,
    "price_diff_btc": string,
    "transactions": IWSocketStatsTransaction[]
}

interface IWSocketStatsTransaction {
    "version": number,
    "hash": string,
    "type": string,
    "amount": string,
    "gas_used": string,
    "success": boolean,
    "timestamp": string
}
