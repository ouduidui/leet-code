# 单词规律

> 难度：简单
>
> https://leetcode-cn.com/problems/word-pattern/

## 题目

给定一种规律 `pattern` 和一个字符串 `s` ，判断 `s` 是否遵循相同的规律。

这里的 **遵循** 指完全匹配，例如， `pattern` 里的每个字母和字符串 `str` 中的每个非空单词之间存在着双向连接的对应规律。

 
### 示例 

#### 示例 1:

```
输入: pattern = "abba", str = "dog cat cat dog"
输出: true
```

#### 示例 2:

```
输入:pattern = "abba", str = "dog cat cat fish"
输出: false
```

#### 示例 3:

```
输入: pattern = "aaaa", str = "dog cat cat dog"
输出: false
```

## 解题

```ts
/**
 * 哈希表
 * @desc 时间复杂度 O(M+N)  空间复杂度 O(M+N)
 * @param pattern
 * @param s
 * @returns
 */
export function wordPattern(pattern: string, s: string): boolean {
  const words = s.split(' ')
  if (pattern.length !== words.length)
    return false

  const word2ch = new Map<string, string>()
  const ch2word = new Map<string, string>()
  for (let i = 0; i < words.length; i++) {
    const word = words[i]
    const ch = pattern[i]
    if (
      (word2ch.has(word) && word2ch.get(word) !== ch)
      || (ch2word.has(ch) && ch2word.get(ch) !== word)
    )
      return false

    word2ch.set(word, ch)
    ch2word.set(ch, word)
  }
  return true
}
```