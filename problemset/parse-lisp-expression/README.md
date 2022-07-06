# Lisp 语法解析

> 难度：困难
>
> https://leetcode.cn/problems/parse-lisp-expression/

## 题目

给你一个类似 `Lisp` 语句的字符串表达式 `expression`，求出其计算结果。

表达式语法如下所示:

- 表达式可以为整数，`let` 表达式，`add` 表达式，`mult` 表达式，或赋值的变量。表达式的结果总是一个整数。
- (整数可以是正整数、负整数、0)
- `let` 表达式采用 "(let v1 e1 v2 e2 ... vn en expr)" 的形式，其中 `let` 总是以字符串 "let"来表示，接下来会跟随一对或多对交替的变量和表达式，也就是说，第一个变量 `v1`被分配为表达式 `e1` 的值，第二个变量 `v2` 被分配为表达式 `e2` 的值，依次类推；最终 `let` 表达式的值为 `expr`表达式的值。
- `add` 表达式表示为 "(add e1 e2)" ，其中 `add` 总是以字符串 "add" 来表示，该表达式总是包含两个表达式 `e1`、`e2` ，最终结果是 `e1` 表达式的值与 `e2` 表达式的值之 **和** 。
- `mult` 表达式表示为 "(mult e1 e2)" ，其中 `mult` 总是以字符串 "mult" 表示，该表达式总是包含两个表达式 `e1`、`e2`，最终结果是 `e1` 表达式的值与 `e2` 表达式的值之 **积** 。
- 在该题目中，变量名以小写字符开始，之后跟随 0 个或多个小写字符或数字。为了方便，"add" ，"let" ，"mult" 会被定义为 "关键字" ，不会用作变量名。
- 最后，要说一下作用域的概念。计算变量名所对应的表达式时，在计算上下文中，首先检查最内层作用域（按括号计），然后按顺序依次检查外部作用域。测试用例中每一个表达式都是合法的。有关作用域的更多详细信息，请参阅示例。
 
### 示例

#### 示例 1：

```
输入：expression = "(let x 2 (mult x (let x 3 y 4 (add x y))))"
输出：14
解释：
计算表达式 (add x y), 在检查变量 x 值时，
在变量的上下文中由最内层作用域依次向外检查。
首先找到 x = 3, 所以此处的 x 值是 3 。
```

#### 示例 2：

```
输入：expression = "(let x 3 x 2 x)"
输出：2
解释：let 语句中的赋值运算按顺序处理即可。
```

#### 示例 3：

```
输入：expression = "(let x 1 y 2 x (add x y) (add x y))"
输出：5
解释：
第一个 (add x y) 计算结果是 3，并且将此值赋给了 x 。 
第二个 (add x y) 计算结果是 3 + 2 = 5 。
```

## 解题

### 递归解析

```ts
/**
 * 递归解析
 * @desc 时间复杂度 O(N) 空间复杂度 O(N)
 * @param expression
 * @returns
 */
export function evaluate(expression: string): number {
  const scope = new Map<string, number[]>()
  let start = 0

  const isDight = (ch: string): boolean => parseFloat(ch).toString() !== 'NaN'

  const isLowerCase = (ch: string): boolean => ch >= 'a' && ch <= 'z'

  return innerEvaluate(expression)

  function innerEvaluate(expression: string): number {
    if (expression[start] !== '(') {
      // 非表达式，可能为：整数或变量
      if (isLowerCase(expression[start])) {
        const v = parseVar(expression) // 变量
        const n = scope.get(v)!.length
        return scope.get(v)![n - 1]
      }
      else {
        // 整数
        return parseInt(expression)
      }
    }

    let ret: number
    start++ // 移除左括号
    if (expression[start] === 'l') {
      // let 表达式
      start += 4
      const vars = []
      while (true) {
        if (!isLowerCase(expression[start])) {
          ret = innerEvaluate(expression) // let 表达式的最后一个 expr 表达式的值
          break
        }
        const v = parseVar(expression)
        if (expression[start] === ')') {
          const n = scope.get(v)!.length
          ret = scope.get(v)![n - 1] // let 表达式的最后一个 expr 表达式的值
          break
        }
        vars.push(v)
        start++ // 移除空格
        const e = innerEvaluate(expression)

        if (!scope.has(v)) scope.set(v, [])

        scope.get(v)!.push(e)
        start++ // 移除空格
      }
      for (const v of vars)
        scope.get(v)!.pop() // 清除当前作用域的变量
    }
    else if (expression[start] === 'a') {
      // add 表达式
      start += 4 // 移除 add
      const e1 = innerEvaluate(expression)
      start++ // 移除空格
      const e2 = innerEvaluate(expression)
      ret = e1 + e2
    }
    else {
      // mult 表达式
      start += 5 // 移除 mult
      const e1 = innerEvaluate(expression)
      start++ // 移除空格
      const e2 = innerEvaluate(expression)
      ret = e1 * e2
    }
    start++ // 移除右括号
    return ret
  }

  /**
   * 解析整数
   * @param expression
   * @returns
   */
  function parseInt(expression: string): number {
    const n = expression.length
    let ret = 0
    let sign: 1 | -1 = 1
    if (expression[start] === '-') {
      sign = -1
      start++
    }
    while (start < n && isDight(expression[start])) {
      ret = ret * 10 + Number(expression[start])
      start++
    }
    return sign * ret
  }

  /**
   * 解析变量
   * @param expression
   * @returns
   */
  function parseVar(expression: string): string {
    const n = expression.length
    let ret = ''
    while (start < n && expression[start] !== ' ' && expression[start] !== ')') {
      ret += expression[start]
      start++
    }
    return ret
  }
}
```

