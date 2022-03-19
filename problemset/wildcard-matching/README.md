# 通配符匹配

> 难度：困难
>
> https://leetcode-cn.com/problems/wildcard-matching/

## 题目

给定一个字符串 (`s`) 和一个字符模式 (`p`) ，实现一个支持 `?` 和 `*` 的通配符匹配
。

- `?` 可以匹配任何单个字符。
- `*` 可以匹配任意字符串（包括空字符串）。

两个字符串**完全匹配**才算匹配成功。

说明:

- `s` 可能为空，且只包含从 `a-z` 的小写字母。
- `p` 可能为空，且只包含从 `a-z` 的小写字母，以及字符 `?` 和 `*`。

### 示例

#### 示例 1:

```
输入:
s = "aa"
p = "a"
输出: false
解释: "a" 无法匹配 "aa" 整个字符串。
```

#### 示例 2:

```
输入:
s = "aa"
p = "*"
输出: true
解释: '*' 可以匹配任意字符串。
```

#### 示例 3:

```
输入:
s = "cb"
p = "?a"
输出: false
解释: '?' 可以匹配 'c', 但第二个 'a' 无法匹配 'b'。
```

#### 示例 4:

```
输入:
s = "adceb"
p = "*a*b"
输出: true
解释: 第一个 '*' 可以匹配空字符串, 第二个 '*' 可以匹配字符串 "dce".
```

#### 示例 5:

```
输入:
s = "acdcb"
p = "a*c?b"
输出: false
```

## 截图

### 动态规划

```typescript
/**
 * 动态规划
 * @desc 时间复杂度 O(MN)    空间复杂度 O(MN)
 * @param s {string}
 * @param p {string}
 */
export function isMatch(s: string, p: string): boolean {
  // 获取长度
  const sLen = s.length;
  const pLen = p.length;

  const dp: boolean[][] = Array(sLen + 1);
  for (let i = 0; i < dp.length; i++) {
    dp[i] = Array(pLen + 1).fill(false); // 默认为false
  }

  // 初始值为true
  dp[0][0] = true;

  for (let i = 1; i <= pLen; i++) {
    if (p[i - 1] === '*') dp[0][i] = true;
    else break;
  }

  for (let i = 1; i <= sLen; i++) {
    for (let j = 1; j <= pLen; j++) {
      if (p[j - 1] === '*') {
        dp[i][j] = dp[i][j - 1] || dp[i - 1][j];
      } else if (p[j - 1] === '?' || s[i - 1] === p[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1];
      }
    }
  }

  return dp[sLen][pLen];
}
```

#### debug

![wildcard-matching](https://user-images.githubusercontent.com/88995580/159103269-34a50f0a-dada-4019-966b-60f85fb5ed84.jpg)
