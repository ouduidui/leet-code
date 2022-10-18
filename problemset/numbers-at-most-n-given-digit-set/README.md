# 最大为 N 的数字组合

> 难度：困难
>
> https://leetcode.cn/problems/numbers-at-most-n-given-digit-set/

## 题目

给定一个按 **非递减顺序** 排列的数字数组 `digits` 。你可以用任意次数 `digits[i]` 来写的数字。例如，如果 `digits = ['1','3','5']`，我们可以写数字，如 '13', '551', 和 '1351315'。

返回 可以生成的小于或等于给定整数 `n` 的正整数的个数 。

### 示例

#### 示例 1：

```
输入：digits = ["1","3","5","7"], n = 100
输出：20
解释：
可写出的 20 个数字是：
1, 3, 5, 7, 11, 13, 15, 17, 31, 33, 35, 37, 51, 53, 55, 57, 71, 73, 75, 77.
```

#### 示例 2：

```
输入：digits = ["1","4","9"], n = 1000000000
输出：29523
解释：
我们可以写 3 个一位数字，9 个两位数字，27 个三位数字，
81 个四位数字，243 个五位数字，729 个六位数字，
2187 个七位数字，6561 个八位数字和 19683 个九位数字。
总共，可以使用D中的数字写出 29523 个整数。
```

#### 示例 3:

```
输入：digits = ["7"], n = 8
输出：1
```

## 解题

### 数位动态规划

```ts 
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
```


### 数学

```ts 
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
```