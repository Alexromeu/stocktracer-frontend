const SMACalc = (prices: number[], period: number) => {
    let sma = prices.slice(0, period).reduce((sum, p) => sum + p, 0) / period;
    return sma;
}

export default SMACalc