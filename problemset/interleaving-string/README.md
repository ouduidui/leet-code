# 交错字符串

> 难度：中等
>
> https://leetcode-cn.com/problems/interleaving-string/

## 题目

给定三个字符串 `s1`、`s2`、`s3`，请你帮忙验证 `s3` 是否是由 `s1` 和 `s2` 交错 组
成的。

两个字符串 `s` 和 `t` **交错** 的定义与过程如下，其中每个字符串都会被分割成若干
`非空` 子字符串：

- `s = s1 + s2 + ... + sn`
- `t = t1 + t2 + ... + tm`
- `|n - m| <= 1`
- **交错** 是 `s1 + t1 + s2 + t2 + s3 + t3 + ...` 或者
  `t1 + s1 + t2 + s2 + t3 + s3 + ...`

提示：`a + b` 意味着字符串 `a` 和 `b` 连接。

### 示例

#### 示例 1：

![interleaving-string](https://user-images.githubusercontent.com/54696834/159102065-5117e776-e69d-4b7b-9cfa-557775489f11.jpg)

```
输入：s1 = "aabcc", s2 = "dbbca", s3 = "aadbbcbcac"
输出：true
```

#### 示例 2：

```
输入：s1 = "aabcc", s2 = "dbbca", s3 = "aadbbbaccc"
输出：false
```

#### 示例 3：

```
输入：s1 = "", s2 = "", s3 = ""
输出：true
```

## 解题

### 动态规划

```typescript
/**
 * 动态规划
 * @desc 时间复杂度 O(MN)   空间复杂度 O(MN)
 * @param s1 {string}
 * @param s2 {string}
 * @param s3 {string}
 * @return {boolean}
 */
export function isInterleave(s1: string, s2: string, s3: string): boolean {
  if (s1 === '') return s3 === s2;
  if (s2 === '') return s3 === s1;

  const m = s1.length;
  const n = s2.length;
  const t = s3.length;

  // 如果长度不符合，直接返回false
  if (t !== m + n) return false;

  const dp: boolean[][] = new Array(m + 1)
    .fill([])
    .map(() => new Array(n + 1).fill(false));

  dp[0][0] = true;

  for (let i = 0; i <= m; i++) {
    for (let j = 0; j <= n; j++) {
      // 获取对应的字符
      const s = s3.charAt(i + j - 1);

      if (i > 0) {
        dp[i][j] = dp[i][j] || (dp[i - 1][j] && s === s1.charAt(i - 1));
      }

      if (j > 0) {
        dp[i][j] = dp[i][j] || (dp[i][j - 1] && s === s2.charAt(j - 1));
      }
    }
  }

  return dp[m][n];
}
```

### 动态规划 - 滑动数组

```typescript
/**
 * 动态规划 - 滚动数组
 * @desc 时间复杂度 O(MN)   空间复杂度 O(N)
 * @param s1 {string}
 * @param s2 {string}
 * @param s3 {string}
 * @return {boolean}
 */
export function isInterleave2(s1: string, s2: string, s3: string): boolean {
  if (s1 === '') return s3 === s2;
  if (s2 === '') return s3 === s1;

  const m = s1.length;
  const n = s2.length;
  const t = s3.length;

  if (t !== m + n) return false;

  const dp = new Array(n + 1).fill(false);
  dp[0] = true;

  for (let i = 0; i <= m; i++) {
    for (let j = 0; j <= n; j++) {
      const s = s3[i + j - 1];
      if (i > 0) {
        dp[j] = dp[j] && s === s1.charAt(i - 1);
      }

      if (j > 0) {
        dp[j] = dp[j] || (dp[j - 1] && s === s2.charAt(j - 1));
      }
    }
  }

  return dp[n];
}
```
