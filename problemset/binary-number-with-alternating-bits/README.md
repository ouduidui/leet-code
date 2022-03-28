# 交替位二进制数

> 难度：简单
>
> https://leetcode-cn.com/problems/binary-number-with-alternating-bits/

## 题目

给定一个正整数，检查它的二进制表示是否总是 `0`、`1` 交替出现：换句话说，就是二进制表示中相邻两位的数字永不相同。

 
### 示例

#### 示例 1：

```
输入：n = 5
输出：true
解释：5 的二进制表示是：101
```

#### 示例 2：

```
输入：n = 7
输出：false
解释：7 的二进制表示是：111.
```

#### 示例 3：

```
输入：n = 11
输出：false
解释：11 的二进制表示是：1011.
```

## 解题

### 模拟

```ts
/**
 * 模拟
 * @desc 时间复杂度 O(logN)  空间复杂度 O(1)
 * @param n
 * @returns
 */
export function hasAlternatingBits(n: number): boolean {
  let prev: 0 | 1 = 0

  while (n !== 0) {
    const cur = (n & 1) as 0 | 1
    if (cur === prev)
      return false

    prev = cur
    n = n >> 1
  }

  return true
}
```


### 位运算

```ts
/**
 * 位运算
 * @desc 时间复杂度 O(1)  空间复杂度 O(1)
 * @param n
 * @returns
 */
export function hasAlternatingBits2(n: number): boolean {
  const a = n ^ (n >> 1)
  return (a & (a + 1)) === 0
}
```