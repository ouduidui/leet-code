# 两句话中的不常见单词

> 难度：简单
>
> https://leetcode-cn.com/problems/uncommon-words-from-two-sentences/

## 题目

**句子** 是一串由空格分隔的单词。每个 **单词** 仅由小写字母组成。

如果某个单词在其中一个句子中恰好出现一次，在另一个句子中却 **没有出现** ，那么这
个单词就是 **不常见的** 。

给你两个 **句子** `s1` 和 `s2` ，返回所有 **不常用单词** 的列表。返回列表中单词
可以按 **任意顺序** 组织。

### 示例

#### 示例 1：

```
输入：s1 = "this apple is sweet", s2 = "this apple is sour"
输出：["sweet","sour"]
```

#### 示例 2：

```
输入：s1 = "apple apple", s2 = "banana"
输出：["banana"]
```

## 解题

```typescript
/**
 * 哈希表
 * @desc 时间复杂度 O(N) 字符串长度  空间复杂度 O(N)
 * @param s1 {string}
 * @param s2 {string}
 * @return {string[]}
 */
export function uncommonFromSentences(s1: string, s2: string): string[] {
  // 新建哈希表
  const wordMap = new Map<string, number>();
  // 合并字符串
  const s = s1 + ' ' + s2;

  let i = 0;
  const len = s.length;

  // 遍历字符串，统计单词出现次数
  while (i < len) {
    let word = '';
    while (s[i] === ' ' && i < len) {
      i++;
    }
    while (s[i] != ' ' && i < len) {
      word += s[i++];
    }

    if (word) {
      const count = wordMap.has(word) ? wordMap.get(word)! : 0;
      wordMap.set(word, count + 1);
    }
  }

  // 找出只出现一次的单词
  const res: string[] = [];
  wordMap.forEach((value, key) => {
    if (value === 1) {
      res.push(key);
    }
  });

  return res;
}
```
