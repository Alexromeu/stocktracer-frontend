

type MACDResult = {
    macd: number[];
    signal: number[];
    histogram: number[];
}

function MACDCalc(
    prices: number[],
    shortPeriod: number = 12,
    longPeriod: number = 26,
    signalPeriod: number = 9,
    EMA: (array: number[], period: number) => number[]

): MACDResult {
    const shortEMA = EMA(prices, shortPeriod);
  const longEMA = EMA(prices, longPeriod);

  // Align lengths by trimming the longer EMA
  const minLength = Math.min(shortEMA.length, longEMA.length);
  const macdLine = shortEMA.slice(-minLength).map((val, i) => val - longEMA.slice(-minLength)[i]);

  const signalLine = EMA(macdLine, signalPeriod);
  const histogram = macdLine.slice(-signalLine.length).map((val, i) => val - signalLine[i]);

  return {
    macd: macdLine.slice(-signalLine.length),
    signal: signalLine,
    histogram
  };
}


export default MACDCalc;