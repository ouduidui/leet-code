# 最后一个单词的长度

> 难度：简单
>
> https://leetcode-cn.com/problems/length-of-last-word/

## 题目

给你一个字符串 `s`，由若干单词组成，单词前后用一些空格字符隔开。返回字符串中最后
一个单词的长度。

`单词` 是指仅由字母组成、不包含任何空格字符的最大子字符串。

### 示例

#### 示例 1：

```
输入：s = "Hello World"
输出：5
```

#### 示例 2：

```
输入：s = "   fly me   to   the moon  "
输出：4
```

#### 示例 3：

```
输入：s = "luffy is still joyboy"
输出：6
```

## 解题

```typescript
/**
 * 反向遍历
 * @desc 时间复杂度 O(N)  空间复杂度 O(1)
 * @param s
 */
export function lengthOfLastWord(s: string): number {
  let ans = 0;
  let i = s.length - 1;

  while (s[i] === ' ') i--;

  while (i >= 0 && s[i] !== ' ') {
    ans++;
    i--;
  }

  return ans;
}
```
