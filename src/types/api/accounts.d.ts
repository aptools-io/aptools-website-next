

interface IApiAccountsWallets {
    total_supply: string;
    total_value: string;
    wallets: IApiWallet[]
}
interface IApiWallet {
    address: string;
    balance_rank: number;
    percentage: number;
    total_balance: string;
}

interface IApiAccountStats {
    all_time_nft_profit: string;
    all_time_profit: string;
    best_nft_performer: IApiAccountNftPerformer;
    worst_nft_performer: IApiAccountNftPerformer;
    best_performer: IApiAccountPerformer;
    worst_performer: IApiAccountPerformer;
    current_balance: string;
    current_nft_balance: string;
    portfolio_chart: IPoint[]
    net_worth: string;
    token_stats: IApiAccountTokenStat[]
}

interface IApiAccountTokenStat {
    coin_name: string;
    coin_symbol: string;
    percentage: number;
}

interface IApiAccountNftPerformer {
    nft_collection: string;
    nft_name: string;
    nft_uri: string;
    volume_perc: string;
    volume_usd: string;
}

interface IApiAccountPerformer {
    coin_name: string;
    coin_symbol: string;
    volume_perc: string;
    volume_usd: string;
}

interface IApiAccountProfitabilities {
    total_pages: number;
    currentPage: number;
    profitability: IApiAccountProfitability[]
}

interface IApiAccountProfitability {
    coin: string,
    coin_name: string,
    approximately: boolean,
    remainder: string,
    remainder_usd: string,
    all_time_sold: string,
    all_time_sold_usd: string,
    all_time_bought: string,
    all_time_bought_usd: string,
    profit_usd: string,
    profit_percentage: string
}
   
interface IApiAccountTransactions {
    total: number;
    transactions: IApiAccountTransaction[]
}

interface IApiAccountTransaction {
    version: number;
    block: number;
    type: string;
    coin_name: string;
    coin_symbol: string;
    hash: string;
    account: string;
    value: number;
    value_usd: number;
    fee: number;
    profit_usd: number;
    timestamp: number;
}

interface IApiAccountTokens {
    total_coins: number;
    balance: IApiAccountToken[]
}


interface IApiAccountToken {
    balance: string;
    balanceUSD: string;
    coin: string;
    coin_name: string;
    profitUSD: string;
    profit_precentage: string;
    timestamp: number;
    wallet_percentage: number;
}

interface IApiAccountNftCollections {
    total: number;
    collections: IApiAccountNftCollection[]
}

interface IApiAccountNftCollection {
    id: number;
    name: string;
    net_worth: number;
    supply: number;
    volume_apt: number;
    volume_usd: number;
    uri: string;
}


interface IApiAccountNfts {
    total: number;
    nfts: IApiAccountNft[]
}

interface IApiAccountNft {
    floor_price: number;
    last_price_apt: number;
    last_price_usd: number;
    name: string;
    rank: number;
    rarity: string;
    uri: string;
}


interface IApiAccountResource {
    data: string;
    type: string;
}

interface IApiAccountInfo {
    auth_key: string;
    sequence_number: number;
}