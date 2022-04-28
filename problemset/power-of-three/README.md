# 3的幂

> 难度：简单
>
> https://leetcode-cn.com/problems/power-of-three/

## 题目

给定一个整数，写一个函数来判断它是否是 `3` 的幂次方。如果是，返回 `true` ；否则，返回 `false` 。

整数 `n` 是 `3` 的幂次方需满足：存在整数 `x` 使得 `n == 3^x`

 
### 示例

#### 示例 1：

```
输入：n = 27
输出：true
```

#### 示例 2：

```
输入：n = 0
输出：false
```

#### 示例 3：

```
输入：n = 9
输出：true
```

#### 示例 4：

```
输入：n = 45
输出：false
```

## 解题

### 试除法

```ts 
/**
 * 试除法
 * @desc 时间复杂度 O(logN)  空间复杂度 O(1)
 * @param n
 * @returns
 */
export function isPowerOfThree(n: number): boolean {
  while (n && n % 3 === 0) n /= 3
  return n === 1
}
```

### 判断是否为最大 3 的幂的约数

```ts
/**
 * 判断是否为最大 3 的幂的约数
 * @desc 时间复杂度 O(1)  空间复杂度 O(1)
 * @param n
 * @returns
 */
export function isPowerOfThree2(n: number): boolean {
  return n > 0 && Math.pow(3, 19) % n === 0
}
```