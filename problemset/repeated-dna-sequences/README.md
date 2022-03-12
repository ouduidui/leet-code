# 重复的 DNA 序列

> 难度：中等
>
> https://leetcode-cn.com/problems/repeated-dna-sequences/

## 题目

**DNA 序列**  由一系列核苷酸组成，缩写为  `'A'`, `'C'`, `'G'`  和  `'T'`。

- 例如，"ACGAATTCCG"  是一个 DNA 序列 。

在研究 `DNA` 时，识别 `DNA` 中的重复序列非常有用。

给定一个表示 **DNA 序列** 的字符串 `s` ，返回所有在` DNA` 分子中出现不止一次的  
长度为  `10`  的序列(子字符串)。你可以按 **任意顺序** 返回答案。

### 示例

#### 示例 1：

```
输入：s = "AAAAACCCCCAAAAACCCCCCAAAAAGGGTTT"
输出：["AAAAACCCCC","CCCCCAAAAA"]
```

#### 示例 2：

```
输入：s = "AAAAAAAAAAAAA"
输出：["AAAAAAAAAA"]
```

## 解题

### 哈希表

```typescript
/**
 * 哈希表
 * @desc 时间复杂度 O(N)  空间复杂度 O(N)
 * @param s
 */
export function findRepeatedDnaSequences(s: string): string[] {
  const set = new Set<string>();
  const result = new Set<string>();

  for (let i = 0; i <= s.length - 10; i++) {
    const str = s.substring(i, i + 10);
    set.has(str) ? result.add(str) : set.add(str);
  }

  return Array.from(result);
}
```

### 滑动窗口 + 哈希表

```typescript
/**
 * 滑动窗口 + 哈希表
 * @desc 时间复杂度 O(N)  空间复杂度 O(N)
 * @param s
 */
export function findRepeatedDnaSequences2(s: string): string[] {
  const len = s.length;
  if (len <= 10) return [];

  let str = s.substring(0, 10);
  const set = new Set<string>([str]);
  const result = new Set<string>();

  for (let i = 10; i < len; i++) {
    str = str.slice(1) + s[i];
    set.has(str) ? result.add(str) : set.add(str);
  }

  return Array.from(result);
}
```

### 滑动窗口 + 哈希表 + 位运算

```typescript
/**
 * 滑动窗口 + 哈希表 + 位运算
 * @desc 时间复杂度 O(N)  空间复杂度 O(N)
 * @param s
 */
export function findRepeatedDnaSequences3(s: string): string[] {
  // A: 00  C: 01  G: 10  T: 11
  const bin = new Map<string, number>([
    ['A', 0],
    ['C', 1],
    ['G', 2],
    ['T', 3]
  ]);
  if (s.length <= 10) return [];
  let x = 0;
  for (let i = 0; i < 10; i++) {
    x = (x << 2) | bin.get(s[i])!;
  }
  const set = new Set<number>([x]);
  const result = new Set<string>();
  for (let i = 10; i < s.length; i++) {
    x = ((x << 2) | bin.get(s[i])!) & ((1 << 20) - 1);
    set.has(x) ? result.add(s.substr(i - 9, 10)) : set.add(x);
  }
  return Array.from(result);
}
```
