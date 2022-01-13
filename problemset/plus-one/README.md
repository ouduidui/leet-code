# 加一

> 难度：简单
>
> https://leetcode-cn.com/problems/plus-one/

## 题目

给定一个由 **整数** 组成的 非空 数组所表示的非负整数，在该数的基础上加一。

最高位数字存放在数组的首位， 数组中每个元素只存储单个数字。

你可以假设除了整数 `0` 之外，这个整数不会以零开头。

### 示例

#### 示例 1：

```
输入：digits = [1,2,3]
输出：[1,2,4]
解释：输入数组表示数字 123。
```

#### 示例 2：

```
输入：digits = [4,3,2,1]
输出：[4,3,2,2]
解释：输入数组表示数字 4321。
```

#### 示例 3：

```
输入：digits = [0]
输出：[1]
```

## 解题

```typescript
/**
 * 遍历
 * @param digits {number[]}
 * @return {number[]}
 */
export function plusOne(digits: number[]): number[] {
  let carry = 1;
  for (let i = digits.length - 1; i >= 0; i--) {
    let num = digits[i];
    if (carry === 1) {
      const sum = num + carry;
      digits[i] = sum % 10;
      carry = sum >= 10 ? 1 : 0;
    } else {
      return digits;
    }
  }

  if (carry === 1) digits.unshift(carry);

  return digits;
}
```
