# 匹配子序列的单词数

> 难度：中等
>
> https://leetcode.cn/problems/number-of-matching-subsequences/

## 题目

给定字符串 `s` 和字符串数组 `words`, 返回  `words[i]` 中是`s`的子序列的单词个数 。

字符串的 `子序列` 是从原始字符串中生成的新字符串，可以从中删去一些字符(可以是`none`)，而不改变其余字符的相对顺序。

例如， `“ace”` 是 `“abcde”` 的子序列。

### 示例

#### 示例 1:

```
输入: s = "abcde", words = ["a","bb","acd","ace"]
输出: 3
解释: 有三个是 s 的子序列的单词: "a", "acd", "ace"。
```

#### 示例 2:

```
输入: s = "dsahjpjauf", words = ["ahjpjau","ja","ahbwzgqnuk","tnmlanowax"]
输出: 2
```

## 解题

### 二分查找

```ts 
/**
 * 二分查找
 * @param s
 * @param words
 * @returns
 */
export function numMatchingSubseq(s: string, words: string[]): number {
  const binarySearch = (list: number[], target: number) => {
    let left = 0; let right = list.length - 1
    while (left < right) {
      const mid = left + Math.floor((right - left) / 2)
      if (list[mid] > target)
        right = mid

      else
        left = mid + 1
    }
    return list[left]
  }

  const pos: number[][] = new Array(26).fill(0).map(() => [])
  for (let i = 0; i < s.length; ++i)
    pos[s[i].charCodeAt(0) - 'a'.charCodeAt(0)].push(i)

  let res = words.length
  for (const w of words) {
    if (w.length > s.length) {
      --res
      continue
    }
    let p = -1
    for (let i = 0; i < w.length; ++i) {
      const c = w[i]
      if (pos[c.charCodeAt(0) - 'a'.charCodeAt(0)].length === 0 || pos[c.charCodeAt(0) - 'a'.charCodeAt(0)][pos[c.charCodeAt(0) - 'a'.charCodeAt(0)].length - 1] <= p) {
        --res
        break
      }
      p = binarySearch(pos[c.charCodeAt(0) - 'a'.charCodeAt(0)], p)
    }
  }
  return res
}
```

### 多指针

```ts 
/**
 * 二分查找
 * @param s
 * @param words
 * @returns
 */
export function numMatchingSubseq2(s: string, words: string[]): number {
  const p: [number, number][][] = new Array(26).fill(0).map(() => [])
  for (let i = 0; i < words.length; ++i)
    p[words[i][0].charCodeAt(0) - 'a'.charCodeAt(0)].push([i, 0])

  let res = 0
  for (let i = 0; i < s.length; ++i) {
    const c = s[i]
    let len = p[c.charCodeAt(0) - 'a'.charCodeAt(0)].length
    while (len > 0) {
      const t = p[c.charCodeAt(0) - 'a'.charCodeAt(0)].shift()!
      if (t[1] === words[t[0]].length - 1) {
        ++res
      }
      else {
        ++t[1]
        p[words[t[0]][t[1]].charCodeAt(0) - 'a'.charCodeAt(0)].push(t)
      }
      --len
    }
  }
  return res
}
```

