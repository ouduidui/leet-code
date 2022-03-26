# 复数乘法

> 难度：中等
>
> https://leetcode-cn.com/problems/complex-number-multiplication/

## 题目

**复数** 可以用字符串表示，遵循 **"实部+虚部 i"** 的形式，并满足下述条件：

- 实部 是一个整数，取值范围是 [-100, 100]
- 虚部 也是一个整数，取值范围是 [-100, 100]
- i^2 == -1

给你两个字符串表示的复数 `num1` 和 `num2` ，请你遵循复数表示形式，返回表示它们乘
积的字符串。

### 示例

#### 示例 1：

```
输入：num1 = "1+1i", num2 = "1+1i"
输出："0+2i"
解释：(1 + i) * (1 + i) = 1 + i2 + 2 * i = 2i ，你需要将它转换为 0+2i 的形式。
```

#### 示例 2：

```
输入：num1 = "1+-1i", num2 = "1+-1i"
输出："0+-2i"
解释：(1 - i) * (1 - i) = 1 + i2 - 2 * i = -2i ，你需要将它转换为 0+-2i 的形式。
```

## 解题

```typescript
/**
 * 模拟
 * @desc 时间复杂度 O(1)  空间复杂度 O(1)
 * @param num1
 * @param num2
 */
export function complexNumberMultiply(num1: string, num2: string): string {
  const realNumber1 = parseInt(num1.split('+')[0]) || 0;
  const imaginaryNumber1 = parseInt(num1.split('+')[1].split('i')[0]) || 0;
  const realNumber2 = parseInt(num2.split('+')[0]) || 0;
  const imaginaryNumber2 = parseInt(num2.split('+')[1].split('i')[0]) || 0;

  return `${realNumber1 * realNumber2 - imaginaryNumber1 * imaginaryNumber2}+${
    realNumber1 * imaginaryNumber2 + realNumber2 * imaginaryNumber1
  }i`;
}
```
