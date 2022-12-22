# N 次操作后的最大分数和

> 难度：困难
>
> https://leetcode.cn/problems/maximize-score-after-n-operations/

## 题目

给你 `nums` ，它是一个大小为 `2 * n` 的正整数数组。你必须对这个数组执行 `n` 次操作。

在第 `i` 次操作时（操作编号从 `1` 开始），你需要：

- 选择两个元素 `x` 和 `y` 。
- 获得分数 `i * gcd(x, y)` 。
- 将 `x` 和 `y` 从 `nums` 中删除。

请你返回 n 次操作后你能获得的分数和最大为多少。

函数 `gcd(x, y)` 是 `x` 和 `y` 的最大公约数。

### 示例

#### 示例 1：

```
输入：nums = [1,2]
输出：1
解释：最优操作是：
(1 * gcd(1, 2)) = 1
```

#### 示例 2：

```
输入：nums = [3,4,6,8]
输出：11
解释：最优操作是：
(1 * gcd(3, 6)) + (2 * gcd(4, 8)) = 3 + 8 = 11
```

#### 示例 3：

```
输入：nums = [1,2,3,4,5,6]
输出：14
解释：最优操作是：
(1 * gcd(1, 5)) + (2 * gcd(2, 4)) + (3 * gcd(3, 6)) = 1 + 4 + 9 = 14
```

## 解题

```ts 
/**
 * 状态压缩 + 动态规划
 * @param nums
 * @returns
 */
export function maxScore(nums: number[]): number {
  const bitCount = (n: number) => n.toString(2).split('0').join('').length
  const m = nums.length
  const dp: number[] = new Array(1 << m).fill(0)
  const gcdTmp = new Array(m).fill(0).map(() => new Array(m).fill(0))
  for (let i = 0; i < m; ++i) {
    for (let j = i + 1; j < m; ++j)
      gcdTmp[i][j] = gcd(nums[i], nums[j])
  }
  const all = 1 << m
  for (let s = 1; s < all; ++s) {
    const t = bitCount(s)
    if ((t & 1) !== 0)
      continue

    for (let i = 0; i < m; ++i) {
      if (((s >> i) & 1) !== 0) {
        for (let j = i + 1; j < m; ++j) {
          if (((s >> j) & 1) !== 0)
            dp[s] = Math.max(dp[s], dp[s ^ (1 << i) ^ (1 << j)] + Math.floor(t / 2) * gcdTmp[i][j])
        }
      }
    }
  }
  return dp[all - 1]

  function gcd(num1: number, num2: number) {
    while (num2 !== 0) {
      const temp = num1
      num1 = num2
      num2 = temp % num2
    }
    return num1
  }
}
```