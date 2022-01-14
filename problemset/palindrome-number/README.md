# 回文数

> 难度：简单
>
> https://leetcode-cn.com/problems/palindrome-number/

## 题目

给你一个整数 `x` ，如果 `x` 是一个回文整数，返回 `true` ；否则，返回 `false` 。

回文数是指正序（从左向右）和倒序（从右向左）读都是一样的整数。例如，`121` 是回文
，而 `123` 不是。

### 示例

#### 示例 1：

```
输入：x = 121
输出：true
```

#### 示例 2：

```
输入：x = -121
输出：false
解释：从左向右读, 为 -121 。 从右向左读, 为 121- 。因此它不是一个回文数。
```

#### 示例 3：

```
输入：x = 10
输出：false
解释：从右向左读, 为 01 。因此它不是一个回文数。
```

#### 示例 4：

```
输入：x = -101
输出：false
```

## 解法

### 暴力解法

```typescript
/**
 * 暴力解法
 * @desc 时间复杂度 => O(N)  空间复杂度 => O(1)
 * @param x {number}
 * @return {boolean}
 */
export function isPalindrome(x: number): boolean {
  if (x < 0 || (x % 10 === 0 && x !== 0)) return false;

  const s = String(x);
  return s.split('').reverse().join('') === s;
}
```

### 反转一半数字

```typescript
/**
 * 反转一半数字
 * @desc 时间复杂度 => O(log n)  空间复杂度 => O(1)
 * @param x {number}
 * @return {boolean}
 */
export function isPalindrome1(x: number): boolean {
  if (x < 0 || (x % 10 === 0 && x !== 0)) return false;

  let revertedNumber: number = 0;
  while (x > revertedNumber) {
    revertedNumber = (x % 10) + revertedNumber * 10;
    x = Math.floor(x / 10);
  }

  return x === revertedNumber || x === Math.floor(revertedNumber / 10);
}
```
