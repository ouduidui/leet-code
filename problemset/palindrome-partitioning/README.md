# 分割回文串

> 难度：中等
>
> https://leetcode-cn.com/problems/palindrome-partitioning/

## 题目

给你一个字符串 `s`，请你将 `s` 分割成一些子串，使每个子串都是 **回文串** 。返回
`s` 所有可能的分割方案。

**回文串** 是正着读和反着读都一样的字符串。

### 示例

#### 示例 1：

```
输入：s = "aab"
输出：[["a","a","b"],["aa","b"]]
```

#### 示例 2：

```
输入：s = "a"
输出：[["a"]]
```

## 解题

### 回溯 + 记忆化搜索

```typescript
/**
 * 回溯 + 记忆化搜索
 * @desc 时间复杂度 O(N*2^N)  空间复杂度 O(N^2)
 * @param s
 */
export function partition(s: string): string[][] {
  const len = s.length;
  const res: string[][] = [];
  // 存储已经识别过的子串，用于记忆化搜索
  const palindromeMap = new Map<string, boolean>();
  backtrack(0, []);
  return res;

  /**
   * 回溯
   * @param idx
   * @param temp
   */
  function backtrack(idx: number, temp: string[]) {
    // 如果遍历完全部字符串，更新res
    if (idx === len) {
      res.push(temp);
      return;
    }

    // 遍历剩余字符
    for (let i = idx; i < len; i++) {
      // 截取出对应子串
      const str = s.slice(idx, i + 1);
      // 判断是否为回文子串
      if (isPalindrome(str)) {
        backtrack(i + 1, [...temp, str]);
      }
    }
  }

  /**
   * 判断是否为回文子串
   * @param str
   */
  function isPalindrome(str: string): boolean {
    // 看看之前是否识别过相同子串，是的话直接返回之前识别的结果
    if (palindromeMap.has(str)) {
      return palindromeMap.get(str)!;
    }

    // 通过双指针方式识别子串
    let left = 0;
    let right = str.length - 1;

    while (left < right) {
      if (str[left] !== str[right]) {
        palindromeMap.set(str, false);
        return false;
      }
      left++;
      right--;
    }

    palindromeMap.set(str, true);
    return true;
  }
}
```

### 回溯 + 动态规划预处理

```typescript
/**
 * 回溯 + 动态规划预处理
 * @desc 时间复杂度 O(N*2^N)  空间复杂度 O(N^2)
 * @param s
 */
export function partition2(s: string): string[][] {
  const len = s.length;
  const dp: boolean[][] = new Array(len)
    .fill([])
    .map(() => new Array(len).fill(true));

  // 使用动态规划初始化子串是否为回文子串
  for (let i = len - 1; i >= 0; i--) {
    for (let j = i + 1; j < len; j++) {
      dp[i][j] = s[i] === s[j] && dp[i + 1][j - 1];
    }
  }

  const res: string[][] = [];
  backtrack(0, []);
  return res;

  function backtrack(idx: number, temp: string[]) {
    if (idx === len) {
      res.push(temp);
      return;
    }

    for (let i = idx; i < len; i++) {
      if (dp[idx][i]) {
        backtrack(i + 1, [...temp, s.slice(idx, i + 1)]);
      }
    }
  }
}
```
