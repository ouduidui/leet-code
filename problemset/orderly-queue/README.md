# 有序队列

> 难度：困难
>
> https://leetcode.cn/problems/orderly-queue/

## 题目

给定一个字符串 `s` 和一个整数 `k` 。你可以从 `s` 的前 `k` 个字母中选择一个，并把它加到字符串的末尾。

返回 在应用上述步骤的任意数量的移动后，字典上最小的字符串 。

### 示例 

#### 示例 1：

```
输入：s = "cba", k = 1
输出："acb"
解释：
在第一步中，我们将第一个字符（“c”）移动到最后，获得字符串 “bac”。
在第二步中，我们将第一个字符（“b”）移动到最后，获得最终结果 “acb”。
```

#### 示例 2：

```
输入：s = "baaca", k = 3
输出："aaabc"
解释：
在第一步中，我们将第一个字符（“b”）移动到最后，获得字符串 “aacab”。
在第二步中，我们将第三个字符（“c”）移动到最后，获得最终结果 “aaabc”。
```

## 解题

```ts 
/**
 * 分情况讨论
 * @desc 时间复杂度 O(N²)  空间复杂度 O(N)/O(logN)
 * @param s
 * @param k
 * @returns
 */
export function orderlyQueue(s: string, k: number): string {
  if (k === 1) {
    let ans = s
    for (let i = 0; i < s.length - 1; i++) {
      const len = s.length
      s = s.substring(1, len) + s[0]
      ans = ans < s ? ans : s
    }

    return ans
  }

  return [...s].sort().join('')
}
```