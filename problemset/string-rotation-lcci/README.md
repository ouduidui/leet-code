# 字符串轮转

> 难度：简单
>
> https://leetcode.cn/problems/string-rotation-lcci/

## 题目

字符串轮转。给定两个字符串s1和s2，请编写代码检查s2是否为s1旋转而成（比如，waterbottle是erbottlewat旋转后的字符串）。

### 示例

#### 示例1:

```
 输入：s1 = "waterbottle", s2 = "erbottlewat"
 输出：True
```

#### 示例2:

```
 输入：s1 = "aa", s2 = "aba"
 输出：False
```

## 解题

### 模拟

```ts 
/**
 * 模拟
 * @desc 时间复杂度 O(N²)  空间复杂度 O(1)
 * @param s1
 * @param s2
 * @returns
 */
export function isFlipedString(s1: string, s2: string): boolean {
  const m = s1.length
  const n = s2.length
  if (m !== n) return false
  if (n === 0) return true

  for (let i = 0; i < n; i++) {
    let flag = true
    for (let j = 0; j < n; j++) {
      if (s1[(i + j) % n] !== s2[j]) {
        flag = false
        break
      }
    }
    if (flag) return true
  }
  return false
}
```

### 搜索子字符串

```ts 
/**
 * 搜索子字符串
 * @desc 时间复杂度 O(N)  空间复杂度 O(N)
 * @param s1
 * @param s2
 * @returns
 */
export function isFlipedString2(s1: string, s2: string): boolean {
  return s1.length === s2.length && (s1 + s1).includes(s2)
}
```