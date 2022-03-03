# 翻转字符串中里的单词

> 难度：中等
>
> https://leetcode-cn.com/problems/reverse-words-in-a-string/

## 题目

给你一个字符串 `s` ，逐个翻转字符串中的所有 **单词** 。

**单词** 是由非空格字符组成的字符串。`s` 中使用至少一个空格将字符串中的 **单词**
分隔开。

请你返回一个翻转 `s` 中单词顺序并用单个空格相连的字符串。

说明：

- 输入字符串 `s` 可以在前面、后面或者单词间包含多余的空格。
- 翻转后单词间应当仅用一个空格分隔。
- 翻转后的字符串中不应包含额外的空格。

### 示例

#### 示例 1：

```
输入：s = "the sky is blue"
输出："blue is sky the"
```

#### 示例 2：

```
输入：s = "  hello world  "
输出："world hello"
解释：输入字符串可以在前面或者后面包含多余的空格，但是翻转后的字符不能包括。
```

#### 示例 3：

```
输入：s = "a good   example"
输出："example good a"
解释：如果两个单词间有多余的空格，将翻转后单词间的空格减少到只含一个。
```

#### 示例 4：

```
输入：s = "  Bob    Loves  Alice   "
输出："Alice Loves Bob"
```

#### 示例 5：

```
输入：s = "Alice does not even like bob"
输出："bob like even not does Alice"
```

## 解题

### 语言特性

```typescript
/**
 * 语言特性
 * @desc 时间复杂度 O(N)  空间复杂度 O(N)
 * @param s
 */
export function reverseWords(s: string): string {
  return s.trim().split(/\s+/).reverse().join(' ');
}
```

### 双指针

```typescript
/**
 * 双指针
 * @desc 时间复杂度 O(N)  空间复杂度 O(1)
 * @param s
 */
export function reverseWords2(s: string): string {
  const len = s.length;
  let slow = len - 1;
  let fast = len - 1;
  let result = '';

  while (fast >= 0) {
    while (!s.charAt(fast).trim() && fast >= 0) {
      fast--;
      slow--;
    }

    while (s.charAt(fast).trim() && fast >= 0) {
      fast--;
    }

    if (fast !== slow) {
      const word = s.substring(fast + 1, slow + 1);
      result = result ? `${result} ${word}` : word;
      slow = fast;
    }
  }

  return result;
}
```
