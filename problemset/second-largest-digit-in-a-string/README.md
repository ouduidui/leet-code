# 字符串中第二大的数字

> 难度：简单
>
> https://leetcode.cn/problems/second-largest-digit-in-a-string/

## 题目

给你一个混合字符串 `s` ，请你返回 `s` 中 **第二大** 的数字，如果不存在第二大的数字，请你返回 `-1` 。

**混合字符串** 由小写英文字母和数字组成。

### 示例

#### 示例 1：

```
输入：s = "dfa12321afd"
输出：2
解释：出现在 s 中的数字包括 [1, 2, 3] 。第二大的数字是 2 。
```

#### 示例 2：

```
输入：s = "abc1111"
输出：-1
解释：出现在 s 中的数字只包含 [1] 。没有第二大的数字。
```

## 解题

```ts 
/**
 * 直接遍历
 * @desc 时间复杂度 O(n) 空间复杂度 O(1)
 * @param s
 * @returns
 */
export function secondHighest(s: string): number {
  let first = -1
  let second = -1
  for (let i = 0; i < s.length; i++) {
    const c = s[i]
    if (c >= '0' && c <= '9') {
      const num = c.charCodeAt(0) - '0'.charCodeAt(0)
      if (num > first) {
        second = first
        first = num
      }
      else if (num < first && num > second) {
        second = num
      }
    }
  }
  return second
}
```