# 单词接龙

> 难度：困难
>
> https://leetcode-cn.com/problems/word-ladder/

## 题目

字典 `wordList` 中从单词 `beginWord` 和 `endWord` 的 **转换序列** 是一个按下述规
格形成的序列 `beginWord -> s1 -> s2 -> ... -> sk`：

- 每一对相邻的单词只差一个字母。
- 对于 `1 <= i <= k` 时，每个 `si` 都在 `wordList` 中。注意， `beginWord` 不需要
  在 `wordList` 中。
- `sk == endWord`

给你两个单词 `beginWord` 和 `endWord` 和一个字典 `wordList` ，返回 从
`beginWord` 到 `endWord` 的 **最短转换序列** 中的 `单词数目` 。如果不存在这样的
转换序列，返回 `0` 。

### 示例

#### 示例 1：

```
输入：beginWord = "hit", endWord = "cog", wordList = ["hot","dot","dog","lot","log","cog"]
输出：5
解释：一个最短转换序列是 "hit" -> "hot" -> "dot" -> "dog" -> "cog", 返回它的长度 5。
```

#### 示例 2：

```
输入：beginWord = "hit", endWord = "cog", wordList = ["hot","dot","dog","lot","log"]
输出：0
解释：endWord "cog" 不在字典中，所以无法进行转换。
```

## 解题

```typescript
/**
 * 广度优先搜索
 * @param beginWord
 * @param endWord
 * @param wordList
 */
export function ladderLength(
  beginWord: string,
  endWord: string,
  wordList: string[]
): number {
  const wordSet = new Set(wordList);
  const queue: [string, number][] = [];
  queue.push([beginWord, 1]);

  while (queue.length) {
    const [word, level] = queue.shift()!; // 当前出列的单词
    if (word == endWord) {
      return level;
    }
    for (let i = 0; i < word.length; i++) {
      // 遍历当前单词的所有字符
      for (let c = 97; c <= 122; c++) {
        // 对应26个字母
        const newWord =
          word.slice(0, i) + String.fromCharCode(c) + word.slice(i + 1); // 形成新词
        if (wordSet.has(newWord)) {
          // 单词表里有这个新词
          queue.push([newWord, level + 1]); // 作为下一层的词入列
          wordSet.delete(newWord); // 避免该词重复入列
        }
      }
    }
  }
  return 0; // bfs结束，始终没有遇到终点
}
```
