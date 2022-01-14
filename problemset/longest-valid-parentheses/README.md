# 最长有效括号

> 难度：困难
>
> https://leetcode-cn.com/problems/longest-valid-parentheses/

## 题目

给你一个只包含 `(` 和 `)` 的字符串，找出最长有效（格式正确且连续）括号子串的长度
。

### 示例

#### 示例 1：

```
输入：s = "(()"
输出：2
解释：最长有效括号子串是 "()"
```

#### 示例 2：

```
输入：s = ")()())"
输出：4
解释：最长有效括号子串是 "()()"
```

#### 示例 3：

```
输入：s = ""
输出：0
```

## 解法

### 暴力解法

```typescript
/**
 * 暴力解法
 * @desc 时间复杂度 O(N^2)  空间复杂度O(N)
 * @param s {string}
 * @return {number}
 */
export function longestValidParentheses(s: string): number {
  if (s.length < 2) return 0;

  let ans: number = 0;
  let left: number = 0;

  while (left < s.length - 1) {
    let maxLen: number = 0;
    let stack: string[] = [];

    for (let i: number = left; i < s.length; i++) {
      if (!stack.length) {
        stack.push(s[i]);
      } else if (stack[stack.length - 1] === '(' && s[i] === ')') {
        stack.pop();
      } else {
        stack.push(s[i]);
      }

      if (stack.length === 0) maxLen = i - left + 1;
    }

    ans = ans < maxLen ? maxLen : ans;
    left++;
  }

  return ans;
}
```

### 栈

```typescript
/**
 * 栈
 * @desc 时间复杂度 O(N)  空间复杂度O(N)
 * @param s {string}
 * @return {number}
 */
export function longestValidParentheses2(s: string): number {
  if (s.length < 2) return 0;

  let ans: number = 0;
  let stack: number[] = [-1];

  for (let i: number = 0; i < s.length; i++) {
    if (s[i] === '(') {
      // 当是'('的时候，将i放入栈中
      stack.push(i);
    } else {
      // 当是')'的时候，先弹出栈顶表示匹配当前有括号
      stack.pop();
      if (!stack.length) {
        // 如果栈为空的话，则代表当前')'没有匹配的'('，因此将其下标发回栈中
        // 此时i为最后一个没有匹配的右括号下标
        stack.push(i);
      } else {
        // 如果栈不为空，则i减去栈顶值为有效括号长度
        ans = Math.max(ans, i - stack[stack.length - 1]);
      }
    }
  }

  return ans;
}
```

### 动态规划

```typescript
/**
 * 动态规划
 * @desc 时间复杂度 O(N)  空间复杂度O(N)
 * @param s {string}
 * @return {number}
 */
export function longestValidParentheses3(s: string): number {
  if (s.length < 2) return 0;

  let ans: number = 0;
  // 初始化s.length长度的数组，填充为0
  // 默认是'('为0
  const dp: number[] = Array(s.length).fill(0);

  for (let i: number = 1; i < s.length; i++) {
    if (s[i] === ')') {
      if (s[i - 1] === '(') {
        // 当s[i]为'('同时s[i - 1]为'('时，dp[i]为dp[i - 2] + 2
        dp[i] = (i >= 2 ? dp[i - 2] : 0) + 2;
      } else if (i - dp[i - 1] > 0 && s[i - dp[i - 1] - 1] === '(') {
        // 当多个')'一起时，同时前面还有一个'('与s[i]组合的话，dp[i]为dp[i - 1] + dp[i - dp[i - 1] - 2] + 2
        dp[i] =
          dp[i - 1] + (i - dp[i - 1] >= 2 ? dp[i - dp[i - 1] - 2] : 0) + 2;
      }
      ans = Math.max(ans, dp[i]);
    }
  }

  return ans;
}
```

### 计数

```typescript
/**
 * 计数
 * @desc 时间复杂度 O(2N)  空间复杂度O(1)
 * @param s {string}
 * @return {number}
 */
export function longestValidParentheses4(s: string): number {
  if (s.length < 2) return 0;

  let ans: number = 0;
  let left: number = 0;
  let right: number = 0;

  for (let i: number = 0; i < s.length; i++) {
    if (s[i] === '(') {
      left++;
    } else {
      right++;
    }

    if (left === right) {
      ans = Math.max(ans, left + right);
    } else if (right > left) {
      left = right = 0;
    }
  }

  left = right = 0;
  for (let j: number = s.length - 1; j >= 0; j--) {
    if (s[j] === '(') {
      left++;
    } else {
      right++;
    }

    if (left === right) {
      ans = Math.max(ans, left + right);
    } else if (left > right) {
      left = right = 0;
    }
  }

  return ans;
}
```
