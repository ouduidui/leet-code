# 数字1的个数

> 难度：困难
>
> https://leetcode-cn.com/problems/number-of-digit-one/

## 题目

给定一个整数 `n`，计算所有小于等于 `n` 的非负整数中数字 `1` 出现的个数。

 
### 示例

#### 示例 1：

```
输入：n = 13
输出：6
```

#### 示例 2：

```
输入：n = 0
输出：0
```

## 解题

当数位为<img style="background: #fff" src="https://latex.codecogs.com/svg.latex?10^k" />时，最后的`k`个数位每<img style="background: #fff" src="https://latex.codecogs.com/svg.latex?10^{k+1}" />个数都会循环一次，并且包含<img style="background: #fff" src="https://latex.codecogs.com/svg.latex?10^k" />个`1`，由于`n`包含<img style="background: #fff" src="https://latex.codecogs.com/svg.latex?[\frac{n}{10^{k+1}}]" />个完整的循环，那么这一部分的`1`的个数为<img style="background: #fff" src="https://latex.codecogs.com/svg.latex?[\frac{n}{10^{k+1}}]\times10^k" />。不在循环中的部分还有<img style="background: #fff" src="https://latex.codecogs.com/svg.latex?n\mod10^{k+1}" />个数，这一部分的`1`的个数为<img style="background: #fff" src="https://latex.codecogs.com/svg.latex?n\mod10^{k+1}-10^k+1" />，如果这个值小于`0`，那么调整为出现`0`次，如果这个值大于<img style="background: #fff" src="https://latex.codecogs.com/svg.latex?10^k" />，那么调整为出现<img style="background: #fff" src="https://latex.codecogs.com/svg.latex?10^k" />次。

```ts
/**
 * 枚举每一数位上 1 的个数
 * @desc 时间复杂度 O(logN)  空间复杂度 O(1)
 * @param n
 * @returns
 */
export function countDigitOne(n: number): number {
  let ans = 0
  for (let m = 1; n >= m; m *= 10)
    ans += ((n / (m * 10)) >> 0) * m + Math.min(Math.max(n % (m * 10) - m + 1, 0), m)

  return ans
}
```