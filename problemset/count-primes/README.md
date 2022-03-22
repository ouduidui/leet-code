# 计数质数

> 难度：中等
>
> https://leetcode-cn.com/problems/count-primes/

## 题目

给定整数 `n` ，**返回** 所有小于非负整数  `n`  的质数的数量 。

### 示例

#### 示例 1：

```
输入：n = 10
输出：4
解释：小于 10 的质数一共有 4 个, 它们是 2, 3, 5, 7 。
```

#### 示例 2：

```
输入：n = 0
输出：0
```

#### 示例 3：

```
输入：n = 1
输出：0
```

## 解题

### 枚举

```typescript
/**
 * 枚举
 * @desc 时间复杂度 O(N√N)  空间复杂度 O(1)
 * @param n
 */
export function countPrimes(n: number): number {
  let ans = 0;
  for (let i = 2; i < n; i++) isPrimes(i) && ans++;
  return ans;

  function isPrimes(x: number): boolean {
    for (let i = 2; i * i <= x; i++) {
      if (x % i === 0) return false;
    }
    return true;
  }
}
```

### 埃氏筛

```typescript
/**
 * 埃氏筛
 * @desc 时间复杂度 O(Nlog(logN))  空间复杂度 O(N)
 * @param n
 */
export function countPrimes2(n: number): number {
  const isPrime = new Array(n).fill(true);

  let ans = 0;
  for (let i = 2; i < n; i++) {
    if (isPrime[i]) {
      ans += 1;
      for (let j = i * i; j < n; j += i) {
        isPrime[j] = false;
      }
    }
  }

  return ans;
}
```
