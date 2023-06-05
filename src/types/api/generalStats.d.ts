interface IApiBlockchainInfo {
    "active_account_24h": number,
    "active_account_peak": number,
    "registered_account_24h": number,
    "registered_account_peak": number,
    "dex_trading_volume": number,
    "total_value_locked": number,
    "total_earned_by_validators": number,
    "total_validators": number,
    "total_wallets": number,
    "total_contracts": number,
    "total_staked": number,
    "apt_reward": number,
    "contract_deployers_24h": number,
    "contract_deployers_peak": number,
    "user_transactions_24h": number,
    "user_transactions_peak": number,
    "gas_price": number,
    "tps_peak_30d": number,
    "gas_unit_price_24h": number,
    "gas_unit_price_peak": number,
    "mint_1000_nfts": number,
    "mint_1000_nfts_usd": number,
    "launched": number,
    "tps_plot_24h": IPoint[],
    "slot_time_h": "137ms",
    "vol_24h": number,
    "market_cap": number,
    "24h_trans": {
        "total": number,
        "per_second": number
    },
    "trans_history": {
        "hourly": IPoint[],
        "daily": IPoint[],
        "all_time": IPoint[],
    },
    "token_price_chart": {
        "hourly": IPoint[],
        "daily": IPoint[],
        "all_time": IPoint[],
    },
    "low_high_price": {
        "24h": IApiLowHighPrice
        "7d": IApiLowHighPrice
        "14d": IApiLowHighPrice
    }
}
interface IApiLowHighPrice {
    "high": number,
    "low": number,
    "high_btc": number,
    "low_btc": number,
    "prices": IPoint[]
}
