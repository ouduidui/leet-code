# 质数排列

> 难度：简单
>
> https://leetcode.cn/problems/prime-arrangements/

## 题目

请你帮忙给从 `1` 到 `n` 的数设计排列方案，使得所有的「质数」都应该被放在「质数索引」（索引从 1 开始）上；你需要返回可能的方案总数。

让我们一起来回顾一下「质数」：质数一定是大于 `1` 的，并且不能用两个小于它的正整数的乘积来表示。

由于答案可能会很大，所以请你返回答案 **模 mod 10^9 + 7** 之后的结果即可。

### 示例

#### 示例 1：

```
输入：n = 5
输出：12
解释：举个例子，[1,2,5,4,3] 是一个有效的排列，但 [5,2,3,4,1] 不是，因为在第二种情况里质数 5 被错误地放在索引为 1 的位置上。
```

#### 示例 2：
```
输入：n = 100
输出：682289015
```

## 解题

```ts 
/**
 * 质数判断 + 组合数学
 * @desc 时间复杂度 O(N^(3/2))  空间复杂度 O(1)
 * @param n
 * @returns
 */
export function numPrimeArrangements(n: number): number {
  const MOD = 10 ** 9 + 7
  let numPrimes = 0
  for (let i = 2; i <= n; i++)
    if (isPrime(i)) numPrimes++

  let res = 1
  let m = n - numPrimes
  while (numPrimes > 0) {
    res = res % MOD
    res *= numPrimes
    numPrimes--
  }
  while (m > 0) {
    res = res % MOD
    res *= m
    m--
  }
  return res

  function isPrime(n: number) {
    if (n <= 1) return false

    for (let i = 2; i ** 2 <= n; i++)
      if (n % i === 0) return false

    return true
  }
}
```