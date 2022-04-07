# 基本计算器 II

> 难度：中等
>
> https://leetcode-cn.com/problems/basic-calculator-ii/

## 题目

给你一个字符串表达式 `s` ，请你实现一个基本计算器来计算并返回它的值。

整数除法仅保留整数部分。

你可以假设给定的表达式总是有效的。所有中间结果将在 `[-2^31, 2^31 - 1]` 的范围内。

注意：不允许使用任何将字符串作为数学表达式计算的内置函数，比如 `eval()` 。

 
### 示例 

#### 示例 1：

```
输入：s = "3+2*2"
输出：7
```

#### 示例 2：

```
输入：s = " 3/2 "
输出：1
```

#### 示例 3：

```
输入：s = " 3+5 / 2 "
输出：5
```

## 解题

```ts
/**
 * 栈
 * @desc 时间复杂度 O(N)  空间复杂度 O(N)
 * @param s
 * @returns
 */
export function calculate(s: string): number {
  s = s.trim()

  const stack: number[] = []
  let preSign = '+'
  let num = 0
  const len = s.length
  const isNumber = (s: string) => !isNaN(Number(s))

  for (let i = 0; i < len; i++) {
    if (isNumber(s[i]) && s[i] !== ' ')
      num = num * 10 + s[i].charCodeAt(0) - '0'.charCodeAt(0)

    if (!isNumber(s[i]) || i === len - 1) {
      switch (preSign) {
        case '+':
          stack.push(num)
          break
        case '-':
          stack.push(-num)
          break
        case '*':
          stack.push(stack.pop()! * num)
          break
        case '/':
          stack.push(stack.pop()! / num | 0)
          break
      }
      preSign = s[i]
      num = 0
    }
  }

  let ans = 0
  while (stack.length)
    ans += stack.pop()!

  return ans
}
```