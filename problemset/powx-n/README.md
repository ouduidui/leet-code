# Pow(x, n)

> 难度：中等
>
> https://leetcode-cn.com/problems/powx-n/

## 题目

实现 `pow(x, n)` ，即计算 `x` 的 `n` 次幂函数。

示例 1：

```
输入：x = 2.00000, n = 10
输出：1024.00000
```

示例 2：

```
输入：x = 2.10000, n = 3
输出：9.26100
```

示例 3：

```
输入：x = 2.00000, n = -2
输出：0.25000
解释：2-2 = 1/22 = 1/4 = 0.25
```

## 解法

```typescript
/**
 * 迭代
 * @desc 时间复杂度 O(log n)  空间复杂度 O(1)
 * @param x
 * @param n
 */
export function myPow(x: number, n: number): number {
  if (n < 0) {
    x = 1 / x;
    n = -n;
  }
  let ans = 1;
  let xContribute = x;
  let isOdd = n % 2 === 1;

  while (n > 0) {
    if (n % 2 === 1) {
      ans *= xContribute;
    }
    xContribute *= xContribute;
    n = n >> 1;
  }

  return isOdd ? ans - 0.000000000000001 : ans;
}
```
