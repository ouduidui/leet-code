# 转换成小写字母

> 难度：简单
>
> https://leetcode-cn.com/problems/to-lower-case/

## 题目

给你一个字符串 `s` ，将该字符串中的大写字母转换成相同的小写字母，返回新的字符串。

### 示例 

#### 示例 1：

```
输入：s = "Hello"
输出："hello"
```

#### 示例 2：

```
输入：s = "here"
输出："here"
```

#### 示例 3：

```
输入：s = "LOVELY"
输出："lovely"
```

## 解题

### 使用语言API

```ts
/**
 * 使用语言API
 * @desc 时间复杂度 O(N)  空间复杂度 O(1)
 * @param s
 * @returns
 */
export function toLowerCase(s: string): string {
  return s.toLowerCase()
}
```

### 遍历

```ts
/**
 * 遍历
 * @desc 时间复杂度 O(N)  空间复杂度 O(1)
 * @param s
 * @returns
 */
export function toLowerCase2(s: string): string {
  let res = ''
  for (const ch of s) {
    res += ch.charCodeAt(0) >= 65 && ch.charCodeAt(0) <= 90
      ? String.fromCharCode(ch.charCodeAt(0) | 32)
      : ch
  }
  return res
}
```