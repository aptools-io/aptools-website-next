interface IApiGeneralStats {
    "blockchain_info": IApiBlockchainData,
    "token_statistics": IApiTokenStatistics,
    "dex_tvl": IApiDex[],
    "dex_volumes": IApiDex[],
    "daily_unique_contract_addresses": IApiDex[],
    "daily_contract_transactions": IApiDex[],
}

interface IApiDex {
    "dex": string,
    "chart": IPoint[]
}

interface IApiTokenStatistics {
    "3d": IApiTokenStatisticsBy,
    "7d": IApiTokenStatisticsBy,
    "24h": IApiTokenStatisticsBy,
}

interface IApiTokenStatisticsBy {
    "tokens_by_receivers": IApiTokenStatisticsInfo[],
    "tokens_by_senders": IApiTokenStatisticsInfo[],
    "tokens_by_total": IApiTokenStatisticsInfo[]
}

interface IApiTokenStatisticsInfo {
    "rank": number,
    "symbol": string,
    "token_name": string,
    "blockchain_name": string,
    "number": number
}

interface IApiBlockchainData {
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
