# 二进制表示中质数个计算置位

> 难度：简单
>
> https://leetcode-cn.com/problems/prime-number-of-set-bits-in-binary-representation/

## 题目

给你两个整数 `left` 和 `right` ，在闭区间 `[left, right]` 范围内，统计并返回 **计算置位位数为质数** 的整数个数。

**计算置位位数** 就是二进制表示中 `1` 的个数。

- 例如， `21` 的二进制表示 `10101` 有 `3` 个计算置位。
 
### 示例

#### 示例 1：

```
输入：left = 6, right = 10
输出：4
解释：
6 -> 110 (2 个计算置位，2 是质数)
7 -> 111 (3 个计算置位，3 是质数)
9 -> 1001 (2 个计算置位，2 是质数)
10-> 1010 (2 个计算置位，2 是质数)
共计 4 个计算置位为质数的数字。
```

#### 示例 2：

```
输入：left = 10, right = 15
输出：5
解释：
10 -> 1010 (2 个计算置位, 2 是质数)
11 -> 1011 (3 个计算置位, 3 是质数)
12 -> 1100 (2 个计算置位, 2 是质数)
13 -> 1101 (3 个计算置位, 3 是质数)
14 -> 1110 (3 个计算置位, 3 是质数)
15 -> 1111 (4 个计算置位, 4 不是质数)
共计 5 个计算置位为质数的数字。
```

## 解题

### 数学 + 位运算

```ts
/**
 * 数学 + 位运算
 * @desc 时间复杂度 O((R-L)√(logR))  空间复杂度 O(1)
 * @param left
 * @param right
 * @returns
 */
export function countPrimeSetBits(left: number, right: number): number {
  let ans = 0

  for (let x = left; x <= right; x++)
    isPrime(bitCount(x)) && ans++

  return ans

  function isPrime(x: number): boolean {
    if (x < 2) return false

    for (let i = 2; i * i <= x; i++)
      if (x % i === 0) return false

    return true
  }

  function bitCount(x: number): number {
    return x.toString(2).split('0').join('').length
  }
}
```

### 判断质数优化

```ts
/**
 * 判断质数优化
 * @desc 时间复杂度 O((R-L))  空间复杂度 O(1)
 * @param left
 * @param right
 * @returns
 */
export function countPrimeSetBits2(left: number, right: number): number {
  let ans = 0

  for (let x = left; x <= right; x++) {
    // 用一个二进制数 mask=665772=10100010100010101100 来存储这些质数
    if (((1 << bitCount(x)) & 665772) !== 0)
      ++ans
  }

  return ans

  function bitCount(x: number): number {
    return x.toString(2).split('0').join('').length
  }
}
```