# 最长回文子串

## 题目
给你一个字符串 s，找到 s 中最长的回文子串。

### 示例
#### 示例 1：
```
输入：s = "babad"
输出："bab"
解释："aba" 同样是符合题意的答案。
```
#### 示例 2：
```
输入：s = "cbbd"
输出："bb"
```
#### 示例 3：
```
输入：s = "a"
输出："a"
```
#### 示例 4：
```
输入：s = "ac"
输出："a"
```

## 解法

### 中心扩展
```typescript
/**
 * 中心扩展
 * @desc 时间复杂度 O(N^2)  空间复杂度 O(1)
 * @param s {string}
 * @return {string}
 */
export function longestPalindrome(s: string): string {
    if (s.length < 2) return s;

    // 初始化结果，默认为第一个字符
    let res: string = s[0]; 
    
    // 遍历，以i为中心点
    for (let i: number = 0; i < s.length; i++) {
        // 中心点为一个字符的情况
        if (i > 0 && s[i - 1] === s[i + 1]) {
            findPalindrome(i, i)
        }
        // 中心点为两个个字符的情况
        if (s[i] === s[i + 1]) {
            findPalindrome(i, i + 1)
        }
    }

    return res;

    /**
     * 查找回文子串
     * @param left {number}
     * @param right {number}
     */
    function findPalindrome(left: number, right: number): void {
        // 初始化中心点
        let palindrome = left === right ? s[left] : s[left] + s[right];
        // 向左右散开，一一比较
        while (s[--left] === s[++right] && left >= 0 && right < s.length) {
            palindrome = s[left] + palindrome + s[right];
        }
        // 返回最长值
        res = res.length < palindrome.length ? palindrome : res;
    }
}
```
