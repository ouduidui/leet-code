# 2的幂

> 难度：简单
>
> https://leetcode-cn.com/problems/power-of-two/

## 题目

给你一个整数 n，请你判断该整数是否是 2 的幂次方。如果是，返回 true ；否则，返回 false 。

如果存在一个整数 x 使得 n == 2x ，则认为 n 是 2 的幂次方。

### 示例 

#### 示例 1：

```
输入：n = 1
输出：true
解释：20 = 1
```

#### 示例 2：

```
输入：n = 16
输出：true
解释：24 = 16
```

#### 示例 3：

```
输入：n = 3
输出：false
```

#### 示例 4：

```
输入：n = 4
输出：true
```

#### 示例 5：

```
输入：n = 5
输出：false
```

## 解题

### 暴力计算

```ts
/**
 * 暴力计算
 * @desc 时间复杂度 O(logN)  空间复杂度 O(1)
 * @param n
 * @returns
 */
export function isPowerOfTwo(n: number): boolean {
  while (n >= 2) n /= 2
  return n === 1
}
```

### 二进制表示

```ts
/**
 * 二进制表示
 * @desc 时间复杂度 O(1)  空间复杂度 O(1)
 * @param n
 * @returns
 */
export function isPowerOfTwo2(n: number): boolean {
  return n > 0 && (n & (n - 1)) === 0
}
```
