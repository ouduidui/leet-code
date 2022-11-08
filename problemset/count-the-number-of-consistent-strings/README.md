# 统计一致字符串的数目

> 难度：简单
>
> https://leetcode.cn/problems/count-the-number-of-consistent-strings/

## 题目

给你一个由不同字符组成的字符串 `allowed` 和一个字符串数组 `words` 。如果一个字符串的每一个字符都在 `allowed` 中，就称这个字符串是 **一致字符串** 。

请你返回 `words` 数组中 **一致字符串** 的数目。

### 示例

#### 示例 1：

```
输入：allowed = "ab", words = ["ad","bd","aaab","baa","badab"]
输出：2
解释：字符串 "aaab" 和 "baa" 都是一致字符串，因为它们只包含字符 'a' 和 'b' 。
```

#### 示例 2：

```
输入：allowed = "abc", words = ["a","b","c","ab","ac","bc","abc"]
输出：7
解释：所有字符串都是一致的。
```

#### 示例 3：

```
输入：allowed = "cad", words = ["cc","acd","b","ba","bac","bad","ac","d"]
输出：4
解释：字符串 "cc"，"acd"，"ac" 和 "d" 是一致字符串。
```

## 解题

```ts 
/**
 * 遍历
 * @desc 时间复杂度 O(N) 空间复杂度 O(1)
 * @param allowed
 * @param words
 * @returns
 */
export function countConsistentStrings(allowed: string, words: string[]): number {
  let mask = 0
  for (let i = 0; i < allowed.length; i++) {
    const c = allowed[i]
    mask |= 1 << (c.charCodeAt(0) - 'a'.charCodeAt(0))
  }
  let res = 0
  for (const word of words) {
    let mask1 = 0
    for (let i = 0; i < word.length; i++) {
      const c = word[i]
      mask1 |= 1 << (c.charCodeAt(0) - 'a'.charCodeAt(0))
    }
    if ((mask1 | mask) === mask)
      res++
  }
  return res
}
```