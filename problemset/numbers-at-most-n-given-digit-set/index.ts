/**
 * 数位动态规划
 * @desc 时间复杂度 O(KlogN)  空间复杂度 O(logN)
 * @param digits
 * @param n
 * @returns
 */
export function atMostNGivenDigitSet(digits: string[], n: number): number {
  const s = `${n}`
  const m = digits.length
  const k = s.length
  const dp: number[][] = new Array(k + 1).fill(0).map(() => new Array(2).fill(0))
  dp[0][1] = 1
  for (let i = 1; i <= k; i++) {
    for (let j = 0; j < m; j++) {
      if (digits[j][0] === s[i - 1])
        dp[i][1] = dp[i - 1][1]
      else if (digits[j][0] < s[i - 1])
        dp[i][0] += dp[i - 1][1]
      else
        break
    }
    if (i > 1)
      dp[i][0] += m + dp[i - 1][0] * m
  }
  return dp[k][0] + dp[k][1]
}

/**
 * 数学
 * @desc 时间复杂度 O(KlogN)  空间复杂度 O(logN)
 * @param digits
 * @param n
 * @returns
 */
export function atMostNGivenDigitSet2(digits: string[], n: number): number {
  const s = `${n}`
  const m = digits.length
  const k = s.length
  const bits = []
  let isLimit = true
  for (let i = 0; i < k; i++) {
    if (!isLimit) {
      bits.push(m - 1)
    }
    else {
      let selectIndex = -1
      for (let j = 0; j < m; j++) {
        if (digits[j][0] <= s[i])
          selectIndex = j

        else
          break
      }
      if (selectIndex >= 0) {
        bits.push(selectIndex)
        if (digits[selectIndex][0] < s[i])
          isLimit = false
      }
      else {
        let len = bits.length
        while (bits.length !== 0 && bits[bits.length - 1] === 0)
          bits.pop()

        if (bits.length !== 0) {
          const n = bits.length
          bits.splice(n - 1, 1, bits[n - 1] - 1)
        }
        else {
          len--
        }
        while (bits.length <= len)
          bits.push(m - 1)

        isLimit = false
      }
    }
  }
  let ans = 0
  for (let i = 0; i < bits.length; i++)
    ans = ans * m + (bits[i] + 1)

  return ans
}
