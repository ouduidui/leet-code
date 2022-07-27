# 分数加减运算

> 难度：中等
>
> https://leetcode.cn/problems/fraction-addition-and-subtraction/

## 题目

给定一个表示分数加减运算的字符串 `expression` ，你需要返回一个字符串形式的计算结果。 

这个结果应该是不可约分的分数，即最简分数。 如果最终结果是一个整数，例如 `2`，你需要将它转换成分数形式，其分母为 `1`。所以在上述例子中, `2` 应该被转换为 `2/1`。

### 示例

#### 示例 1:

```
输入: expression = "-1/2+1/2"
输出: "0/1"
```

#### 示例 2:

```
输入: expression = "-1/2+1/2+1/3"
输出: "1/3"
```

#### 示例 3:

```
输入: expression = "1/3-1/2"
输出: "-1/6"
```

## 解题

```ts 
/**
 * 模拟
 * @desc 时间复杂度 O(N+logC)  空间复杂度 O(1)
 * @param expression
 * @returns
 */
export function fractionAddition(expression: string): string {
  const isDigit = (ch: string) => !isNaN(Number(ch))

  let denominator = 0 // 分子
  let numerator = 1 // 分母
  let index = 0
  const len = expression.length

  while (index < len) {
    // 读取分子
    let denominator1 = 0
    let sign = 1
    if (expression[index] === '-' || expression[index] === '+') {
      sign = expression[index] === '-' ? -1 : 1
      index++
    }
    while (index < len && isDigit(expression[index])) {
      denominator1 = denominator1 * 10 + Number(expression[index])
      index++
    }
    denominator1 = denominator1 * sign
    index++

    // 读取分母
    let numerator1 = 0
    while (index < len && isDigit(expression[index])) {
      numerator1 = numerator1 * 10 + Number(expression[index])
      index++
    }

    denominator = denominator * numerator1 + denominator1 * numerator
    numerator *= numerator1
  }

  if (denominator === 0) return '0/1'

  // 获取最大公约数
  const g = gcd(Math.abs(denominator), numerator)
  return `${(denominator / g) >> 0}/${(numerator / g) >> 0}`

  function gcd(a: number, b: number) {
    let remainder = a % b
    while (remainder !== 0) {
      a = b
      b = remainder
      remainder = a % b
    }
    return b
  }
}
```