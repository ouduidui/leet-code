# 同构字符串

> 难度：简单
>
> https://leetcode-cn.com/problems/isomorphic-strings/

## 题目

给定两个字符串  `s`  和  `t` ，判断它们是否是同构的。

如果  `s`  中的字符可以按某种映射关系替换得到  `t` ，那么这两个字符串是同构的。

每个出现的字符都应当映射到另一个字符，同时不改变字符的顺序。不同字符不能映射到同
一个字符上，相同字符只能映射到同一个字符上，字符可以映射到自己本身。

### 示例

#### 示例 1:

```
输入：s = "egg", t = "add"
输出：true
```

#### 示例 2：

```
输入：s = "foo", t = "bar"
输出：false
```

#### 示例 3：

```
输入：s = "paper", t = "title"
输出：true
```

## 解题

### 暴力解法

```typescript
/**
 * 暴力解法
 * @desc 时间复杂度 O(N²)  空间复杂度 O(1)
 * @param s
 * @param t
 * @returns
 */
export function isIsomorphic(s: string, t: string): boolean {
  if (s.length !== t.length) return false;
  const len = s.length;

  for (let i = 0; i < len; i++) {
    if (s.indexOf(s[i]) !== t.indexOf(t[i])) return false;
  }

  return true;
}
```

### 哈希表

```typescript
/**
 * 哈希表
 * @desc 时间复杂度 O(N)  空间复杂度 O(∣Σ∣)
 * @param s
 * @param t
 * @returns
 */
export function isIsomorphic2(s: string, t: string): boolean {
  if (s.length !== t.length) return false;

  const s2t: Record<string, string> = {};
  const t2s: Record<string, string> = {};
  const len = s.length;
  for (let i = 0; i < len; i++) {
    const x = s[i];
    const y = t[i];
    if ((s2t[x] && s2t[x] !== y) || (t2s[y] && t2s[y] !== x)) return false;

    s2t[x] = y;
    t2s[y] = x;
  }

  return true;
}
```
