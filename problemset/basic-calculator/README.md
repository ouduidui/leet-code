# 基本计算器

> 难度：困难
>
> https://leetcode-cn.com/problems/basic-calculator/

## 题目

给你一个字符串表达式 `s` ，请你实现一个基本计算器来计算并返回它的值。

注意:不允许使用任何将字符串作为数学表达式计算的内置函数，比如 `eval()` 。

 
### 示例 

#### 示例 1：

```
输入：s = "1 + 1"
输出：2
```

#### 示例 2：

```
输入：s = " 2-1 + 2 "
输出：3
```

#### 示例 3：

```
输入：s = "(1+(4+5+2)-3)+(6+8)"
输出：23
```

## 解题

```ts
/**
 * 括号展开 + 栈
 * @desc 时间复杂度 O(N) 空间复杂度 O(N)
 * @param s
 * @returns
 */
export function calculate(s: string): number {
  const stack = [1]
  let sign = 1

  let result = 0
  const len = s.length
  let i = 0

  while (i < len) {
    switch (s[i]) {
      case ' ':
        i++
        break
      case '+':
        sign = stack[stack.length - 1]
        i++
        break
      case '-':
        sign = -stack[stack.length - 1]
        i++
        break
      case '(':
        stack.push(sign)
        i++
        break
      case ')':
        stack.pop()
        i++
        break
      default:
        numberHandler()
    }
  }

  function numberHandler() {
    let num = 0
    while (i < len && !(isNaN(Number(s[i]))) && s[i] !== ' ') {
      num = num * 10 + s[i].charCodeAt(0) - '0'.charCodeAt(0)
      i++
    }
    result += sign * num
  }

  return result
}
```