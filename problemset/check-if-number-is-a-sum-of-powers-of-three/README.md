# 判断一个数字是否可以表示成三的幂的和

> 难度：中等
>
> https://leetcode.cn/problems/check-if-number-is-a-sum-of-powers-of-three/

## 题目

给你一个整数 `n` ，如果你可以将 `n` 表示成若干个不同的三的幂之和，请你返回 `true` ，否则请返回 `false` 。

对于一个整数 `y` ，如果存在整数 `x` 满足 `y == 3^x` ，我们称这个整数 `y` 是三的幂。

### 示例

#### 示例 1：

```
输入：n = 12
输出：true
解释：12 = 3^1 + 3^2
```

#### 示例 2：

```
输入：n = 91
输出：true
解释：91 = 3^0 + 3^2 + 3^4
```

#### 示例 3：

```
输入：n = 21
输出：false
```

## 解题

```ts 
/**
 * 进制
 * @desc 时间复杂度 O(logN)  空间复杂度 O(1)
 * @param n
 * @returns
 */
export function checkPowersOfThree(n: number): boolean {
  while (n !== 0) {
    if (n % 3 === 2) return false
    n = (n / 3) >> 0
  }
  return true
}
```