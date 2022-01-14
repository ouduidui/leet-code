# 串联所有单词的子串

> 难度：困难
>
> https://leetcode-cn.com/problems/substring-with-concatenation-of-all-words/

## 题目

给定一个字符串 `s` 和一些 **长度相同** 的单词 `words` 。找出 s 中恰好可以由
`words` 中所有单词串联形成的子串的起始位置。

注意子串要与 `words` 中的单词完全匹配，中间不能有其他字符 ，但不需要考虑 `words`
中单词串联的顺序。

### 示例

#### 示例 1

```
输入：s = "barfoothefoobarman", words = ["foo","bar"]
输出：[0,9]
解释：
从索引 0 和 9 开始的子串分别是 "barfoo" 和 "foobar" 。
输出的顺序不重要, [9,0] 也是有效答案。
```

#### 示例 2：

```
输入：s = "wordgoodgoodgoodbestword", words = ["word","good","best","word"]
输出：[]
```

#### 示例 3：

```
输入：s = "barfoofoobarthefoobarman", words = ["bar","foo","the"]
输出：[6,9,12]
```

## 解法

```typescript
/**
 * 滑动窗口
 * @desc 时间复杂度 O(NM) 空间复杂度 O(M)  N=s长度 M=单词数量
 * @param s
 * @param words
 */
export function findSubstring(s: string, words: string[]): number[] {
  const sLen: number = s.length;
  const wordLen: number = words[0].length;
  const wordNum: number = words.length;
  const wLen: number = wordLen * wordNum;

  // 利用Map对word进行去重，并保存出现次数
  let wordMap = new Map<string, number>();
  for (let word of words) {
    let count: number = wordMap.has(word) ? wordMap.get(word)! : 0;
    wordMap.set(word, count + 1);
  }

  let res: number[] = [];
  let left: number = 0;
  let right: number = wLen - 1;
  while (right < sLen) {
    right++;
    if (right - left === wLen) {
      // 当窗口长度刚好等于wLen，就进行匹配
      if (match()) res.push(left);
      left++;
    }
  }

  return res;

  function match(): boolean {
    // 获取窗口字符串
    let str = s.substring(left, right);
    // 按长度拆分str，并统计单词出现次数
    let map = new Map<string, number>();
    for (let i: number = 0; i < wordNum; i++) {
      let word = str.substring(i * wordLen, (i + 1) * wordLen);
      let count: number = map.has(word) ? map.get(word)! : 0;
      map.set(word, count + 1);
    }

    // map和wordMap继续匹配
    for (let [key, value] of wordMap) {
      if (!map.has(key) || map.get(key) !== value) {
        return false;
      }
    }
    return true;
  }
}
```
