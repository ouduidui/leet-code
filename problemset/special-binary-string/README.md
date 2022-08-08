# 特殊的二进制序列

> 难度：困难
>
> https://leetcode.cn/problems/special-binary-string/

## 题目

特殊的二进制序列是具有以下两个性质的二进制序列：

- `0` 的数量与 `1` 的数量相等。
- 二进制序列的每一个前缀码中 `1` 的数量要大于等于 `0` 的数量。
- 给定一个特殊的二进制序列 `S`，以字符串形式表示。**定义一个操作** 为首先选择 `S` 的两个连续且非空的特殊的子串，然后将它们交换。（两个子串为连续的当且仅当第一个子串的最后一个字符恰好为第二个子串的第一个字符的前一个字符。)

在任意次数的操作之后，交换后的字符串按照字典序排列的最大的结果是什么？

### 示例:

```
输入: S = "11011000"
输出: "11100100"
解释:
将子串 "10" （在S[1]出现） 和 "1100" （在S[3]出现）进行交换。
这是在进行若干次操作后按字典序排列最大的结果。
```

## 解题

```ts 
/**
 * 分治
 * @desc 时间复杂度 O(N²)  空间复杂度 O(N)
 * @param s
 * @returns
 */
export function makeLargestSpecial(s: string): string {
  if (s.length <= 2) return s

  let cnt = 0
  let left = 0
  const subs = []
  for (let i = 0; i < s.length; ++i) {
    if (s[i] === '1') {
      cnt++
    }
    else {
      cnt--
      if (cnt === 0) {
        subs.push(`1${makeLargestSpecial(s.substring(left + 1, i))}0`)
        left = i + 1
      }
    }
  }

  subs.sort().reverse()
  return subs.join('')
}
```