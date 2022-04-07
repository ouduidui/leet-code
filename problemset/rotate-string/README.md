# 旋转字符串

> 难度：简单
>
> https://leetcode-cn.com/problems/rotate-string/

## 题目

给定两个字符串, `s` 和 `goal`。如果在若干次旋转操作之后，`s` 能变成 `goal` ，那么返回 `true` 。

`s` 的 **旋转操作** 就是将 `s `最左边的字符移动到最右边。 

例如, 若 `s = 'abcde'`，在旋转一次之后结果就是`'bcdea'` 。
 
### 示例

#### 示例 1:

```
输入: s = "abcde", goal = "cdeab"
输出: true
```

#### 示例 2:

```
输入: s = "abcde", goal = "abced"
输出: false
```

## 解题

### 模拟

```ts
/**
 * 模拟
 * @desc 时间复杂度 O(N)  空间复杂度 O(N)
 * @param s
 * @param goal
 * @returns
 */
export function rotateString(s: string, goal: string): boolean {
  if (s.length !== goal.length) return false
  if (s === goal) return true

  const len = s.length
  const goalFirst = goal.charAt(0)
  for (let i = 0; i < len; i++) {
    if (
      s.charAt(i + 1) === goalFirst
      && s.substring(i + 1, len) + s.substring(0, i + 1) === goal
    ) return true
  }

  return false
}
```


### 搜索子字符串

```ts
/**
 * 搜索子字符串
 * @desc 时间复杂度 O(N)  空间复杂度 O(N)
 * @param s
 * @param goal
 * @returns
 */
export function rotateString2(s: string, goal: string): boolean {
  return s.length === goal.length && (s + s).includes(goal)
}
```