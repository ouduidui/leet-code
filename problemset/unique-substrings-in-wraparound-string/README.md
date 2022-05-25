# 环绕字符串中唯一的子字符串

> 难度：中等
>
> https://leetcode.cn/problems/unique-substrings-in-wraparound-string/

## 题目

把字符串 `s` 看作是 `“abcdefghijklmnopqrstuvwxyz”` 的无限环绕字符串，所以 `s` 看起来是这样的：

- "...zabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcd...." . 

现在给定另一个字符串 `p` 。返回 `s` 中 **唯一** 的 `p` 的 **非空子串** 的数量 。 

 
### 示例

#### 示例 1:

```
输入: p = "a"
输出: 1
解释: 字符串 s 中只有一个"a"子字符。
```

#### 示例 2:

```
输入: p = "cac"
输出: 2
解释: 字符串 s 中的字符串“cac”只有两个子串“a”、“c”。.
```

#### 示例 3:

```
输入: p = "zab"
输出: 6
解释: 在字符串 s 中有六个子串“z”、“a”、“b”、“za”、“ab”、“zab”。
```

## 解题

``` ts 
/**
 * 动态规划
 * @desc 时间复杂度 O(N)  空间复杂度 O(1)
 * @param p
 * @returns
 */
export function findSubstringInWraproundString(p: string): number {
  const dp = new Array(26).fill(0)
  let k = 0
  for (let i = 0; i < p.length; i++) {
    if (
      i > 0
      && (p[i].charCodeAt(0) - p[i - 1].charCodeAt(0) + 26) % 26 === 1 // 字符之差为 1 或 -25
    )
      k++
    else
      k = 1

    const idx = p[i].charCodeAt(0) - 'a'.charCodeAt(0)
    dp[idx] = Math.max(dp[idx], k)
  }

  return dp.reduce((acc, cur) => acc + cur, 0)
}
```