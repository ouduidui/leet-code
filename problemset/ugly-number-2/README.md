# 丑数 II

> 难度：中等
>
> https://leetcode-cn.com/problems/ugly-number-ii/

## 题目

给你一个整数 `n` ，请你找出并返回第 `n `个 **丑数** 。

**丑数** 就是只包含质因数 `2`、`3` 和/或 `5` 的正整数。

 
### 示例

#### 示例 1：

```
输入：n = 10
输出：12
解释：[1, 2, 3, 4, 5, 6, 8, 9, 10, 12] 是由前 10 个丑数组成的序列。
```

#### 示例 2：

```
输入：n = 1
输出：1
解释：1 通常被视为丑数。
```

## 解题

### 优先队列

```ts
/**
 * 优先队列
 * @desc 时间复杂度 O(NlogN)  空间复杂度 O(N)
 * @param n
 * @returns
 */
export function nthUglyNumber(n: number): number {
  const factors = [2, 3, 5]
  const set = new Set<number>()
  const queue = new PriorityQueue<number>((a, b) => a <= b)
  queue.offer(1)
  set.add(1)
  let ugly = 0
  for (let i = 0; i < n; i++) {
    ugly = queue.poll()!
    for (const factor of factors) {
      const next = ugly * factor
      if (!set.has(next)) {
        set.add(next)
        queue.offer(next)
      }
    }
  }

  return ugly
}
```

### 动态规划

```ts
/**
 * 动态规划
 * @desc 时间复杂度 O(N)  空间复杂度 O(N)
 * @param n
 * @returns
 */
export function nthUglyNumber2(n: number): number {
  const dp = new Array<number>(n + 1).fill(0)
  dp[1] = 1
  let p2 = 1
  let p3 = 1
  let p5 = 1
  for (let i = 2; i <= n; i++) {
    const num2 = dp[p2] * 2
    const num3 = dp[p3] * 3
    const num5 = dp[p5] * 5
    dp[i] = Math.min(num2, num3, num5)
    if (dp[i] === num2) p2++
    if (dp[i] === num3) p3++
    if (dp[i] === num5) p5++
  }
  return dp[n]
}
```