# 单词拆分 II

> 难度：困难
>
> https://leetcode-cn.com/problems/word-break-ii/

## 题目

给定一个字符串 `s` 和一个字符串字典 `wordDict` ，在字符串 `s` 中增加空格来构建一
个句子，使得句子中所有的单词都在词典中。**以任意顺序** 返回所有这些可能的句子。

注意：词典中的同一个单词可能在分段中被重复使用多次。

### 示例

#### 示例 1：

```
输入:s = "catsanddog", wordDict = ["cat","cats","and","sand","dog"]
输出:["cats and dog","cat sand dog"]
```

#### 示例 2：

```
输入:s = "pineapplepenapple", wordDict = ["apple","pen","applepen","pine","pineapple"]
输出:["pine apple pen apple","pineapple pen apple","pine applepen apple"]
解释: 注意你可以重复使用字典中的单词。
```

#### 示例 3：

```
输入:s = "catsandog", wordDict = ["cats","dog","sand","and","cat"]
输出:[]
```

## 解题

```typescript
/**
 * 回溯 + 记忆化搜索
 * @param s
 * @param wordDict
 */
export function wordBreak(s: string, wordDict: string[]): string[] {
  const wordBreaks = backtrack(
    s,
    s.length,
    new Set(wordDict),
    0,
    new Map<number, string[][]>()
  );
  return wordBreaks.map((wordBreak) => wordBreak.join(' '));

  /**
   * 回溯
   * @param s 字串
   * @param len 字串长度
   * @param wordSet 字典
   * @param index 还未识别的字符开头下标
   * @param map 存储之前识别过的数据，如果遇到相同的index，直接获取之前的数据
   */
  function backtrack(
    s: string,
    len: number,
    wordSet: Set<string>,
    index: number,
    map: Map<number, string[][]>
  ): string[][] {
    // 如果遇到相同的index，直接获取之前的数据
    if (map.has(index)) {
      return map.get(index)!;
    }
    const wordBreaks: string[][] = [];

    if (index === len) {
      // 如果所有字符串已经识别结束了，插入空数组
      wordBreaks.push([]);
    } else {
      // 从index + 1开始遍历
      for (let i = index + 1; i <= len; i++) {
        // 获取 index -> i 的子串
        const word = s.substring(index, i);
        // 判断该子串是否在字典里
        if (wordSet.has(word)) {
          // 使用回溯继续获取后面的数据
          const nextWordBreaks = backtrack(s, len, wordSet, i, map);
          for (const nextWordBreak of nextWordBreaks) {
            wordBreaks.push([word, ...nextWordBreak]);
          }
        }
      }
    }

    map.set(index, wordBreaks);
    return wordBreaks;
  }
}
```
