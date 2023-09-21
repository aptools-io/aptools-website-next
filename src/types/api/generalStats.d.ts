interface IApiGeneralStats {
    blockchain_info: IApiBlockchainData;
    token_statistics: IApiTokenStatistics;
    top_statistics: IApiTopStatistics;
    top_tokens_by_volume: IApiTokenVolume[];
    dex_tvl: IApiDex[];
    dex_volumes: IApiDex[];
    daily_unique_contract_addresses: IApiDex[];
    daily_contract_transactions: IApiDex[];
    markets: IApiMarket[];
    transactions_plot: IApiAddressTransactionsPlot;
    addresses_plot: IApiAddressTransactionsPlot;
    daily_new_created_wallets: IPoint[];
    active_unique_addresses: IApitActiveUniqueAddresses;
}

interface IApitActiveUniqueAddresses {
    day: number;
    week: number;
    month: number;
}
interface IApiTokenVolume {
    change: number;
    token: string;
    volume_24h: number;
}
interface IApiWalletsUsage {
    "7d": IPoint[];
    "30d": IPoint[];
    "90d": IPoint[];
    all: IPoint[];
}

interface IApiAccountsPortfolioUsage {
    "7d": IPoint[];
    "30d": IPoint[];
    "90d": IPoint[];
    all: IPoint[];
}
interface IApiWallets {
    name: string;
    chart: IPoint[];
}

interface IApiAddressTransactionsPlot {
    daily: IPoint[];
    hourly: IPoint[];
}

interface IApiMarket {
    dex: string;
    pairs: IApiMarketPair[];
}

interface IApiMarketPair {
    pair: string;
    price: string;
    liquidity: string;
    "24h_txns": number;
    "24h_volume": number;
    "24hours_change": number;
    "1hour_change": number;
}

interface IApiTokenSchelude {
    category: string;
    chart: IPoint[];
}

interface IApiDex {
    dex: string;
    chart: IPoint[];
}

interface IApiTopStatistics {
    "3d": IApiTopStatisticsBy;
    "7d": IApiTopStatisticsBy;
    "24h": IApiTopStatisticsBy;
}
interface IApiTopStatisticsBy {
    top_apt_receivers: IApiTopStatisticsInfo[];
    top_apt_senders: IApiTopStatisticsInfo[];
}

interface IApiTopStatisticsInfo {
    rank: number;
    percentage: number;
    address: string;
    total_txn: string;
}

interface IApiTokenStatistics {
    "3d": IApiTokenStatisticsBy;
    "7d": IApiTokenStatisticsBy;
    "24h": IApiTokenStatisticsBy;
}

interface IApiTokenStatisticsBy {
    tokens_by_receivers: IApiTokenStatisticsInfo[];
    tokens_by_senders: IApiTokenStatisticsInfo[];
    tokens_by_total: IApiTokenStatisticsInfo[];
}

interface IApiTokenStatisticsInfo {
    rank: number;
    symbol: string;
    token_name: string;
    blockchain_name: string;
    number: number;
}

interface IApiBlockchainData {
    active_account_24h: number;
    active_account_peak: number;
    registered_account_24h: number;
    registered_account_peak: number;
    dex_trading_volume: number;
    total_value_locked: number;
    total_earned_by_validators: number;
    total_validators: number;
    total_wallets: number;
    total_contracts: number;
    total_staked: number;
    apt_reward: number;
    contract_deployers_24h: number;
    contract_deployers_peak: number;
    user_transactions_24h: number;
    user_transactions_peak: number;
    gas_price: number;
    tps_peak_30d: number;
    gas_unit_price_24h: number;
    gas_unit_price_peak: number;
    mint_1000_nfts: number;
    mint_1000_nfts_usd: number;
    launched: number;
    tps_plot_24h: IPoint[];
    slot_time_h: "137ms";
    vol_24h: number;
    market_cap: number;
    "24h_trans": {
        total: number;
        per_second: number;
    };
    trans_history: {
        hourly: IPoint[];
        daily: IPoint[];
        all_time: IPoint[];
    };
    token_price_chart: {
        hourly: IPoint[];
        daily: IPoint[];
        all_time: IPoint[];
    };
    low_high_price: {
        "24h": IApiLowHighPrice;
        "7d": IApiLowHighPrice;
        "14d": IApiLowHighPrice;
    };
}
interface IApiLowHighPrice {
    high: number;
    low: number;
    high_btc: number;
    low_btc: number;
    prices: IPoint[];
}
