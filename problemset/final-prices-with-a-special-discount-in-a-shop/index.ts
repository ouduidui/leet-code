/**
 * 单调栈
 * @desc 时间复杂度 O(N)  空间复杂度 O(N)
 * @param prices
 * @returns
 */
export function finalPrices(prices: number[]): number[] {
  const n = prices.length
  const ans = new Array(n).fill(0)
  const stack = []
  for (let i = n - 1; i >= 0; i--) {
    while (stack.length && stack[stack.length - 1] > prices[i])
      stack.pop()

    ans[i] = stack.length === 0 ? prices[i] : prices[i] - stack[stack.length - 1]
    stack.push(prices[i])
  }
  return ans
}
