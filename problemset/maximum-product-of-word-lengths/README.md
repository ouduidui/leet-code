# 最大单词长度乘积

> 难度：中等
>
> https://leetcode-cn.com/problems/maximum-product-of-word-lengths/

## 题目

给你一个字符串数组 `words`，找出并返回 `length(words[i]) * length(words[j])` 的最大值，并且这两个单词不含有公共字母。如果不存在这样的两个单词，返回 `0` 。

### 示例

#### 示例 1：

```
输入：words = ["abcw","baz","foo","bar","xtfn","abcdef"]
输出：16 
解释：这两个单词为 "abcw", "xtfn"。
```

#### 示例 2：

```
输入：words = ["a","ab","abc","d","cd","bcd","abcd"]
输出：4 
解释：这两个单词为 "ab", "cd"。
```

#### 示例 3：

```
输入：words = ["a","aa","aaa","aaaa"]
输出：0 
解释：不存在这样的两个单词。
```

## 解题

```ts 
/**
 * 位运算
 * @desc 时间复杂度 O(L+N²)  空间复杂度 O(N)
 * @param words
 * @returns
 */
export function maxProduct(words: string[]): number {
  const len = words.length

  const masks = new Array<number>(len).fill(0)
  // 生成每个单词的位掩码
  for (let i = 0; i < len; i++) {
    const word = words[i]
    const l = word.length
    for (let j = 0; j < l; j++)
      masks[i] |= 1 << (word[j].charCodeAt(0) - 'a'.charCodeAt(0))
  }

  let maxProd = 0
  for (let i = 0; i < len; i++) {
    for (let j = i + 1; j < len; j++) {
      if ((masks[i] & masks[j]) === 0)
        maxProd = Math.max(maxProd, words[i].length * words[j].length)
    }
  }
  return maxProd
}
```