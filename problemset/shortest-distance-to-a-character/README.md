# 字符的最短距离

> 难度：简单
>
> https://leetcode-cn.com/problems/shortest-distance-to-a-character/

## 题目

给你一个字符串 `s `和一个字符 `c` ，且 `c` 是 `s `中出现过的字符。

返回一个整数数组 `answer` ，其中 `answer.length == s.length` 且 `answer[i]` 是 `s` 中从下标 `i` 到离它 **最近** 的字符 `c` 的 **距离** 。

两个下标 `i` 和 `j` 之间的 距离 为 `abs(i - j)` ，其中 `abs` 是绝对值函数。

### 示例

#### 示例 1：

```
输入：s = "loveleetcode", c = "e"
输出：[3,2,1,0,1,0,0,1,2,2,1,0]
解释：字符 'e' 出现在下标 3、5、6 和 11 处（下标从 0 开始计数）。
距下标 0 最近的 'e' 出现在下标 3 ，所以距离为 abs(0 - 3) = 3 。
距下标 1 最近的 'e' 出现在下标 3 ，所以距离为 abs(1 - 3) = 2 。
对于下标 4 ，出现在下标 3 和下标 5 处的 'e' 都离它最近，但距离是一样的 abs(4 - 3) == abs(4 - 5) = 1 。
距下标 8 最近的 'e' 出现在下标 6 ，所以距离为 abs(8 - 6) = 2 。
```

#### 示例 2：

```
输入：s = "aaab", c = "b"
输出：[3,2,1,0]
```

## 解题

```ts
/**
 * 两次遍历
 * @desc 时间复杂度 O(N)  空间复杂度 O(1)
 * @param s
 * @param c
 * @returns
 */
export function shortestToChar(s: string, c: string): number[] {
  const len = s.length
  const ans = new Array(len).fill(0)

  for (let i = 0, idx = -len; i < len; ++i) {
    if (s[i] === c) idx = i
    ans[i] = i - idx
  }

  for (let i = len - 1, idx = 2 * len; i >= 0; --i) {
    if (s[i] === c) idx = i
    ans[i] = Math.min(ans[i], idx - i)
  }
  return ans
}
```