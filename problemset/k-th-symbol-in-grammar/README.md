# 第K个语法符号

> 难度：中等
>
> https://leetcode.cn/problems/k-th-symbol-in-grammar/

## 题目

我们构建了一个包含 `n` 行( 索引从 `1`  开始 )的表。首先在第一行我们写上一个 `0`。接下来的每一行，将前一行中的`0`替换为`01`，`1`替换为`10`。

- 例如，对于 n = `3` ，第 `1` 行是 `0` ，第 `2` 行是 `01` ，第3行是 `0110` 。
- 
给定行数 `n` 和序数 `k`，返回第 `n` 行中第 `k` 个字符。（ `k` 从索引 `1` 开始）

### 示例

#### 示例 1:

```
输入: n = 1, k = 1
输出: 0
解释: 第一行：0
```

#### 示例 2:

```
输入: n = 2, k = 1
输出: 0
解释: 
第一行: 0 
第二行: 01
```

#### 示例 3:

```
输入: n = 2, k = 2
输出: 1
解释:
第一行: 0
第二行: 01
```

## 解题

### 递归

```ts 
/**
 * 递归
 * @desc 时间复杂度 O(n) 空间复杂度 O(n)
 * @param n
 * @param k
 * @returns
 */
export function kthGrammar(n: number, k: number): number {
  return n === 1 ? 0 : (k & 1) ^ 1 ^ kthGrammar(n - 1, (k + 1) / 2)
}
```

### 找规律 + 位运算

```ts 
/**
 * 找规律 + 位运算
 * @desc 时间复杂度 O(logN) 空间复杂度 O(1)
 * @param n
 * @param k
 * @returns
 */
export function kthGrammar2(n: number, k: number): number {
  k--
  let res = 0
  while (k > 0) {
    k &= k - 1
    res ^= 1
  }
  return res
}
```