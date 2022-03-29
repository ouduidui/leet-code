# 最短回文串

> 难度：困难
>
> https://leetcode-cn.com/problems/shortest-palindrome/

## 题目

给定一个字符串 `s`，你可以通过在字符串前面添加字符将其转换为回文串。找到并返回可以用这种方式转换的最短回文串。

 
### 示例 

#### 示例 1：

```
输入：s = "aacecaaa"
输出："aaacecaaa"
```

#### 示例 2：

```
输入：s = "abcd"
输出："dcbabcd"
```

## 解题

```ts
/**
 * KMS
 * @desc 时间复杂度 O(N) 空间复杂度 O(N)
 * @param s
 * @returns
 */
export function shortestPalindrome(s: string): string {
  const len = s.length
  // 用于映射后续与倒序s匹配是，如果匹配不上的话需要回到的对应七点
  const fail = new Array(len).fill(-1)
  for (let i = 1; i < len; i++) {
    let j = fail[i - 1]
    while (j !== -1 && s.charAt(j + 1) !== s.charAt(i))
      j = fail[j]

    if (s.charAt(j + 1) === s.charAt(i))
      fail[i] = j + 1
  }

  let best = -1
  for (let i = len - 1; i >= 0; i--) {
    while (best !== -1 && s.charAt(best + 1) !== s.charAt(i))
      best = fail[best]

    if (s.charAt(best + 1) === s.charAt(i))
      best++
  }

  // 如果 best === len — 1，则说明 s 就是回文子串
  const add = best === len - 1
    ? ''
    // 截取best之后的子串并倒序
    : s.substring(best + 1).split('').reverse().join('')

  return add + s
}
```