# 前缀和后缀搜索

> 难度：困难
>
> https://leetcode.cn/problems/prefix-and-suffix-search/

## 题目

设计一个包含一些单词的特殊词典，并能够通过前缀和后缀来检索单词。

实现 `WordFilter` 类：

- `WordFilter(string[] words)` 使用词典中的单词 `words` 初始化对象。
- `f(string pref, string suff)` 返回词典中具有前缀 `prefix` 和后缀 `suff` 的单词的下标。如果存在不止一个满足要求的下标，返回其中 最大的下标 。如果不存在这样的单词，返回 `-1` 。
 

### 示例：

```
输入
["WordFilter", "f"]
[[["apple"]], ["a", "e"]]
输出
[null, 0]
解释
WordFilter wordFilter = new WordFilter(["apple"]);
wordFilter.f("a", "e"); // 返回 0 ，因为下标为 0 的单词：前缀 prefix = "a" 且 后缀 suff = "e" 。
```

## 解题

```ts 
/**
 * 计算每个单词的前缀后缀组合可能性
 */
export class WordFilter {
  dictionary: Map<string, number>

  constructor(words: string[]) {
    this.dictionary = new Map<string, number>()
    for (let i = 0; i < words.length; i++) {
      const word = words[i]
      const len = word.length
      for (let prefixLength = 1; prefixLength <= len; prefixLength++) {
        for (let suffixLength = 1; suffixLength <= len; suffixLength++) {
          this.dictionary.set(
            `${word.substring(0, prefixLength)}#${word.substring(len - suffixLength)}`,
            i,
          )
        }
      }
    }
  }

  f(pref: string, suff: string): number {
    return this.dictionary.has(`${pref}#${suff}`)
      ? this.dictionary.get(`${pref}#${suff}`)!
      : -1
  }
}
```