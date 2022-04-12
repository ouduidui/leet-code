# 有效的字母异位词

> 难度：简单
>
> https://leetcode-cn.com/problems/valid-anagram/

## 题目

给定两个字符串 `s` 和 `t` ，编写一个函数来判断 `t` 是否是 `s `的字母异位词。

注意：若 `s` 和 `t` 中每个字符出现的次数都相同，则称 `s` 和 `t` 互为字母异位词。

### 示例

#### 示例 1:

```
输入: s = "anagram", t = "nagaram"
输出: true
```

#### 示例 2:

```
输入: s = "rat", t = "car"
输出: false
```

## 解题

```ts
/**
 * 哈希表
 * @desc 时间复杂度 O(N)  空间复杂度 O(S)
 * @param s
 * @param t
 * @returns
 */
export function isAnagram(s: string, t: string): boolean {
  if (s.length !== t.length) return false

  const map = new Map<string, number>()
  const len = s.length
  for (let i = 0; i < len; i++)
    map.set(s[i], (map.get(s[i]) || 0) + 1)

  for (let i = 0; i < len; i++) {
    const ch = t[i]
    if (!map.has(ch)) return false

    const count = map.get(ch)!
    if (count === 1) map.delete(ch)
    else map.set(ch, count - 1)
  }

  return true
}
```