# 统计各位数字都不同的数字个数

> 难度：中等
>
> https://leetcode-cn.com/problems/count-numbers-with-unique-digits/

## 题目

给你一个整数 `n` ，统计并返回各位数字都不同的数字 `x` 的个数，其中 `0 <= x < 10^n` 。
 
### 示例

#### 示例 1：

```
输入：n = 2
输出：91
解释：答案应为除去 11、22、33、44、55、66、77、88、99 外，在 0 ≤ x < 100 范围内的所有数字。 
```

#### 示例 2：

```
输入：n = 0
输出：1
```

## 解题

```ts
/**
 * 排列组合
 * @desc 时间复杂度 O(N)  空间复杂度 O(1)
 * @param n
 * @returns
 */
export function countNumbersWithUniqueDigits(n: number): number {
  if (n === 0) return 1
  if (n === 1) return 10

  let res = 10
  let cur = 9
  for (let i = 0; i < n - 1; i++) {
    cur *= 9 - i
    res += cur
  }

  return res
}
```