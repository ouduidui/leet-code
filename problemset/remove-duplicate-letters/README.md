# 去除重复字母

> 难度：中等
>
> https://leetcode-cn.com/problems/remove-duplicate-letters/

## 题目

给你一个字符串 `s` ，请你去除字符串中重复的字母，使得每个字母只出现一次。需保证 **返回结果的字典序最小**（要求不能打乱其他字符的相对位置）。

### 示例

#### 示例 1：

```
输入：s = "bcabc"
输出："abc"
```

#### 示例 2：

```
输入：s = "cbacdcbc"
输出："acdb"
```

## 解题

```ts
/**
 * 单调栈
 * @desc 时间复杂度 O(N)  空间复杂度 O(N)
 * @param s
 * @returns
 */
export function removeDuplicateLetters(s: string): string {
  const stack: string[] = []
  for (let i = 0; i < s.length; i++) {
    if (!stack.includes(s[i])) {
      while (
        stack.length
        && stack[stack.length - 1].charCodeAt(0) > s[i].charCodeAt(0) /* 保持单调递增 */
        && s.includes(stack[stack.length - 1], i) /* 剩余字符存在该字符 */
      )
        stack.pop()

      stack.push(s[i])
    }
  }

  return stack.join('')
}
```