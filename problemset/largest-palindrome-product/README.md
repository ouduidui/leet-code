# 最大回文数乘积

> 难度：困难
>
> https://leetcode-cn.com/problems/largest-palindrome-product/

## 题目

给定一个整数 `n` ，**返回** 可表示为两个 `n` 位整数乘积的 **最大回文整数** 。因为答案可能非常大，所以返回它对 1337 **取余** 。

 
### 示例

#### 示例 1:

```
输入：n = 2
输出：987
解释：99 x 91 = 9009, 9009 % 1337 = 987
```

#### 示例 2:

```
输入： n = 1
输出： 9
```

## 解题

```ts
/**
 * 枚举
 * @desc 时间复杂度 O(10^2n)  空间复杂度 O(1)
 * @param n
 * @returns
 */
export function largestPalindrome(n: number): number {
  if (n === 1) return 9

  // 上限值
  const upper = 10 ** n - 1
  for (let left = upper; left > upper / 10; left--) {
    const right = String(left).split('').reverse().join('')
    // 得到回文数
    const p = BigInt(String(left) + right)
    let x = BigInt(upper)
    while (x * x >= p) {
      // x 是 p 的因子
      if (p % x === BigInt(0))
        return Number(p % BigInt(1337))
      x--
    }
  }

  return -1
}
```