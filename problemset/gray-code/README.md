# 格雷编码

> 难度：中等
>
> https://leetcode-cn.com/problems/gray-code/

## 题目

**n 位格雷码序列** 是一个由 `2^n` 个整数组成的序列，其中：

- 每个整数都在范围 `[0, 2^n - 1]` 内（含 `0` 和 `2^n - 1`）
- 第一个整数是 0
- 一个整数在序列中出现 **不超过一次**
- 每对 **相邻** 整数的二进制表示 **恰好一位不同** ，且 **第一个** 和 **最后一
  个** 整数的二进制表示 **恰好一位不同**

给你一个整数 n ，返回任一有效的 n 位格雷码序列 。

### 示例

#### 示例 1：

```
输入：n = 2
输出：[0,1,3,2]
解释：
[0,1,3,2] 的二进制表示是 [00,01,11,10] 。
- 00 和 01 有一位不同
- 01 和 11 有一位不同
- 11 和 10 有一位不同
- 10 和 00 有一位不同
  [0,2,3,1] 也是一个有效的格雷码序列，其二进制表示是 [00,10,11,01] 。
- 00 和 10 有一位不同
- 10 和 11 有一位不同
- 11 和 01 有一位不同
- 01 和 00 有一位不同
```

#### 示例 2：

```
输入：n = 1
输出：[0,1]
```

## 解法

### 对称生成

首先我们需要捋清楚`n`为最终的序列长度的关系，我们先抛开格雷码，然后看看返回的序
列，一定会包含所有`n`长度的二进制，因此也可推出最后的序列长度为`2^n`。

```
n = 1  -> [0, 1]
n = 2  -> [00, 01, 11, 10]
n = 3  -> [000, 001, 011, 010, 110, 111, 101, 100]
```

其次我们来看当`n`递增的时候，返回的格雷码序列的变化其实是有一点规律的，我们
拿`n=2`和`n=3`做个对比：

- 首先`n=3`的序列前四位会直接复制`n=2`的序列，并前面补 0；
- 其次后四位其实也是复制`n=2`的序列，但是在前面补 1，并且倒序插入

因此我们可以利用这个规律来实现代码

```typescript
/**
 * 对称生成
 * @desc 时间复杂度 O(2^n)   空间复杂度 O(1)
 * @param n
 */
export function grayCode(n: number): number[] {
  const ret = [0];
  for (let i = 1; i <= n; i++) {
    const m = ret.length;
    // 倒序插入
    for (let j = m - 1; j >= 0; j--) {
      // ret[j] | (1 << (i - 1)) 即在 ret[j] 的二进制前面补 1
      // 假设ret[j]为011，i为4，因此 1 << (i - 1) = 1000，因此 ret[j] | (1 << (i - 1)) = 001 | 1000 = 1001
      ret.push(ret[j] | (1 << (i - 1)));
    }
  }

  return ret;
}
```

### 二进制数转格雷码

如果我们有一个二进制数序列，我们也可以将它转换成格雷码序列，假设`n`位二进制
为`b`，对应的格雷码为`g`，转换规则如下：

```
g(i) = b(i + 1) ⊕ b(i),    0 ≤ i < n
```

其中 ⊕ 是按位异或，`g(i)`和`b(i)`分别表示`g`和`b`的第`i`位，且`b(n) = 0`。

举个例子，我们要求`n`为 3 时的格雷码序列中的第 6 个格雷码。

- 首先因为`n`为 3，我们可以得知格雷码序列长度应该为`2^3`，即长度为 8；
- 其次，我可以先求出`6`对应的二进制，为`110`，因此对于的`b(0)`就为 0，`b(1)`为
  1，`b(2)`为 1，从最后一位开始推，之后的`b(3)`、`b(4)`等等都为 0；
- 这是我们可以根据上面的公式得出
  ，`g(0) = b(1) ⊕ b(0) = 0 ⊕ 1 = 1`，`g(1) = b(2) ⊕ b(1) = 1 ⊕ 1 = 0`，`g(2) = b(3) ⊕ b(2) = 0 ⊕ 1 = 1`；
- 因此`n`为 3 时的格雷码序列中的第 6 个格雷码，对应的就是`g(2)g(1)g(0)`，也就
  是`101`。

```typescript
/**
 * 二进制数转格雷码
 * @desc 时间复杂度 O(2^n)   空间复杂度 O(1)
 * @param n
 */
export function grayCode2(n: number): number[] {
  const ret = [];
  // 1 << n  -> 2 ** n
  for (let i = 0; i < 1 << n; i++) {
    // 假设 i = 6，即二进制为 110，即(i >> 1)为 011，因此 (i >> 1) ^ i 为 011 ^ 110
    ret.push((i >> 1) /* 将 i 右移动一位 */ ^ i);
  }
  return ret;
}
```
