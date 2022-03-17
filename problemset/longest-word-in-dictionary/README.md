# 词典中最长的单词

> 难度：简单
>
> https://leetcode-cn.com/problems/longest-word-in-dictionary/

## 题目

给出一个字符串数组  `words` 组成的一本英语词典。返回  `words` 中最长的一个单词，
该单词是由  `words`  词典中其他单词逐步添加一个字母组成。

若其中有多个可行的答案，则返回答案中字典序最小的单词。若无答案，则返回空字符串。

### 示例

#### 示例 1：

```
输入：words = ["w","wo","wor","worl", "world"]
输出："world"
解释： 单词"world"可由"w", "wo", "wor", 和 "worl"逐步添加一个字母组成。
```

#### 示例 2：

```
输入：words = ["a", "banana", "app", "appl", "ap", "apply", "apple"]
输出："apple"
解释："apply" 和 "apple" 都能由词典中的单词组成。但是 "apple" 的字典序小于 "apply"
```

## 解题

```typescript
/**
 * 哈希集合
 * @param words
 */
export function longestWord(words: string[]): string {
  words.sort((a, b) => {
    if (a.length !== b.length) {
      return a.length - b.length;
    } else {
      // 判断a，b在字典中的排序
      return b.localeCompare(a);
    }
  });

  let longest = '';
  const set = new Set<string>();
  set.add('');

  const len = words.length;
  for (let i = 0; i < len; i++) {
    const word = words[i];
    if (set.has(word.slice(0, word.length - 1))) {
      set.add(word);
      longest = word;
    }
  }

  return longest;
}
```
