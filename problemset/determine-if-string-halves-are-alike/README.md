# 判断字符串的两半是否相似

> 难度：简单
>
> https://leetcode.cn/problems/determine-if-string-halves-are-alike/

## 题目

给你一个偶数长度的字符串 s 。将其拆分成长度相同的两半，前一半为 `a` ，后一半为 `b` 。

两个字符串 **相似** 的前提是它们都含有相同数目的元音（'a'，'e'，'i'，'o'，'u'，'A'，'E'，'I'，'O'，'U'）。注意，`s` 可能同时含有大写和小写字母。

如果 `a` 和 `b` 相似，返回 `true` ；否则，返回 `false` 。

 

#### 示例 1：

```
输入：s = "book"
输出：true
解释：a = "bo" 且 b = "ok" 。a 中有 1 个元音，b 也有 1 个元音。所以，a 和 b 相似。
```

#### 示例 2：

```
输入：s = "textbook"
输出：false
解释：a = "text" 且 b = "book" 。a 中有 1 个元音，b 中有 2 个元音。因此，a 和 b 不相似。
注意，元音 o 在 b 中出现两次，记为 2 个。
```

## 解题

```ts 
/**
 * 计数
 * @desc 时间复杂度 O(n) 空间复杂度 O(N)
 * @param s
 * @returns
 */
export function halvesAreAlike(s: string): boolean {
  const a = s.substring(0, s.length / 2)
  const b = s.substring(s.length / 2)
  const h = 'aeiouAEIOU'
  let sum1 = 0
  let sum2 = 0
  for (let i = 0; i < a.length; i++) {
    if (h.includes(a[i]))
      sum1++
  }
  for (let i = 0; i < b.length; i++) {
    if (h.includes(b[i]))
      sum2++
  }
  return sum1 === sum2
}
```