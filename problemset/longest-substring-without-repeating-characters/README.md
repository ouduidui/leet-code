# 无重复字符的最长子串

> 难度：中等
>
> https://leetcode-cn.com/problems/longest-substring-without-repeating-characters/

## 题目

给定一个字符串`s`，请你找出其中不含有重复字符的**最长子串**的长度。

### 实例

#### 示例 1:

```
输入: s = "abcabcbb"
输出: 3
解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。
```

#### 示例 2:

```
输入: s = "bbbbb"
输出: 1
解释: 因为无重复字符的最长子串是 "b"，所以其长度为 1。
```

#### 示例 3:

```
输入: s = "pwwkew"
输出: 3
解释: 因为无重复字符的最长子串是"wke"，所以其长度为 3。
```

请注意，你的答案必须是**子串**的长度，"pwke"是一个子序列，不是子串。

#### 示例 4:

```
输入: s = ""
输出: 0
```

## 解法

### 暴力解法

```typescript
/**
 * 暴力解法
 * @desc 时间复杂度 O(N^2)  空间复杂度 O(N)
 * @param s {string} 字符串
 * @return {number}
 */
export function lengthOfLongestSubstring(s: string): number {
  if (s.length < 2) return s.length;

  let count: number = 0;
  // 遍历
  for (let i: number = 0; i < s.length; i++) {
    // 重置一下set，将第一个值放入
    const set: Set<string> = new Set(s[i]);
    // 遍历剩余的值
    for (let j: number = i + 1; j < s.length; j++) {
      // 如果set中包含，则更新count，结束遍历；否则将其加入set中
      if (set.has(s[j])) {
        count = Math.max(count, j - i);
        break;
      } else {
        set.add(s[j]);
      }

      // 遍历结束后，更新count
      if (j === s.length - 1) {
        count = Math.max(count, j - i + 1);
      }
    }
  }
  return count;
}
```

### 滑动窗口

```typescript
/**
 * 滑动窗口
 * @desc 时间复杂度 O(N)  空间复杂度 O(N)
 * @param s {string} 字符串
 * @return {number}
 */
export function lengthOfLongestSubstring2(s: string): number {
  if (s.length < 2) return s.length;

  const set: Set<string> = new Set();
  let count: number = 0;
  let leftPointer: number = 0; // 左游标
  let rightPointer: number = 0; // 右游标

  while (leftPointer < s.length) {
    // 当没有重复字符串时，移动右右边，并将字符串加入set
    while (rightPointer < s.length && !set.has(s[rightPointer])) {
      set.add(s[rightPointer]);
      rightPointer++;
    }

    // 更新count
    count = Math.max(count, rightPointer - leftPointer);
    // 移动左游标
    set.delete(s[leftPointer]);
    leftPointer++;
  }
  return count;
}
```
