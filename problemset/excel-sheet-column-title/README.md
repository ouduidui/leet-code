# Excel 表列名称

> 难度：简单
>
> https://leetcode-cn.com/problems/excel-sheet-column-title/

## 题目

给你一个整数 ` columnNumber` ，返回它在 `Excel` 表中相对应的列名称。

例如：

```
A -> 1
B -> 2
C -> 3
...
Z -> 26
AA -> 27
AB -> 28
...
```

### 示例

#### 示例 1：

```
输入：columnNumber = 1
输出："A"
```

#### 示例 2：

```
输入：columnNumber = 28
输出："AB"
```

#### 示例 3：

```
输入：columnNumber = 701
输出："ZY"
```

#### 示例 4：

```
输入：columnNumber = 2147483647
输出："FXSHRXW"
```

## 解题

### 数学

```typescript
/**
 * 数学
 * @desc 时间复杂度 O(logN)  空间复杂度 O(1)
 * @param columnNumber
 */
export function convertToTitle(columnNumber: number): string {
  let str = '';
  while (columnNumber > 0) {
    const a = ((columnNumber - 1) % 26) + 1;
    str = String.fromCharCode('A'.charCodeAt(0) + a - 1) + str;
    columnNumber = ((columnNumber - a) / 26) >> 0;
  }

  return str;
}
```

### 数学 - 优化

```typescript
/**
 * 数学 - 优化
 * @desc 时间复杂度 O(logN)  空间复杂度 O(1)
 * @param columnNumber
 */
export function convertToTitle2(columnNumber: number): string {
  let str = '';
  while (columnNumber > 0) {
    // 1~26  ->  0~25
    columnNumber--;
    str = String.fromCharCode('A'.charCodeAt(0) + (columnNumber % 26)) + str;
    // 当x区间为[0,25]时， (columnNumber - x) / 26 = (columnNumber - 1) / 26
    columnNumber = (columnNumber / 26) >> 0;
  }

  return str;
}
```
