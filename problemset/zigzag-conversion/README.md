# Z 字形变换

> 难度：中等
>
> https://leetcode-cn.com/problems/zigzag-conversion/

## 题目

将一个给定字符串 1 根据给定的行数 `numRows` ，以从上往下、从左到右进行`Z`字形排
列。

比如输入字符串为 `"PAYPALISHIRING"` 行数为 `3` 时，排列如下：

```
P   A   H   N
A P L S I I G
Y   I   R
```

之后，你的输出需要从左往右逐行读取，产生出一个新的字符串，比如
：`"PAHNAPLSIIGYIR"`。

请你实现这个将字符串进行指定行数变换的函数：

`string convert(string s, int numRows);`

### 示例

#### 示例 1：

```
输入：s = "PAYPALISHIRING", numRows = 3
输出："PAHNAPLSIIGYIR"
```

#### 示例 2：

```
输入：s = "PAYPALISHIRING", numRows = 4
输出："PINALSIGYAHRPI"
解释：
P     I    N
A   L S  I G
Y A   H R
P     I
```

#### 示例 3：

```
输入：s = "A", numRows = 1
输出："A"
```

## 解法

### 按行排序

```typescript
/**
 * 按行排序
 * @desc 时间复杂度 -> O(N)   空间复杂度 -> O(N)
 * @param s {string}
 * @param numRows {number}
 * @return {string}
 */
export function convert(s: string, numRows: number): string {
  if (numRows <= 1) return s;
  // 初始化一个numRows长度的数组，填充空字符串
  const resArr: Array<string> = Array(numRows).fill('');

  // 一个循环的数量
  const cycleCount: number = 2 * numRows - 2;
  // 遍历字符串
  for (let i: number = 0; i < s.length; i++) {
    // 获取在一个循环周期内的位置
    const j: number = i % cycleCount;
    if (j < numRows) {
      // 向下时
      resArr[j] += s[i];
    } else {
      // 向上时
      // resArr[numRows - 1 - (j - numRows + 1)] += s[i];
      resArr[2 * numRows - j - 2] += s[i];
    }
  }

  return resArr.join('');
}
```
