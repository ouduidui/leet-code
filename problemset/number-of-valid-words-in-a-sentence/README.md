# 句子中的有效单词数

> 难度：简单
>
> https://leetcode-cn.com/problems/number-of-valid-words-in-a-sentence/

## 题目

句子仅由小写字母（`'a'` 到 `'z'`）、数字（`'0'` 到 `'9'`）、连字符（`'-'`）、标
点符号（`'!'`、`'.'` 和 `','`）以及空格（`' '`）组成。每个句子可以根据空格分解成
**一个或者多个 token** ，这些 `token` 之间由一个或者多个空格 `' '` 分隔。

如果一个 `token` 同时满足下述条件，则认为这个 `token` 是一个有效单词：

- 仅由小写字母、连字符和/或标点（不含数字）。
- **至多一个** 连字符 `'-'` 。如果存在，连字符两侧应当都存在小写字母（`"a-b"` 是
  一个有效单词，但 `"-ab"` 和 `"ab-"` 不是有效单词）。
- **至多一个** 标点符号。如果存在，标点符号应当位于 `token` 的 **末尾** 。
- 这里给出几个有效单词的例子：`"a-b."`、`"afad"`、`"ba-c"`、`"a!"` 和 `"!"` 。

给你一个字符串 `sentence` ，请你找出并返回 `sentence` 中 **有效单词的数目** 。

### 示例

#### 示例 1：

```
输入：sentence = "cat and  dog"
输出：3
解释：句子中的有效单词是 "cat"、"and" 和 "dog"
```

#### 示例 2：

```
输入：sentence = "!this  1-s b8d!"
输出：0
解释：句子中没有有效单词
"!this" 不是有效单词，因为它以一个标点开头
"1-s" 和 "b8d" 也不是有效单词，因为它们都包含数字
```

#### 示例 3：

```
输入：sentence = "alice and  bob are playing stone-game10"
输出：5
解释：句子中的有效单词是 "alice"、"and"、"bob"、"are" 和 "playing"
"stone-game10" 不是有效单词，因为它含有数字
```

#### 示例 4：

```
输入：sentence = "he bought 2 pencils, 3 erasers, and 1  pencil-sharpener."
输出：6
解释：句子中的有效单词是 "he"、"bought"、"pencils,"、"erasers,"、"and" 和 "pencil-sharpener."
```

## 解法

```typescript
/**
 * 遍历
 * @desc 时间复杂度 O(N)  空间复杂度 O(1)
 * @param sentence {string}
 * @return {number}
 */
export function countValidWords(sentence: string): number {
  if (sentence === '') return 0;

  const len = sentence.length;
  let i = 0;
  let result = 0;

  // 遍历字符串
  while (i < len) {
    // 将 i 定位到字符的第一个单词
    while (i < len && sentence[i] == ' ') {
      i++;
    }
    if (i >= len) break;

    let hasHyphens = false; // 判断是否出现过连字符
    let isPass = true; // 判断是否通过
    // 遍历一个单词
    while (sentence[i] !== ' ' && i < len) {
      // 如果isPass为false的话，无需执行校验，直接 i++，定到位下一个空格或句末
      if (isPass) {
        const s = sentence[i];
        // 校验数值
        if (!isNaN(Number(s))) {
          isPass = false;
        }
        // 校验连字符
        else if (s === '-') {
          // 如果已经出现过连字符，或者连字符前后不是字母，则不通过
          if (
            hasHyphens ||
            !isLetter(sentence[i - 1]) ||
            !isLetter(sentence[i + 1])
          ) {
            isPass = false;
          }
          hasHyphens = true;
        }
        // 校验符号
        else if (s === '!' || s === '.' || s === ',') {
          // 如果符号不是最后一个则不通过（这个条件同时可以限制符号只出现一次）
          if (sentence[i + 1] !== ' ' && i + 1 !== len) {
            isPass = false;
          }
        }
      }

      i++;
    }

    // 如果通过校验则更新结果
    isPass && result++;
  }

  return result;

  /**
   * 校验是否为单词
   * @param str
   */
  function isLetter(str: string): boolean {
    return str >= 'a' && str <= 'z';
  }
}
```
