# 使括号有效的最少添加

> 难度：中等
>
> https://leetcode.cn/problems/minimum-add-to-make-parentheses-valid/

## 题目

只有满足下面几点之一，括号字符串才是有效的：

- 它是一个空字符串，或者
- 它可以被写成 `AB` （`A` 与 `B` 连接）, 其中 `A` 和 `B` 都是有效字符串，或者
- 它可以被写作 `(A)`，其中 `A` 是有效字符串。

给定一个括号字符串 `s` ，移动N次，你就可以在字符串的任何位置插入一个括号。

- 例如，如果 `s = "()))"` ，你可以插入一个开始括号为 `"(()))"` 或结束括号为 `"())))"` 。
- 
返回 为使结果字符串 s 有效而必须添加的最少括号数。

### 示例

#### 示例 1：

```
输入：s = "())"
输出：1
```

#### 示例 2：

```
输入：s = "((("
输出：3
```

## 解题

```ts 
/**
 * 贪心
 * @desc 时间复杂度 O(N)  空间复杂度 O(1)
 * @param s
 * @returns
 */
export function minAddToMakeValid(s: string): number {
  let ans = 0
  let leftCount = 0
  const length = s.length
  for (let i = 0; i < length; i++) {
    const c = s[i]
    if (c === '(') {
      leftCount++
    }
    else {
      if (leftCount > 0) leftCount--
      else ans++
    }
  }
  ans += leftCount
  return ans
}
```