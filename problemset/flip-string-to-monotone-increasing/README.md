# 将字符串翻转到单调递增

> 难度：中等
>
> https://leetcode.cn/problems/flip-string-to-monotone-increasing/

## 题目

如果一个二进制字符串，是以一些 `0`（可能没有 `0`）后面跟着一些 `1`（也可能没有 `1`）的形式组成的，那么该字符串是 **单调递增** 的。

给你一个二进制字符串 `s`，你可以将任何 `0` 翻转为 `1` 或者将 `1` 翻转为 `0` 。

返回使 `s` 单调递增的最小翻转次数。

### 示例

#### 示例 1：
```
输入：s = "00110"
输出：1
解释：翻转最后一位得到 00111.
```
#### 示例 2：
```
输入：s = "010110"
输出：2
解释：翻转得到 011111，或者是 000111。
```
#### 示例 3：
```
输入：s = "00011000"
输出：2
解释：翻转得到 00000000。
```

## 解题

### 前缀和

```ts 
/**
 * 前缀和
 * @desc 时间复杂度 O(N)  空间复杂度 O(N)
 * @param s
 * @returns
 */
export function minFlipsMonoIncr(s: string): number {
  const len = s.length
  const p = new Array<number>(len + 1).fill(0)
  // 计算每个位置左边有多少个1
  for (let i = 0; i < len; i++)
    p[i + 1] = p[i] + (s[i] === '1' ? 1 : 0)

  let ans = Number.MAX_VALUE
  for (let i = 0; i <= len; i++)
    ans = Math.min(ans, p[i] + len - i - (p[len] - p[i]))

  return ans
}
```

### 动态规划

```ts 
/**
 * 动态规划
 * @desc 时间复杂度 O(N)  空间复杂度 O(1)
 * @param s
 * @returns
 */
export function minFlipsMonoIncr2(s: string): number {
  let dp1 = 0
  let dp2 = 0
  for (const ch of s) {
    dp2 = Math.min(dp1, dp2)
    ch === '1' ? dp1++ : dp2++
  }

  return Math.min(dp1, dp2)
}
```