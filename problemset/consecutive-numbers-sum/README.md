# 连续整数求和

> 难度：困难
>
> https://leetcode.cn/problems/consecutive-numbers-sum/

## 题目

给定一个正整数 `n`，返回 **连续正整数满足所有数字之和为 `n` 的组数** 。 

### 示例

#### 示例 1:

```
输入: n = 5
输出: 2
解释: 5 = 2 + 3，共有两组连续整数([5],[2,3])求和后为 5。
```

#### 示例 2:

```
输入: n = 9
输出: 3
解释: 9 = 4 + 5 = 2 + 3 + 4
```

#### 示例 3:

```
输入: n = 15
输出: 4
解释: 15 = 8 + 7 = 4 + 5 + 6 = 1 + 2 + 3 + 4 + 5
```

## 解题

```ts 
/**
 * 数学
 * @desc 时间复杂度 O(√N)  空间复杂度 O(1)
 * @param n
 * @returns
 */
export function consecutiveNumbersSum(n: number): number {
  let ans = 0
  const bound = 2 * n

  // 如果 k 是奇数，则当 n 可以被 k 整除时，正整数 n 可以表示成 k 个连续正整数之和
  // 如果 k 是偶数，则当 n 不可以被 k 整除且 2n 可以被 k 整除时，正整数 n 可以表示成 k 个连续正整数之和
  const isKConsecutive = (n: number, k: number): boolean =>
    k % 2 === 1
      ? (n % k === 0)
      : (n % k !== 0 && 2 * n % k === 0)

  for (let k = 1; k * (k + 1) <= bound; k++)
    if (isKConsecutive(n, k)) ans++

  return ans
}
```