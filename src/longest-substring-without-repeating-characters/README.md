# 无重复字符的最长子串

## 题目

给定一个字符串`s`，请你找出其中不含有重复字符的**最长子串**的长度。

### 实例
#### 示例1:
输入: s = "abcabcbb"

输出: 3

解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。

#### 示例 2:

输入: s = "bbbbb"

输出: 1

解释: 因为无重复字符的最长子串是 "b"，所以其长度为 1。

#### 示例 3:

输入: s = "pwwkew"

输出: 3

解释: 因为无重复字符的最长子串是"wke"，所以其长度为 3。

请注意，你的答案必须是**子串**的长度，"pwke"是一个子序列，不是子串。

#### 示例 4:

输入: s = ""

输出: 0

## 解法

### 暴力解法
```typescript
/**
 * 暴力解法
 * @desc 时间复杂度 O(N^2)  空间复杂度 O(N)
 * @param s<string> 字符串
 * @return number
 */
export function lengthOfLongestSubstring(s: string): number {
    if (s.length < 2) return s.length;

    const arr: Array<string> = s.split('');
    let count: number = 0;

    // 遍历数组
    for (let i: number = 0; i < arr.length; i++) {
        // 重置一下set，将第一个值放入
        const set: Set<string> = new Set(arr[i]);
        // 遍历剩余的值
        for (let j: number = i + 1; j < arr.length; j++) {
            // 如果set中包含，则更新count，结束遍历；否则将其加入set中
            if (set.has(arr[j])) {
                count = count > j - i ? count : j - i;
                break;
            } else {
                set.add(arr[j])
            }

            // 遍历结束后，更新count
            if(j === arr.length - 1) {
                count = count > j - i + 1 ? count : j - i + 1;
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
 * @param s<string> 字符串
 * @return number
 */
export function lengthOfLongestSubstring2(s: string): number {
    if (s.length < 2) return s.length;

    const set: Set<string> = new Set();
    let count: number = 0;
    let leftPointer: number = 0;
    let rightPointer: number = 0;

    while (leftPointer < s.length) {
        while (rightPointer < s.length && !set.has(s[rightPointer])) {
            set.add(s[rightPointer]);
            rightPointer++;
        }

        count = Math.max(count, rightPointer - leftPointer);
        set.delete(s[leftPointer]);
        leftPointer++;
    }
    return count;
}
```
