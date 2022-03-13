# UTF-8 编码验证

> 难度：中等
>
> https://leetcode-cn.com/problems/utf-8-validation/

## 题目

给定一个表示数据的整数数组  `data` ，返回它是否为有效的 `UTF-8` 编码。

`UTF-8 `中的一个字符可能的长度为 `1` 到 `4` 字节，遵循以下的规则：

1. 对于 `1 字节 的字符，字节的第一位设为 `0`，后面`7`位为这个符号的`unicode` 码
   。
2. 对于 `n` 字节   的字符 `(n > 1)`，第一个字节的前 `n` 位都设为 1，第 `n+1` 位
   设为 `0` ，后面字节的前两位一律设为 `10` 。剩下的没有提及的二进制位，全部为这
   个符号的 `unicode` 码。

这是 `UTF-8` 编码的工作方式：

```
   Char. number range  |        UTF-8 octet sequence
      (hexadecimal)    |              (binary)
   --------------------+---------------------------------------------
   0000 0000-0000 007F | 0xxxxxxx
   0000 0080-0000 07FF | 110xxxxx 10xxxxxx
   0000 0800-0000 FFFF | 1110xxxx 10xxxxxx 10xxxxxx
   0001 0000-0010 FFFF | 11110xxx 10xxxxxx 10xxxxxx 10xxxxxx
```

注意：输入是整数数组。只有每个整数的 **最低 8 个有效位** 用来存储数据。这意味着
每个整数只表示 1 字节的数据。

### 示例

#### 示例 1：

```
输入：data = [197,130,1]
输出：true
解释：数据表示字节序列:11000101 10000010 00000001。
这是有效的 utf-8 编码，为一个 2 字节字符，跟着一个 1 字节字符。
```

#### 示例 2：

```
但第二个延续字节不以 10 开头，所以是不符合规则的。
输入：data = [235,140,4]
输出：false
解释：数据表示 8 位的序列: 11101011 10001100 00000100.
前 3 位都是 1 ，第 4 位为 0 表示它是一个 3 字节字符。
下一个字节是开头为 10 的延续字节，这是正确的。
但第二个延续字节不以 10 开头，所以是不符合规则的。
```

## 解题

```typescript
/**
 * 遍历 + 位运算
 * @desc 时间复杂度 O(N)  空间复杂度 O(1)
 * @param data
 */
export function validUtf8(data: number[]): boolean {
  const MASK = 1 << 7; // 1000 0000

  const len = data.length;
  let index = 0;
  const isValid = (num: number) =>
    (num & ((1 << 7) + (1 << 6))) /* 1100 0000 */ === MASK;

  while (index < len) {
    // 获取头字节
    const n = getBytes(data[index]);
    if (n < 0 || index + n > len) return false;

    // 判断后续 n 个字节都否都为10开头
    for (let i = 1; i < n; i++) {
      if (!isValid(data[index + i])) return false;
    }
    index += n;
  }

  return true;

  // 计算头字节
  function getBytes(num: number): number {
    // 最高位为0
    // 则当前字符由 11 个字节组成，只有头字节，没有其余字节
    if ((num & MASK) === 0) return 1;

    // 计算头字节从最高位开始的连续 11 的个数
    let n = 0;
    let mask = MASK;
    while ((num & mask) !== 0) {
      n++;
      // 头字节不符合 UTF-8 编码的规则
      if (n > 4) return -1;
      mask >>= 1;
    }

    return n >= 2 ? n : -1;
  }
}
```
