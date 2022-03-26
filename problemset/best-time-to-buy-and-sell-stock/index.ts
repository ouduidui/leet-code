/**
 * 暴力解法
 * @desc 时间复杂度 O(N^2)  空间复杂度 O(1)
 * @param prices
 */
export function maxProfit(prices: number[]): number {
  const len = prices.length
  let result = 0
  for (let i = 0; i < len - 1; i++) {
    const price1 = prices[i]
    let price2 = price1
    for (let j = i + 1; j < len; j++)
      price2 = Math.max(price2, prices[j])

    result = Math.max(result, price2 - price1)
  }

  return result
}

/**
 * 一次遍历
 * @desc 时间复杂度 O(N)  空间复杂度 O(1)
 * @param prices
 */
export function maxProfit2(prices: number[]): number {
  let minPrice = Number.MAX_VALUE
  let result = 0
  for (let i = 0; i < prices.length; i++) {
    if (prices[i] < minPrice)
      minPrice = prices[i]
    else if (prices[i] - minPrice > result)
      result = prices[i] - minPrice
  }

  return result
}
