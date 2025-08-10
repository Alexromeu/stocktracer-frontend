import SMACalc from "./SMA";


const EMACalc = (prices: number[], period: number) => {
  var k = 2/(period + 1);
 
  const emaArray = [SMACalc(prices, period)];
 
  for (var i = 1; i < prices.length; i++) {
    emaArray.push(prices[i] * k + emaArray[i - 1] * (1 - k));
  }
  return emaArray;
}

export default EMACalc;

//the return an array to know the last EMA select the last in array 