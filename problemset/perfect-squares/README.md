# 完全平方数

> 难度：中等
>
> https://leetcode-cn.com/problems/perfect-squares/

## 题目

给你一个整数 `n` ，**返回** 和为 `n` 的完全平方数的最少数量 。

**完全平方数** 是一个整数，其值等于另一个整数的平方；换句话说，其值等于一个整数自乘的积。例如，1、4、9 和 16 都是完全平方数，而 3 和 11 不是。

 
### 示例 

#### 示例 1：

```
输入：n = 12
输出：3 
解释：12 = 4 + 4 + 4
```

#### 示例 2：

```
输入：n = 13
输出：2
解释：13 = 4 + 9
```

## 解题

### 动态规划

```ts
/**
 * 动态规划
 * @desc 时间复杂度 O(N√N)  空间复杂度 O(N)
 * @param n
 * @returns
 */
export function numSquares(n: number): number {
  const f = new Array(n + 1).fill(0)
  for (let i = 1; i <= n; i++) {
    let min = Number.MAX_VALUE
    // 枚举所有小于等于 i 的完全平方数，更新最小步数
    for (let j = 1; j * j <= i; j++)
      min = Math.min(min, f[i - j * j])

    f[i] = min + 1
  }
  return f[n]
}
```

### 数学

[四平方和定理](https://baike.baidu.com/item/%E5%9B%9B%E5%B9%B3%E6%96%B9%E5%92%8C%E5%AE%9A%E7%90%86)证明了任何一个整数都可以被表示为至多四个正整数的平方和。者给出了本题的答案的上界。

同时，四平方和定理包含一个更强的结论：当且仅当 `n ≠ 4^k × (8m + 7)` 时，`n` 可以被表示为至多三个正整数的平方和。因此，当 `n = 4^k × (8m + 7)` 时， `n` 只能被表示为四个正整数的平方和，此时我们可以直接返回 4 。

当 `n ≠ 4^k × (8m + 7)` 时，我们需要判断到底有多少个完全平方数能够表示 `n` 。

- 答案为 1 ，则必有 n 为完全平方数，这很好判断；
- 答案为 2 ，则有 `n = a² + b²`，我们只需要枚举所有的`a (1 ≤ a ≤ √n)`，判断 `n - a²`是否为完全平方数即可；
- 答案为 3 ，我们只需要通过排除法来确定答案。


```ts
/**
 * 数学
 * @desc 时间复杂度 O(√N)  空间复杂度 O(1)
 * @param n
 * @returns
 */
export function numSquares2(n: number): number {
  // 判断是否为完全平方数
  const isPerfectSquare = (x: number): boolean => x === (Math.sqrt(x) >> 0) ** 2

  // 判断是否为 4^k(8m+7)
  const checkAnswerFour = (x: number): boolean => {
    while (x % 4 === 0) x /= 4
    return x % 8 === 7
  }

  if (isPerfectSquare(n)) return 1
  if (checkAnswerFour(n)) return 4

  for (let i = 1; i * i <= n; i++) {
    const j = n - i * i
    if (isPerfectSquare(j)) return 2
  }

  return 3
}
```