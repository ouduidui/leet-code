# 统计不同回文子序列

> 难度：困难
>
> https://leetcode.cn/problems/count-different-palindromic-subsequences/

## 题目

给定一个字符串 `s`，返回 `s` 中不同的非空「回文子序列」个数 。

通过从 `s` 中删除 `0` 个或多个字符来获得子序列。

如果一个字符序列与它反转后的字符序列一致，那么它是「回文字符序列」。

如果有某个 `i` , 满足 `ai != bi` ，则两个序列 `a1, a2, ...` 和 `b1, b2, ...` 不同。

注意：

- 结果可能很大，你需要对 `10^9 + 7` 取模 。
 
### 示例

#### 示例 1：

```
输入：s = 'bccb'
输出：6
解释：6 个不同的非空回文子字符序列分别为：'b', 'c', 'bb', 'cc', 'bcb', 'bccb'。
注意：'bcb' 虽然出现两次但仅计数一次。
```

#### 示例 2：

```
输入：s = 'abcdabcdabcdabcdabcdabcdabcdabcddcbadcbadcbadcbadcbadcbadcbadcba'
输出：104860361
解释：共有 3104860382 个不同的非空回文子序列，104860361 对 10^9 + 7 取模后的值。
```

## 解题

```ts 
/**
 * 动态规划 + 二维数组
 * @desc 时间复杂度 O(N²)  空间复杂度 O(N²)
 * @param s
 * @returns
 */
export function countPalindromicSubsequences(s: string): number {
  const MOD = 10 ** 9 + 7
  const len = s.length
  const dp: number[][] = new Array(len).fill([])
    .map(() => new Array(len).fill(0))

  for (let i = 0; i < len; i++)
    dp[i][i] = 1

  for (let l = 2; l <= len; l++) {
    for (let i = 0; i + l <= len; i++) {
      const j = i + l - 1
      if (s[i] === s[j]) {
        let low = i + 1
        let high = j - 1
        while (low <= high && s[low] !== s[i])
          low++

        while (high >= low && s[high] !== s[j])
          high--

        if (low > high)
          dp[i][j] = (2 + dp[i + 1][j - 1] * 2) % MOD

        else if (low === high)
          dp[i][j] = (1 + dp[i + 1][j - 1] * 2) % MOD

        else
          dp[i][j] = (dp[i + 1][j - 1] * 2 % MOD - dp[low + 1][high - 1] + MOD) % MOD
      }
      else {
        dp[i][j] = ((dp[i + 1][j] + dp[i][j - 1]) % MOD - dp[i + 1][j - 1] + MOD) % MOD
      }
    }
  }

  return dp[0][len - 1]
}
```