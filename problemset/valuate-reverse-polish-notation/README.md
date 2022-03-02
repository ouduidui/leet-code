# 逆波兰表达式求值

> 难度：中等
>
> <https://leetcode-cn.com/problems/evaluate-reverse-polish-notation/>

## 题目

根据 逆波兰表示法，求表达式的值。

有效的算符包括 `+、-、*、/`。每个运算对象可以是整数，也可以是另一个逆波兰表达式
。

**注意** 两个整数之间的除法只保留整数部分。

可以保证给定的逆波兰表达式总是有效的。换句话说，表达式总会得出有效数值且不存在除
数为 `0` 的情况。

### 示例

#### 示例 1

```
输入：tokens = ["2","1","+","3","*"]
输出：9
解释：该算式转化为常见的中缀算术表达式为：((2 + 1) * 3) = 9
```

#### 示例 2

```
输入：tokens = ["4","13","5","/","+"]
输出：6
解释：该算式转化为常见的中缀算术表达式为：(4 + (13 / 5)) = 6
```

#### 示例 3

```
输入：tokens = ["10","6","9","3","+","-11","*","/","*","17","+","5","+"]
输出：22
解释：该算式转化为常见的中缀算术表达式为：
((10 * (6 / ((9 + 3) * -11))) + 17) + 5
= ((10 * (6 / (12 * -11))) + 17) + 5
= ((10 * (6 / -132)) + 17) + 5
= ((10 * 0) + 17) + 5
= (0 + 17) + 5
= 17 + 5
= 22
```

## 解题

```typescript
/**
 * 栈
 * @desc 时间复杂度 O(N)  空间复杂度 O(N)
 * @param tokens
 */
export function evalRPN(tokens: string[]): number {
  const stack: number[] = [];
  const isNumber = (s: string) =>
    s !== '+' && s !== '-' && s !== '*' && s !== '/';
  for (let i = 0; i < tokens.length; i++) {
    const token = tokens[i];

    if (isNumber(token)) {
      stack.push(Number(tokens[i]));
    } else {
      const num1 = stack.pop()!;
      const num2 = stack.pop()!;

      switch (token) {
        case '+':
          stack.push(num1 + num2);
          break;
        case '-':
          stack.push(num2 - num1);
          break;
        case '*':
          stack.push(num1 * num2);
          break;
        case '/':
          stack.push(
            num2 / num1 > 0 ? Math.floor(num2 / num1) : Math.ceil(num2 / num1)
          );
          break;
      }
    }
  }

  return stack.pop()!;
}
```
