/**
 * 动态规划
 * @param s {string} 字符串
 * @param p {string} 正则串
 */
export function isMatch(s: string, p: string): boolean {
  if (!s || !p) return false

  // 获取长度
  const sLen: number = s.length
  const pLen: number = p.length

  const dp: Array<Array<boolean>> = Array(sLen + 1)
  for (let i = 0; i < dp.length; i++) {
    // 将项默认为false
    dp[i] = Array(pLen + 1).fill(false)
  }

  // 初始值为true
  dp[0][0] = true

  // 检测s为空串，但p不为空串情况
  // 要想匹配，只可能是右端是星号，它干掉一个字符后，把 p 变为空串
  for (let j = 1; j < pLen + 1; j++)
    if (p[j - 1] === '*') dp[0][j] = dp[0][j - 2]

  for (let i = 1; i < sLen + 1; i++) {
    for (let j = 1; j < pLen + 1; j++) {
      if (s[i - 1] === p[j - 1] || p[j - 1] === '.') {
        // 最右端的字符与最右端的正则相匹配
        dp[i][j] = dp[i - 1][j - 1]
      }
      else if (p[j - 1] === '*') {
        // 如果s[i - 1]与p[j - 1]不匹配，则判断p[j - 1]是否为"*"
        if (s[i - 1] === p[j - 2] || p[j - 2] === '.') {
          // 如果s[i-1] 和 p[j-2] 匹配
          dp[i][j]
            = dp[i][j - 2] // 让 p[j-2] 重复0次
            || dp[i - 1][j - 2] // 让 p[j-2] 重复1次
            || dp[i - 1][j] // 让 p[j-2] 重复大于等于2次
        }
        else {
          dp[i][j] = dp[i][j - 2]
        }
      }
    }
  }

  return dp[sLen][pLen]
}
