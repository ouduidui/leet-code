# 不同的子序列

> 难度：困难
>
> https://leetcode-cn.com/problems/distinct-subsequences/

## 题目

给定一个字符串 `s` 和一个字符串 `t` ，计算在 `s` 的子序列中 `t` 出现的个数。

字符串的一个 **子序列** 是指，通过删除一些（也可以不删除）字符且不干扰剩余字符相
对位置所组成的新字符串。（例如，`"ACE"` 是 `"ABCDE"` 的一个子序列，而 `"AEC"` 不
是）

题目数据保证答案符合 32 位带符号整数范围。

### 示例

#### 示例 1：

```
输入：s = "rabbbit", t = "rabbit"
输出：3
解释：
如下图所示, 有 3 种可以从 s 中得到 "rabbit" 的方案。
```

- **rabb**b**it**
- **ra**b**bbit**
- **rab**b**bit**

#### 示例 2：

```
输入：s = "babgbag", t = "bag"
输出：5
解释：
如下图所示, 有 5 种可以从 s 中得到 "bag" 的方案。
```

- **ba**b**g**bag
- **ba**bgba**g**
- **b**abgb**ag**
- ba**b**gb**ag**
- babg**bag**

## 解法

### 记忆化搜索 + 回溯

```typescript
/**
 * 记忆化搜索 + 回溯
 * @desc 时间复杂度 O(M!)  空间复杂度 O(M)
 * @param s
 * @param t
 */
export function numDistinct(s: string, t: string): number {
  const m = s.length;
  const n = t.length;
  const map = new Map<string, number>();
  return dfs(0, '');

  function dfs(i: number, temp: string): number {
    const j = temp.length;

    if (j === n && temp === t) {
      return 1;
    }
    if (j === n || i === m || n - j > m - i) {
      return 0;
    }

    // 记忆化
    const hash = `${i}-${j}`;
    if (map.has(hash)) {
      return map.get(hash)!;
    }

    let val = 0;
    while (i < m) {
      if (s[i] === t[j]) {
        val += dfs(i + 1, temp + s[i]);
      }
      i++;
    }

    map.set(hash, val);
    return val;
  }
}
```

### 动态规划

```typescript
/**
 * 动态规划
 * @desc 时间复杂度 O(NM)  空间复杂度 O(NM)
 * @param s
 * @param t
 */
export function numDistinct2(s: string, t: string): number {
  const m = s.length;
  const n = t.length;
  if (m < n) {
    return 0;
  }

  const dp: number[][] = new Array(m + 1)
    .fill([])
    .map(() => new Array(n + 1).fill(0));

  for (let i = 0; i <= m; i++) {
    dp[i][0] = 1;
  }

  for (let i = 1; i < m + 1; i++) {
    for (let j = 1; j < n + 1; j++) {
      if (s[i - 1] === t[j - 1]) {
        dp[i][j] = dp[i - 1][j] + dp[i - 1][j - 1];
      } else {
        dp[i][j] = dp[i - 1][j];
      }
    }
  }

  return dp[m][n];
}
```
