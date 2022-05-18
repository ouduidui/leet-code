# 乘法表中第k小的数

> 难度：困难
>
> https://leetcode.cn/problems/kth-smallest-number-in-multiplication-table/

## 题目

几乎每一个人都用 **乘法表**。但是你能在乘法表中快速找到第k小的数字吗？

给定高度 `m` 、宽度 `n` 的一张 `m * n` 的乘法表，以及正整数 `k` ，你需要返回表中第 `k` 小的数字。

### 示例

#### 例 1：

```
输入: m = 3, n = 3, k = 5
输出: 3
解释: 
乘法表:
1	2	3
2	4	6
3	6	9

第5小的数字是 3 (1, 2, 2, 3, 3).
```

#### 例 2：

```
输入: m = 2, n = 3, k = 6
输出: 6
解释: 
乘法表:
1	2	3
2	4	6

第6小的数字是 6 (1, 2, 2, 3, 4, 6).
```

## 解题

由于 `m` 和 `n` 很大，直接求出所有数字然后找到第 `k` 小会超出时间限制。不妨考虑一个反向问题：对于乘法表中的数字 `x` ，它是乘法表中第几小的数字？

求第几小等价于求有多少数字不超过 `x` 。我们可以遍历乘法表的每一行，对于乘法表的第 `i` 行，其数字均为 `i` 的倍数，因此不超过 `x` 的数字有 <img style="background: #fff" src="https://latex.codecogs.com/svg.latex?min([\frac{x}{i}],n)" /> 个，所以整个乘法表不超过 `x` 的数字个数为 <img style="background: #fff" src="https://latex.codecogs.com/svg.latex?\sum_{i=1}^{m}{min([\frac{x}{i}],n)}" />。

由于 <img style="background: #fff" src="https://latex.codecogs.com/svg.latex?i\le[\frac{x}{n}]" /> 时 <img style="background: #fff" src="https://latex.codecogs.com/svg.latex?[\frac{x}{i}]\ge%20n" /> ，上式可化简为 <img style="background: #fff" src="https://latex.codecogs.com/svg.latex?\[\frac{x}{n}]\times%20n+\sum_{i=[\frac{x}{n}]+1}^{m}{[\frac{x}{i}]}" />

由于 `x` 越大上式越大，`x` 越小上式越小，因此我们可以二分 `x` 找到答案，二分的初始边界为乘法表的元素范围，即 `[1,mn]` 。

```ts 
/**
 * 二分法
 * @desc 时间复杂度 O(MlogMN)  空间复杂度 O(1)
 * @param m
 * @param n
 * @param k
 * @returns
 */
export function findKthNumber(m: number, n: number, k: number): number {
  let left = 1
  let right = m * n
  while (left < right) {
    const x = left + ((right - left) >> 1)
    let count = ((x / n) >> 0) * n
    for (let i = ((x / n) >> 0) + 1; i <= m; ++i)
      count += (x / i) >> 0

    if (count >= k)
      right = x
    else
      left = x + 1
  }
  return left
}
```