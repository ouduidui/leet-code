# 迷你语法分析器

> 难度：中等
>
> https://leetcode-cn.com/problems/mini-parser/

## 题目

给定一个字符串 `s` 表示一个整数嵌套列表，实现一个解析它的语法分析器并返回解析的结果 `NestedInteger` 。

列表中的每个元素只可能是整数或整数嵌套列表

### 示例 

#### 示例 1：

```
输入：s = "324",
输出：324
解释：你应该返回一个 NestedInteger 对象，其中只包含整数值 324。
```

#### 示例 2：

```
输入：s = "[123,[456,[789]]]",
输出：[123,[456,[789]]]
解释：返回一个 NestedInteger 对象包含一个有两个元素的嵌套列表：
1. 一个 integer 包含值 123
2. 一个包含两个元素的嵌套列表：
    i.  一个 integer 包含值 456
    ii. 一个包含一个元素的嵌套列表
         a. 一个 integer 包含值 789
```

## 解题

### 深度优先遍历

```ts
/**
 * 深度优先搜索
 * @desc 时间复杂度 O(N)  空间复杂度 O(N)
 * @param s
 * @returns
 */
export function deserialize(s: string): NestedInteger {
  let i = 0
  return dfs(s)

  function dfs(s: string) {
    if (s[i] === '[') {
      i++
      const ni = new NestedInteger()
      while (s[i] !== ']') {
        ni.add(dfs(s))
        if (s[i] === ',') i++
      }
      i++
      return ni
    }
    else {
      let negative = false
      if (s[i] === '-') {
        negative = true
        i++
      }
      let num = 0
      while (i < s.length && isDigit(s[i])) {
        num = num * 10 + s[i].charCodeAt(0) - '0'.charCodeAt(0)
        i++
      }
      if (negative)
        num = -num
      return new NestedInteger(num)
    }
  }

  function isDigit(ch: string): boolean {
    return !isNaN(Number(ch))
  }
}
```

### 栈

```ts
/**
 * 栈
 * @desc 时间复杂度 O(N)  空间复杂度 O(N)
 * @param s
 * @returns
 */
export function deserialize2(s: string): NestedInteger {
  if (s[0] !== '[') return new NestedInteger(Number(s))
  const isDigit = (ch: string): boolean => !isNaN(Number(ch))

  const stack: NestedInteger[] = []
  let num = 0
  let negative = false
  for (let i = 0; i < s.length; i++) {
    const ch = s[i]
    if (ch === '-') {
      negative = true
    }
    else if (isDigit(ch)) {
      num = num * 10 + ch.charCodeAt(0) - '0'.charCodeAt(0)
    }
    else if (ch === '[') {
      stack.push(new NestedInteger())
    }
    else if (ch === ',' || ch === ']') {
      if (isDigit(s[i - 1])) {
        if (negative) num = -num
        stack[stack.length - 1].add(new NestedInteger(num))
      }
      num = 0
      negative = false
      if (ch === ']' && stack.length > 1) {
        const ni = stack.pop()!
        stack[stack.length - 1].add(ni)
      }
    }
  }

  return stack.pop()!
}
```