# 七进制数

> 难度：简单
>
> https://leetcode-cn.com/problems/base-7/

## 题目

给定一个整数 num，将其转化为 7 进制，并以字符串形式输出。

### 示例

#### 示例 1:

```
输入: num = 100
输出: "202"
```

#### 示例 2:

```
输入: num = -7
输出: "-10"
```

## 解题

```typescript
/**
 * 数学
 * @desc 时间复杂度 O(logN)  空间复杂度 O(logN)
 * @param num
 * @returns
 */
export function convertToBase7(num: number): string {
  if (num === 0) return '0';

  const isNeg = num < 0;
  num = Math.abs(num);
  let res = '';

  while (num > 0) {
    res = (num % 7) + res;
    num = Math.floor(num / 7);
  }

  return `${isNeg ? '-' : ''}${res}`;
}
```