### 状态机

```ts
/**
 * 状态机
 * @desc 时间复杂度 O(N) 空间复杂度 O(N)
 * @param expression
 * @returns
 */
export function evaluate2(expression: string): number {
  enum EXPR_STATUS {
    VALUE, // 初始状态
    NONE, // 表达式类型未知
    LET, // let 表达式
    LET1, // let 表达式已经解析了 vi 变量
    LET2, // let 表达式已经解析了最后一个表达式 expr
    ADD, // add 表达式
    ADD1, // add 表达式已经解析了 e1 表达式
    ADD2, // add 表达式已经解析了 e2 表达式
    MULT, // mult 表达式
    MULT1, // mult 表达式已经解析了 e1 表达式
    MULT2, // mult 表达式已经解析了 e2 表达式
    DONE, // 解析完成
  }

  class Expr {
    v = ''
    value = 0
    e1 = 0
    e2 = 0
    constructor(public status: EXPR_STATUS) { }
  }

  const scope = new Map<string, number[]>()
  const vars: string[][] = []
  let start = 0
  const n = expression.length
  const stack = []
  let cur = new Expr(EXPR_STATUS.VALUE)

  while (start < n) {
    if (expression[start] === ' ') {
      start++ // 去掉空格
      continue
    }
    if (expression[start] === '(') {
      start++ // 去掉左括号
      stack.push(cur)
      cur = new Expr(EXPR_STATUS.NONE)
      continue
    }

    let sb: string | number = ''
    if (expression[start] === ')') {
      // 本质上把表达式转成一个 token
      start++ // 去掉右括号
      if (cur.status === EXPR_STATUS.LET2) {
        sb = cur.value
        // 清除作用域
        for (const v of vars[vars.length - 1])
          scope.get(v)!.pop()

        vars.pop()!
      }
      else if (cur.status === EXPR_STATUS.ADD2) {
        sb = cur.e1 + cur.e2
      }
      else {
        sb = cur.e1 * cur.e2
      }
      cur = stack.pop()! // 获取上层状态
    }
    else {
      while (start < n && expression[start] !== ' ' && expression[start] !== ')') {
        sb += expression[start]
        start++
      }
    }
    const token = sb

    switch (cur.status) {
      case EXPR_STATUS.VALUE:
        cur.value = parseInt(token as string)
        cur.status = EXPR_STATUS.DONE
        break

      case EXPR_STATUS.NONE:
        if (token === 'let') {
          cur.status = EXPR_STATUS.LET
          vars.push([]) // 记录该层作用域的所有变量, 方便后续的清除
        }
        else if (token === 'add') { cur.status = EXPR_STATUS.ADD }
        else if (token === 'mult') { cur.status = EXPR_STATUS.MULT }
        break

      case EXPR_STATUS.LET:
        if (expression[start] === ')') { // let 表达式的最后一个 expr 表达式
          cur.value = calculateToken(scope, token as string)
          cur.status = EXPR_STATUS.LET2
        }
        else {
          cur.v = token as string
          vars[vars.length - 1].push(token as string) // 记录该层作用域的所有变量, 方便后续的清除
          cur.status = EXPR_STATUS.LET1
        }
        break
      case EXPR_STATUS.LET1:
        if (!scope.has(cur.v))
          scope.set(cur.v, [])

        scope.get(cur.v)!.push(calculateToken(scope, token as string))
        cur.status = EXPR_STATUS.LET
        break
      case EXPR_STATUS.ADD:
        cur.e1 = calculateToken(scope, token as string)
        cur.status = EXPR_STATUS.ADD1
        break
      case EXPR_STATUS.ADD1:
        cur.e2 = calculateToken(scope, token as string)
        cur.status = EXPR_STATUS.ADD2
        break
      case EXPR_STATUS.MULT:
        cur.e1 = calculateToken(scope, token as string)
        cur.status = EXPR_STATUS.MULT1
        break
      case EXPR_STATUS.MULT1:
        cur.e2 = calculateToken(scope, token as string)
        cur.status = EXPR_STATUS.MULT2
        break
    }
  }

  return cur.value

  function calculateToken(scope: Map<string, number[]>, token: string): number {
    if (token[0] >= 'a' && token[0] <= 'z') {
      const n = scope.get(token)!.length
      return scope.get(token)![n - 1]
    }
    else {
      return parseInt(token)
    }
  }
}
```