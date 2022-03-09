# Excel 表列序号

> 难度：简单
>
> https://leetcode-cn.com/problems/excel-sheet-column-number/

## 题目

给你一个字符串  `columnTitle` ，表示 `Excel` 表格中的列名称。返回 **该列名称对应
的列序号** 。

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

#### 示例 1:

```
输入: columnTitle = "A"
输出: 1
```

#### 示例  2:

```
输入: columnTitle = "AB"
输出: 28
```

#### 示例  3:

```
输入: columnTitle = "ZY"
输出: 701
```

## 解题

```typescript
/**
 * 进制转换
 * @desc 时间复杂度 O(N)  空间复杂度 O(1)
 * @param columnTitle
 */
export function titleToNumber(columnTitle: string): number {
  let result = 0;
  const len = columnTitle.length;
  for (let i = len - 1; i >= 0; i--) {
    const letter = columnTitle[i].charCodeAt(0) - 'A'.charCodeAt(0) + 1;
    result += letter * 26 ** (len - 1 - i);
  }

  return result;
}
```
