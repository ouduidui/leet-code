# 最常见的单词

> 难度：简单
>
> https://leetcode-cn.com/problems/most-common-word/

## 题目

给定一个段落 (`paragraph`) 和一个禁用单词列表 (`banned`)。返回出现次数最多，同时不在禁用列表中的单词。

题目保证至少有一个词不在禁用列表中，而且答案唯一。

禁用列表中的单词用小写字母表示，不含标点符号。段落中的单词不区分大小写。答案都是小写字母。

 

### 示例：

```
输入: 
paragraph = "Bob hit a ball, the hit BALL flew far after it was hit."
banned = ["hit"]
输出: "ball"
解释: 
"hit" 出现了3次，但它是一个禁用的单词。
"ball" 出现了2次 (同时没有其他单词出现2次)，所以它是段落里出现次数最多的，且不在禁用列表中的单词。 
注意，所有这些单词在段落里不区分大小写，标点符号需要忽略（即使是紧挨着单词也忽略， 比如 "ball,"）， 
"hit"不是最终的答案，虽然它出现次数更多，但它在禁用单词列表中。
```

## 解题

```ts
/**
 * 哈希表 + 计数
 * @desc 时间复杂度 O(M+N)  空间复杂度 O(M)
 * @param paragraph
 * @param banned
 * @returns
 */
export function mostCommonWord(paragraph: string, banned: string[]): string {
  const map = new Map<string, number>()
  const isLetter = (ch: string) => (ch <= 'z' && ch >= 'a') || (ch <= 'Z' && ch >= 'A')
  let i = 0
  const len = paragraph.length
  while (i < len) {
    let word = ''
    while (!isLetter(paragraph[i]) && i < len) i++
    while (isLetter(paragraph[i])) word += paragraph[i++]

    if (word) {
      word = word.toLowerCase()
      map.set(word, (map.get(word) || 0) + 1)
    }
  }

  for (const ban of banned) map.delete(ban)

  let result = ''
  let maxCount = 0
  map.forEach((value, key) => {
    if (value > maxCount) {
      maxCount = value
      result = key
    }
  })

  return result
}
```