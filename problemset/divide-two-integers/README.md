# 两数相除

> 难度：中等
>
> https://leetcode-cn.com/problems/divide-two-integers/

## 题目

给定两个整数，被除数 `dividend` 和除数 `divisor`。将两数相除，要求不使用乘法、除
法和 `mod` 运算符。

返回被除数 `dividend` 除以除数 `divisor` 得到的商。

整数除法的结果应当截去（`truncate`）其小数部分，例如：`truncate(8.345) = 8` 以及
`truncate(-2.7335) = -2`

### 示例

#### 示例 1:

```
输入: dividend = 10, divisor = 3
输出: 3
解释: 10/3 = truncate(3.33333..) = truncate(3) = 3
```

#### 示例 2:

```
输入: dividend = 7, divisor = -3
输出: -2
解释: 7/-3 = truncate(-2.33333..) = -2
```

## 解法

```typescript
// 边缘检测
function edgeCaseHandle(
  dividend: number,
  divisor: number
): { isEdgeCage: boolean; value: number } {
  const MAX_VALUE: number = 2 ** 31 - 1;
  const MIN_VALUE: number = -(2 ** 31);

  // 考虑被除数为最小值的情况
  if (dividend === MIN_VALUE) {
    if (divisor === 1) return { isEdgeCage: true, value: MIN_VALUE };
    if (divisor === -1) return { isEdgeCage: true, value: MAX_VALUE };
  }

  // 考虑除数为最小值的情况
  if (divisor === MIN_VALUE)
    return { isEdgeCage: true, value: dividend === MIN_VALUE ? 1 : 0 };

  // 考虑被除数为 0 的情况
  if (dividend === 0) return { isEdgeCage: true, value: 0 };

  return { isEdgeCage: false, value: NaN };
}
```

### 二分法

```typescript
/**
 * 二分法
 * @desc 时间复杂度 O(logC ^ 2)   空间复杂度 O(logC)
 * @param dividend {number} 被除数
 * @param divisor {number} 除数
 * @return {number}
 */
export function divide(dividend: number, divisor: number): number {
  // 考虑边缘情况
  const { isEdgeCage, value } = edgeCaseHandle(dividend, divisor);
  if (isEdgeCage) return value;

  // 将除数和被除数都变成负数
  let rev: boolean = false; // 判断是否转变过
  if (dividend > 0) {
    dividend = -dividend;
    rev = !rev;
  }
  if (divisor > 0) {
    divisor = -divisor;
    rev = !rev;
  }

  const MAX_VALUE: number = 2 ** 31 - 1;
  let left: number = 1;
  let right: number = MAX_VALUE;
  let ans: number = 0;

  while (left <= right) {
    // 取中间值
    const mid: number = left + ((right - left) >> 1); /* 除以2，向下取整 */
    // 判断 divisor * mid 是否大于等于dividend
    const check: boolean = quickAdd(divisor, mid, dividend);

    if (check) {
      ans = mid;
      // 边缘检测
      if (mid === MAX_VALUE) {
        break;
      }
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return rev ? -ans : ans;

  /**
   * 快速乘
   * @desc 判断 y * z 是否大于等于 x
   * @param y {number} 负数
   * @param z {number} 正数
   * @param x {number} 负数
   * @return {boolean}
   */
  function quickAdd(y: number, z: number, x: number): boolean {
    let result: number = 0;
    let add: number = y;
    while (z !== 0) {
      // 如果z是奇数的话，result += add
      if ((z & 1) !== 0) {
        // z & 1 判断奇偶数，0 -> 偶数；1 -> 奇数
        // result + add >= x
        if (result < x - add) {
          return false;
        }
        result += add;
      }
      if (z !== 1) {
        // add + add >= x
        if (add < x - add) {
          return false;
        }
        add += add;
      }

      // z除以2，向下取整
      z >>= 1; //  z = z / (2^1)   -> z = z / 2
    }
    return true;
  }
}
```

### 类二分法

```typescript
/**
 * 类二分法
 * @desc 时间复杂度 O(logC)   空间复杂度 O(logC)
 * @param dividend {number} 被除数
 * @param divisor {number} 除数
 * @return {number}
 */
export function divide2(dividend: number, divisor: number): number {
  // 考虑边缘情况
  const { isEdgeCage, value } = edgeCaseHandle(dividend, divisor);
  if (isEdgeCage) return value;

  // 将除数和被除数都变成负数
  let rev: boolean = false; // 判断是否转变过
  if (dividend < 0) {
    dividend = -dividend;
    rev = !rev;
  }
  if (divisor < 0) {
    divisor = -divisor;
    rev = !rev;
  }

  const candidates: number[] = [divisor];
  let idx: number = 0;
  while (candidates[idx] <= dividend - candidates[idx]) {
    candidates.push(candidates[idx] + candidates[idx]);
    idx++;
  }
  let ans: number = 0;
  for (let i = candidates.length - 1; i >= 0; i--) {
    if (candidates[i] <= dividend) {
      ans += 1 << i /* 2^i */;
      dividend -= candidates[i];
    }
  }

  return rev ? -ans : ans;
}
```
