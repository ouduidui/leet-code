# 4的幂

> 难度：简单
>
> https://leetcode-cn.com/problems/power-of-four/

## 题目

给定一个整数，写一个函数来判断它是否是 `4` 的幂次方。如果是，返回 `true` ；否则，返回 `false` 。

整数 `n` 是 `4` 的幂次方需满足：存在整数 `x` 使得 `n == 4^x`

 
### 示例

#### 示例 1：

```
输入：n = 16
输出：true
```

#### 示例 2：

```
输入：n = 5
输出：false
```

#### 示例 3：

```
输入：n = 1
输出：true
```

## 解题

### 二进制表示中 1 的位置

```ts
/**
 * 二进制表示中 1 的位置
 * @desc 时间复杂度 O(1)  空间复杂度 O(1)
 * @param n
 * @returns
 */
export function isPowerOfFour(n: number): boolean {
  return n > 0 && (n & (n - 1)) === 0 && (n & 0xAAAAAAA) === 0
}
```

### 取模性质

```ts
/**
 * 取模性质
 * @desc 时间复杂度 O(1)  空间复杂度 O(1)
 * @param n
 * @returns
 */
export function isPowerOfFour2(n: number): boolean {
  return n > 0 && (n & (n - 1)) === 0 && n % 3 === 1
}
```