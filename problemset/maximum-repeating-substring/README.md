# 最大重复子字符串

> 难度：简单
>
> https://leetcode.cn/problems/maximum-repeating-substring/

## 题目

给你一个字符串 `sequence` ，如果字符串 `word` 连续重复 `k` 次形成的字符串是 `sequence` 的一个子字符串，那么单词 `word` 的 重复值为 `k` 。单词 `word` 的 **最大重复值** 是单词 `word` 在 `sequence` 中最大的重复值。如果 `word` 不是 `sequence` 的子串，那么重复值 `k` 为 `0` 。

给你一个字符串 `sequence` 和 `word` ，请你返回 **最大重复值** `k` 。

 

#### 示例 1：

```
输入：sequence = "ababc", word = "ab"
输出：2
解释："abab" 是 "ababc" 的子字符串。
```

#### 示例 2：

```
输入：sequence = "ababc", word = "ba"
输出：1
解释："ba" 是 "ababc" 的子字符串，但 "baba" 不是 "ababc" 的子字符串。
```

#### 示例 3：

```
输入：sequence = "ababc", word = "ac"
输出：0
解释："ac" 不是 "ababc" 的子字符串。
```

## 解题

```ts 
/**
 * 枚举 + 动态规划
 * @desc 时间复杂度 O(MN)  空间复杂度 O(N)
 * @param sequence
 * @param word
 * @returns
 */
export function maxRepeating(sequence: string, word: string): number {
  const n = sequence.length
  const m = word.length

  if (n < m)
    return 0

  const f: number[] = new Array(n).fill(0)
  for (let i = m - 1; i < n; ++i) {
    let valid = true
    for (let j = 0; j < m; ++j) {
      if (sequence[i - m + j + 1] !== word[j]) {
        valid = false
        break
      }
    }
    if (valid)
      f[i] = (i === m - 1 ? 0 : f[i - m]) + 1
  }

  return Math.max(...f)
}
```