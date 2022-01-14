# 字符串相乘

> 难度：中等
>
> https://leetcode-cn.com/problems/multiply-strings/

## 题目

给定两个以字符串形式表示的非负整数 `num1` 和 `num2` ，返回 `num1` 和 `num2` 的乘
积，它们的乘积也表示为字符串形式。

> 不能使用任何标准库的大数类型（比如 BigInteger）或直接将输入转换为整数来处理。

### 示例

#### 示例 1:

```
输入: num1 = "2", num2 = "3"
输出: "6"
```

#### 示例 2:

```
输入: num1 = "123", num2 = "456"
输出: "56088"
```

## 解题

```typescript
/**
 * 做乘法
 * @desc 时间复杂度 O(MN)   空间复杂度 O(M+N)
 * @param num1
 * @param num2
 */
export function multiply(num1: string, num2: string): string {
  if (num1 === '0' || num2 === '0') return '0';

  const len1 = num1.length;
  const len2 = num2.length;
  // 用于存储乘积，最后一位存储个位，倒数第二位存储十位，以此类推
  let ansArr: number[] = new Array(len1 + len2).fill(0);

  // 乘法操作
  for (let i = len1 - 1; i >= 0; i--) {
    const x = Number(num1[i]);
    for (let j = len2 - 1; j >= 0; j--) {
      const y = Number(num2[j]);
      ansArr[i + j + 1] += x * y;
    }
  }

  // 合并位数
  for (let i = len1 + len2 - 1; i > 0; i--) {
    ansArr[i - 1] += Math.floor(ansArr[i] / 10);
    ansArr[i] %= 10;
  }

  // 获取起始位
  let idx = ansArr[0] === 0 ? 1 : 0;
  let ans = '';
  while (idx < len1 + len2) {
    ans += ansArr[idx];
    idx++;
  }

  return ans;
}
```

### 例子

```
e.g  1234 * 567

初始化：
len1 = 4;  len2 = 3;
ansArr = [0, 0, 0, 0, 0, 0, 0];

做乘法：
 1  2  3  4
          7
-------------
         28
       21
     14
    7

ansArr = [0, 0, 0, 7, 14, 21, 28];


 1  2  3  4
       6
-------------
      24
    18
  12
 6

ansArr = [0, 0, 0 + 6, 7 + 12, 14 + 18, 21 + 24, 28] = [0, 0, 6, 19, 32, 45, 28];


   1  2  3  4
      5
-----------------
     20
   15
 10
5

ansArr = [0, 0 + 5, 6 + 10, 19 + 15, 32 + 20, 45, 28] = [0, 5, 16, 34, 52, 45, 28];


合并位数：
ansArr = [0, 5, 16, 34, 52, 45, 28]
       = [0, 5, 16, 34, 52, 47, 8]
       = [0, 5, 16, 34, 56, 7, 8]
       = [0, 5, 16, 39, 6, 7, 8]
       = [0, 5, 19, 9, 6, 7, 8]
       = [0, 6, 9, 9, 6, 7, 8]

合并数组：
ans = 699678
```
