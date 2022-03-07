# 分数到小数

> 难度：中等
>
> https://leetcode-cn.com/problems/fraction-to-recurring-decimal/

## 题目

给定两个整数，分别表示分数的分子  `numerator` 和分母 `denominator`，以 **字符串
形式返回小数** 。

如果小数部分为循环小数，则将循环的部分括在括号内。

如果存在多个答案，只需返回 **任意一个** 。

对于所有给定的输入，**保证** 答案字符串的长度小于 10^4 。

### 示例

#### 示例 1：

```
输入：numerator = 1, denominator = 2
输出："0.5"
```

#### 示例 2：

```
输入：numerator = 2, denominator = 1
输出："2"
```

#### 示例 3：

```
输入：numerator = 2, denominator = 3
输出："0.(6)"
```

#### 示例 4：

```
输入：numerator = 4, denominator = 333
输出："0.(012)"
```

#### 示例 5：

```
输入：numerator = 1, denominator = 5
输出："0.2"
```

## 解法

```typescript
/**
 * 长除法
 * @desc 时间复杂度 O(N)  空间复杂度 O(N)
 * @param numerator
 * @param denominator
 */
export function fractionToDecimal(
  numerator: number,
  denominator: number
): string {
  if (numerator % denominator === 0) {
    return `${numerator / denominator}`;
  }

  const integerParts: (string | number)[] = [];
  if (numerator < 0 !== denominator < 0) {
    integerParts.push('-');
    numerator = Math.abs(numerator);
    denominator = Math.abs(denominator);
  }

  // 整数部分
  integerParts.push((numerator / denominator) >> 0, '.');

  // 小数部分
  const fractionParts: (string | number)[] = [];
  const maxLen = 10 ** 4 - integerParts.length; // 小数部分最大长度
  const remainderIndexDic = new Map<number, number>(); // 记录除数，如果重复则代表为循环小数
  let remainder = numerator % denominator;
  let index = 0;
  while (
    remainder !== 0 &&
    !remainderIndexDic.has(remainder) &&
    index < maxLen
  ) {
    remainderIndexDic.set(remainder, index);
    remainder *= 10;
    fractionParts.push((remainder / denominator) >> 0);
    remainder %= denominator;
    index++;
  }

  // 存在循环小数
  if (remainder !== 0 && remainderIndexDic.has(remainder)) {
    const insertIndex = remainderIndexDic.get(remainder)!;
    // 添加括号
    fractionParts.splice(insertIndex, 0, '(');
    fractionParts.push(')');
  }

  return integerParts.join('') + fractionParts.join('');
}
```
