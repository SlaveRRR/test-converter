
export type CurrencyType = 'ETH' | 'USDT' | 'BTC'

export type CurrencyResponse = {
    asset_id_base: string;
    asset_id_quote: string;
    rate: number;
    time: string;
}