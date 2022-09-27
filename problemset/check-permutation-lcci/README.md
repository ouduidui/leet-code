# 判定是否互为字符重排

> 难度：简单
>
> https://leetcode.cn/problems/check-permutation-lcci/

## 题目

给定两个字符串 `s1` 和 `s2`，请编写一个程序，确定其中一个字符串的字符重新排列后，能否变成另一个字符串。

### 示例

#### 示例 1：

```
输入: s1 = "abc", s2 = "bca"
输出: true 
```

#### 示例 2：

```
输入: s1 = "abc", s2 = "bad"
输出: false
```

## 解题

```ts 
/**
 * 时间复杂度 O(N)  空间复杂度 O(N)
 * @param s1
 * @param s2
 * @returns
 */
export function CheckPermutation(s1: string, s2: string): boolean {
  const map = new Map<string, number>()
  for (const s of s1)
    map.set(s, (map.get(s) || 0) + 1)

  for (const s of s2) {
    const count = map.get(s)!
    if (!count) return false
    if (count === 1) map.delete(s)
    else map.set(s, count - 1)
  }

  return map.size === 0
}
```