# 给表达式添加运算符

> 难度：困难
>
> https://leetcode-cn.com/problems/expression-add-operators/

## 题目

给定一个仅包含数字 `0-9` 的字符串 `num` 和一个目标值整数 `target` ，在 `num` 的数字之间添加 **二元** 运算符（不是一元）`+`、`-` 或 `*` ，返回 **所有** 能够得到 `target` 的表达式。

注意，返回表达式中的操作数 **不应该** 包含前导零。
 
### 示例

#### 示例 1:

```
输入: num = "123", target = 6
输出: ["1+2+3", "1*2*3"] 
解释: “1*2*3” 和 “1+2+3” 的值都是6。
```

#### 示例 2:

```
输入: num = "232", target = 8
输出: ["2*3+2", "2+3*2"]
解释: “2*3+2” 和 “2+3*2” 的值都是8。
```

#### 示例 3:

```
输入: num = "3456237490", target = 9191
输出: []
解释: 表达式 “3456237490” 无法得到 9191 。
```

## 解题

```ts
/**
 * 回溯
 * @desc 时间复杂度 O(4^n)  空间复杂度 O(N)
 * @param num
 * @param target
 * @returns
 */
export function addOperators(num: string, target: number): string[] {
  const ans: string[] = []
  backtrack(num.length, ans)
  return ans

  function backtrack(
    len: number,
    ans: string[],
    expression: string[] = [],
    i = 0,
    res = 0,
    mul = 0,
  ) {
    if (i === len) {
      if (res === target) ans.push(expression.join(''))
      return
    }

    const signIndex = expression.length
    // 占位，下面填充符号
    if (i > 0)
      expression.push('')

    let val = 0
    // 枚举截取的数字长度（取多少位），注意数字可以是单个 0 但不能有前导零
    for (let j = i; j < len && (j === i || num[i] !== '0'); j++) {
      val = val * 10 + num[j].charCodeAt(0) - '0'.charCodeAt(0)
      expression.push(num[j])
      // 表达式开头不能添加符号
      if (i === 0) {
        backtrack(len, ans, expression, j + 1, val, val)
      }
      // 枚举符号
      else {
        expression[signIndex] = '+'
        backtrack(len, ans, expression, j + 1, res + val, val)
        expression[signIndex] = '-'
        backtrack(len, ans, expression, j + 1, res - val, -val)
        expression[signIndex] = '*'
        backtrack(len, ans, expression, j + 1, res - mul + mul * val, mul * val)
      }
    }
    expression = expression.splice(signIndex, expression.length - signIndex)
  }
}
```