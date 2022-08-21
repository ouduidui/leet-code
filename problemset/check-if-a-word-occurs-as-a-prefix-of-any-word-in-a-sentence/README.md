# 检查单词是否为句中其他单词的前缀

> 难度：简单
>
> https://leetcode.cn/problems/check-if-a-word-occurs-as-a-prefix-of-any-word-in-a-sentence/

## 题目

给你一个字符串 `sentence` 作为句子并指定检索词为 `searchWord` ，其中句子由若干用 **单个空格** 分隔的单词组成。请你检查检索词 `searchWord` 是否为句子 `sentence` 中任意单词的前缀。

如果 `searchWord` 是某一个单词的前缀，则返回句子 `sentence` 中该单词所对应的下标（下标从 `1` 开始）。如果 `searchWord` 是多个单词的前缀，则返回匹配的第一个单词的下标（最小下标）。如果 `searchWord` 不是任何单词的前缀，则返回 `-1` 。

字符串 `s` 的 **前缀** 是 `s` 的任何前导连续子字符串。

### 示例 

#### 示例 1：

```
输入：sentence = "i love eating burger", searchWord = "burg"
输出：4
解释："burg" 是 "burger" 的前缀，而 "burger" 是句子中第 4 个单词。
```

#### 示例 2：

```
输入：sentence = "this problem is an easy problem", searchWord = "pro"
输出：2
解释："pro" 是 "problem" 的前缀，而 "problem" 是句子中第 2 个也是第 6 个单词，但是应该返回最小下标 2 。
```

#### 示例 3：
```
输入：sentence = "i am tired", searchWord = "you"
输出：-1
解释："you" 不是句子中任何单词的前缀。
```

## 解题

```ts 
/**
 * 双指针
 * @desc 时间复杂度 O(N)  空间复杂度 O(1)
 * @param sentence
 * @param searchWord
 * @returns
 */
export function isPrefixOfWord(sentence: string, searchWord: string): number {
  const n = sentence.length; let index = 1; let start = 0; let end = 0
  while (start < n) {
    while (end < n && sentence[end] !== ' ')
      end++

    if (isPrefix(start, end))
      return index

    index++
    end++
    start = end
  }
  return -1

  function isPrefix(start: number, end: number): boolean {
    for (let i = 0; i < searchWord.length; i++) {
      if (start + i >= end || sentence[start + i] !== searchWord[i])
        return false
    }
    return true
  }
}
```