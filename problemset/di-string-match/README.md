# 增减字符串匹配

> 难度：简单
>
> https://leetcode.cn/problems/di-string-match/

## 题目

由范围 `[0,n]` 内所有整数组成的 `n + 1` 个整数的排列序列可以表示为长度为 `n` 的字符串 `s` ，其中:

- 如果 `perm[i] < perm[i + 1]` ，那么 `s[i] == 'I'` 
- 如果 `perm[i] > perm[i + 1]` ，那么 `s[i] == 'D'` 

给定一个字符串 `s` ，重构排列 `perm` 并返回它。如果有多个有效排列`perm`，则返回其中 **任何一个** 。

### 示例 

#### 示例 1：

```
输入：s = "IDID"
输出：[0,4,1,3,2]
```

#### 示例 2：

```
输入：s = "III"
输出：[0,1,2,3]
```

#### 示例 3：

```
输入：s = "DDI"
输出：[3,2,0,1]
```

## 解题

```ts 
/**
 * 贪心算法
 * @desc 时间复杂度 O(N)  空间复杂度 O(1)
 * @param s
 * @returns
 */
export function diStringMatch(s: string): number[] {
  const len = s.length
  const ans = new Array(len + 1).fill(0)
  let low = 0
  let high = len

  for (let i = 0; i < len; i++)
    ans[i] = s[i] === 'I' ? low++ : high--

  ans[len] = low

  return ans
}
```