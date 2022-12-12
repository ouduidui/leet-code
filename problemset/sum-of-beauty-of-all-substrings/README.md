# 所有子字符串美丽值之和

> 难度：中等
>
> https://leetcode.cn/problems/sum-of-beauty-of-all-substrings/

## 题目

一个字符串的 **美丽值** 定义为：出现频率最高字符与出现频率最低字符的出现次数之差。

- 比方说，`"abaacc"` 的美丽值为 `3 - 1 = 2` 。

给你一个字符串 `s` ，请你返回它所有子字符串的 **美丽值** 之和。

### 示例

#### 示例 1：

```
输入：s = "aabcb"
输出：5
解释：美丽值不为零的字符串包括 ["aab","aabc","aabcb","abcb","bcb"] ，每一个字符串的美丽值都为 1 。
```

#### 示例 2：

```
输入：s = "aabcbaa"
输出：17
```

## 解题

```ts 
/**
 * 双层循环
 * @desc 时间复杂度 O(CN²) 空间复杂度 O(C)
 * @param s
 * @returns
 */
export function beautySum(s: string): number {
  let res = 0
  for (let i = 0; i < s.length; i++) {
    const cnt = new Array(26).fill(0)
    let maxFreq = 0
    for (let j = i; j < s.length; j++) {
      cnt[s[j].charCodeAt(0) - 'a'.charCodeAt(0)]++
      maxFreq = Math.max(maxFreq, cnt[s[j].charCodeAt(0) - 'a'.charCodeAt(0)])
      let minFreq = s.length
      for (let k = 0; k < 26; k++) {
        if (cnt[k] > 0)
          minFreq = Math.min(minFreq, cnt[k])
      }
      res += maxFreq - minFreq
    }
  }
  return res
}
```