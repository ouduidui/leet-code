# 第 N 个神奇数字

> 难度：困难
>
> https://leetcode.cn/problems/nth-magical-number/

## 题目

一个正整数如果能被 `a` 或 `b` 整除，那么它是神奇的。

给定三个整数 `n` , `a` , `b` ，返回第 `n` 个神奇的数字。因为答案可能很大，所以返回答案 对 `10^9 + 7` **取模** 后的值。

### 示例

#### 示例 1：

```
输入：n = 1, a = 2, b = 3
输出：2
```

#### 示例 2：

```
输入：n = 4, a = 2, b = 3
输出：6
```

## 解题

```ts 
/**
 * 找规律
 * @desc 时间复杂度 O(a+b)  空间复杂度 O(1)
 * @param n
 * @param a
 * @param b
 * @returns
 */
export function nthMagicalNumber(n: number, a: number, b: number): number {
  const MOD = 1000000007

  const gcd = (a: number, b: number): number => b !== 0 ? gcd(b, a % b) : a
  const lcm = (a: number, b: number): number => Math.floor(a * b / gcd(a, b))

  const c = lcm(a, b)
  const m = Math.floor(c / a) + Math.floor(c / b) - 1
  const r = n % m
  const res = c * Math.floor(n / m) % MOD
  if (r === 0)
    return res

  let addA = a; let addB = b
  for (let i = 0; i < r - 1; ++i) {
    if (addA < addB)
      addA += a

    else
      addB += b
  }
  return (res + Math.min(addA, addB) % MOD) % MOD
}
```