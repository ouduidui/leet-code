# 自定义字符串排序

> 难度：中等
>
> https://leetcode.cn/problems/custom-sort-string/

## 题目

给定两个字符串 `order` 和 `s` 。`order` 的所有单词都是 **唯一** 的，并且以前按照一些自定义的顺序排序。

对 `s` 的字符进行置换，使其与排序的 `order` 相匹配。更具体地说，如果在 `order` 中的字符 `x` 出现字符 `y` 之前，那么在排列后的字符串中， `x` 也应该出现在 `y` 之前。

返回 **满足这个性质的 `s` 的任意排列** 。

### 示例

#### 示例 1:

```
输入: order = "cba", s = "abcd"
输出: "cbad"
解释: 
“a”、“b”、“c”是按顺序出现的，所以“a”、“b”、“c”的顺序应该是“c”、“b”、“a”。
因为“d”不是按顺序出现的，所以它可以在返回的字符串中的任何位置。“dcba”、“cdba”、“cbda”也是有效的输出。
```

#### 示例 2:

```
输入: order = "cbafg", s = "abcd"
输出: "cbad"
```

## 解题

### 自定义排序 

```ts 
/**
 * 自定义排序
 * @desc 时间复杂度 O(NlogN+∣Σ∣) 空间复杂度 O(∣Σ∣)
 * @param order
 * @param s
 * @returns
 */
export function customSortString(order: string, s: string): string {
  const val: number[] = new Array(26).fill(0)
  for (let i = 0; i < order.length; ++i)
    val[order[i].charCodeAt(0) - 'a'.charCodeAt(0)] = i + 1

  const arr = new Array(s.length).fill(0).map((_, i) => s[i])
  arr.sort((c0, c1) =>
    val[c0.charCodeAt(0) - 'a'.charCodeAt(0)]
    - val[c1.charCodeAt(0) - 'a'.charCodeAt(0)],
  )

  return arr.join('')
}
```

### 计数排序

```ts
/**
 * 计数排序
 * @desc 时间复杂度 O(N+∣Σ∣) 空间复杂度 O(∣Σ∣)
 * @param order
 * @param s
 * @returns
 */
export function customSortString2(order: string, s: string): string {
  const freq: number[] = new Array(26).fill(0)
  for (let i = 0; i < s.length; ++i) {
    const ch = s[i]
    ++freq[ch.charCodeAt(0) - 'a'.charCodeAt(0)]
  }
  let ans = ''
  for (let i = 0; i < order.length; ++i) {
    const ch = order[i]
    while (freq[ch.charCodeAt(0) - 'a'.charCodeAt(0)] > 0) {
      ans += ch
      freq[ch.charCodeAt(0) - 'a'.charCodeAt(0)]--
    }
  }
  for (let i = 0; i < 26; ++i) {
    while (freq[i] > 0) {
      ans += String.fromCharCode(i + 'a'.charCodeAt(0))
      freq[i]--
    }
  }
  return ans
}
```