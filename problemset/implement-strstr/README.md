# 实现 strStr()

> 难度：简单
>
> https://leetcode-cn.com/problems/implement-strstr/

## 题目

实现`strStr()`函数。

给你两个字符串 `haystack` 和 `needle` ，请你在 `haystack` 字符串中找出 `needle`
字符串出现的第一个位置（下标从 0 开始）。如果不存在，则返回 `-1` 。

### 说明：

当 `needle` 是空字符串时，我们应当返回什么值呢？这是一个在面试中很好的问题。

对于本题而言，当 `needle` 是空字符串时我们应当返回 `0` 。这与 C 语言
的` strstr()` 以及 Java 的 `indexOf()` 定义相符。

### 示例

#### 示例 1：

```
输入：haystack = "hello", needle = "ll"
输出：2
```

#### 示例 2：

```
输入：haystack = "aaaaa", needle = "bba"
输出：-1
```

#### 示例 3：

```
输入：haystack = "", needle = ""
输出：0
```

## 解法

### 暴力解法

```typescript
/**
 * 暴力解法
 * @desc 时间复杂度 O(N*M)  空间复杂度 O(1)
 * @param haystack {string}
 * @param needle {string}
 * @return {number}
 */
export function strStr(haystack: string, needle: string): number {
  if (!needle) return 0;

  let ans: number = -1;
  const len1: number = haystack.length;
  const len2: number = needle.length;

  if (!haystack || len2 > len1) return ans;

  for (let i: number = 0; i + len2 <= len1; i++) {
    ans = i;

    for (let j: number = 0; j < len2; j++) {
      if (haystack[i + j] !== needle[j]) {
        ans = -1;
        break;
      }
    }

    if (ans !== -1) return ans;
  }

  return ans;
}
```

### KMP 解法

> [什么是 KMP](./KMP.md)

```typescript
/**
 * KMP解法
 * @desc 时间复杂度 O(N+M)  空间复杂度 O(M)
 * @param haystack {string}
 * @param needle {string}
 * @return {number}
 */
export function strStr2(haystack: string, needle: string): number {
  if (!needle) return 0;

  const n: number = haystack.length;
  const m: number = needle.length;

  const pi: number[] = new Array(m).fill(0);

  // 算出needle的前缀函数
  for (let i: number = 1, j: number = 0; i < m; i++) {
    while (j > 0 && needle[i] !== needle[j]) {
      j = pi[j - 1];
    }
    if (needle[i] === needle[j]) j++;

    pi[i] = j;
  }

  for (let i: number = 0, j: number = 0; i < n; i++) {
    while (j > 0 && haystack[i] !== needle[j]) {
      j = pi[j - 1];
    }
    if (haystack[i] === needle[j]) j++;

    if (j === m) return i - m + 1;
  }

  return -1;
}
```
