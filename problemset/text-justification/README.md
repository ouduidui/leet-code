# 文本左右对齐

> 难度：困难
>
> https://leetcode-cn.com/problems/text-justification/

## 题目

给定一个单词数组和一个长度 `maxWidth`，重新排版单词，使其成为每行恰好有
`maxWidth` 个字符，且左右两端对齐的文本。

你应该使用“贪心算法”来放置给定的单词；也就是说，尽可能多地往每行中放置单词。必要
时可用空格 `' '` 填充，使得每行恰好有 `maxWidth` 个字符。

要求尽可能均匀分配单词间的空格数量。如果某一行单词间的空格不能均匀分配，则左侧放
置的空格数要多于右侧的空格数。

文本的最后一行应为左对齐，且单词之间不插入 **额外的** 空格。

说明:

- 单词是指由非空格字符组成的字符序列。
- 每个单词的长度大于 0，小于等于 maxWidth。
- 输入单词数组 words 至少包含一个单词。

### 示例

```
#### 示例 1:

输入:
words = ["This", "is", "an", "example", "of", "text", "justification."]
maxWidth = 16
输出:
[
   "This    is    an",
   "example  of text",
   "justification.  "
]
```

#### 示例 2:

```
输入:
words = ["What","must","be","acknowledgment","shall","be"]
maxWidth = 16
输出:
[
  "What   must   be",
  "acknowledgment  ",
  "shall be        "
]
解释: 注意最后一行的格式应为 "shall be    " 而不是 "shall     be",
因为最后一行应为左对齐，而不是左右两端对齐。
第二行同样为左对齐，这是因为这行只包含一个单词。
```

#### 示例 3:

```
输入:
words = ["Science","is","what","we","understand","well","enough","to","explain",
         "to","a","computer.","Art","is","everything","else","we","do"]
maxWidth = 20
输出:
[
  "Science  is  what we",
"understand      well",
  "enough to explain to",
  "a  computer.  Art is",
  "everything  else  we",
  "do                  "
]
```

## 解法

```typescript
/**
 * 模拟
 * @desc 时间复杂度 O(M)   空间复杂度 O(M)
 * @param words {string[]}
 * @param maxWidth {number}
 * @return {string[]}
 */
export function fullJustify(words: string[], maxWidth: number): string[] {
  const ans: string[] = [];

  // 右指针
  let right = 0;
  let n = words.length;

  /**
   * 生成n个空白格字符串
   * @param n {number}
   * @return {string}
   */
  const blank = (n: number): string => new Array(n).fill(' ').join('');

  while (true) {
    // 左指针
    const left = right;
    // 记录文本累计长度
    let sumLen = 0;

    // 当右指针还没到头，
    // 且该行文本长度 sumLen 加上下一个单词的长度 words[right].length 再加上最小空格数 right-left
    // 小于等于最大长度 maxWidth 时
    // 移动右指标，并累加 sumLen
    while (
      right < n &&
      sumLen + words[right].length + right - left <= maxWidth
    ) {
      sumLen += words[right].length;
      right++;
    }

    // 如果右指针到顶了，退出循环返回结果
    if (right === n) {
      // 获取剩余单词，并用空格隔开
      const s = words.slice(left).join(' ');
      // 用空白格填充剩余部分
      ans.push(s + blank(maxWidth - s.length));
      break;
    }

    const numWords = right - left; // 该行单词数量
    const numSpaces = maxWidth - sumLen; // 该行空格数量

    // 如果该行只有一个单词 且不是最后一行
    if (numWords === 1) {
      // 用空格将剩余部分补齐
      ans.push(words[left] + blank(numSpaces));
      continue;
    }

    // 平均空格数（向下取整）
    const avgSpace = Math.floor(numSpaces / (numWords - 1));
    // 多出的空格数
    const extraSpace = numSpaces % (numWords - 1);
    // 将多余的空格数填充到第一个单词后面
    const s1 = words
      .slice(left, left + extraSpace + 1)
      .join(blank(avgSpace + 1));
    const s2 = words.slice(left + extraSpace + 1, right).join(blank(avgSpace));
    ans.push(s1 + blank(avgSpace) + s2);
  }

  return ans;
}
```
