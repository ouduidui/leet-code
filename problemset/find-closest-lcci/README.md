# 单词距离

> 难度：中等
>
> https://leetcode.cn/problems/find-closest-lcci/

## 题目

有个内含单词的超大文本文件，给定任意两个不同的单词，找出在这个文件中这两个单词的最短距离(相隔单词数)。如果寻找过程在这个文件中会重复多次，而每次寻找的单词不同，你能对此优化吗?

### 示例：

```
输入：words = ["I","am","a","student","from","a","university","in","a","city"], word1 = "a", word2 = "student"
输出：1
```

## 解题

```ts 
/**
 * 一次遍历
 * @desc 时间复杂度 O(N)  空间复杂度 O(1)
 * @param words
 * @param word1
 * @param word2
 * @returns
 */
export function findClosest(words: string[], word1: string, word2: string): number {
  const len = words.length
  let ans = len
  let index1 = -1
  let index2 = -1
  for (let i = 0; i < len; i++) {
    const word = words[i]
    if (word === word1)
      index1 = i
    else if (word === word2)
      index2 = i

    if (index1 >= 0 && index2 >= 0)
      ans = Math.min(ans, Math.abs(index1 - index2))
  }
  return ans
}
```