# 扰乱字符串

> 难度：困难
>
> https://leetcode-cn.com/problems/scramble-string/

## 题目

使用下面描述的算法可以扰乱字符串 `s` 得到字符串 `t` ：

1. 如果字符串的长度为 1 ，算法停止
2. 如果字符串的长度 > 1 ，执行下述步骤：
   - 在一个随机下标处将字符串分割成两个非空的子字符串。即，如果已知字符串 `s` ，
     则可以将其分成两个子字符串 `x` 和 `y` ，且满足 `s = x + y` 。
   - **随机** 决定是要「交换两个子字符串」还是要「保持这两个子字符串的顺序不变」
     。即，在执行这一步骤之后，`s` 可能是 `s = x + y` 或者 `s = y + x` 。
   - 在 `x` 和 `y` 这两个子字符串上继续从步骤 1 开始递归执行此算法。

给你两个 **长度相等** 的字符串 `s1` 和 `s2`，判断 `s2` 是否是 `s1` 的扰乱字符串
。如果是，返回 true ；否则，返回 false 。

### 示例

#### 示例 1：

```
输入：s1 = "great", s2 = "rgeat"
输出：true
解释：s1 上可能发生的一种情形是：
"great" --> "gr/eat" // 在一个随机下标处分割得到两个子字符串
"gr/eat" --> "gr/eat" // 随机决定：「保持这两个子字符串的顺序不变」
"gr/eat" --> "g/r / e/at" // 在子字符串上递归执行此算法。两个子字符串分别在随机下标处进行一轮分割
"g/r / e/at" --> "r/g / e/at" // 随机决定：第一组「交换两个子字符串」，第二组「保持这两个子字符串的顺序不变」
"r/g / e/at" --> "r/g / e/ a/t" // 继续递归执行此算法，将 "at" 分割得到 "a/t"
"r/g / e/ a/t" --> "r/g / e/ a/t" // 随机决定：「保持这两个子字符串的顺序不变」
算法终止，结果字符串和 s2 相同，都是 "rgeat"
这是一种能够扰乱 s1 得到 s2 的情形，可以认为 s2 是 s1 的扰乱字符串，返回 true
```

#### 示例 2：

```
输入：s1 = "abcde", s2 = "caebd"
输出：false
```

#### 示例 3：

```
输入：s1 = "a", s2 = "a"
输出：true
```

## 解题

### 动态规划

显然「扰乱字符串」的关系是具有对称性的，即如果`s1`是`s2`的扰乱字符串，那么`s2`也
是`s1`的扰乱字符串，为了叙述方便，我们称这种情况下，`s1`和`s2`是「和谐」的。

那么如何判断`s1`和`s2`是和谐的？我们首先可以想到几个简单的判断方法：

- 如果`s1` = `s2`，那么他们是和谐的；
- 如果`s1`和`s2`长度不同，那么它们一定不是和谐的；
- 如果`s1`中某个字符`c`出现了`x1`次，而`c`在`s2`中出现了`x2`次，且`x1`不等
  于`x2`，那么它们一定不是和谐的。

那么对于剩下的情况，我们可以从`s1`的分割方法入手。假设`s1`作为根节点时被分割
成`l(s1)`和`r(s1)`两个子串，那么：

- 如果`l(s1)`和`r(s2)`没有被交换，那么`s2`需要存一种分割方
  式`s2 = l(s2) + r(s2)`，使得`l(s1)`和`l(s2)`是和谐的，并且`r(s1)`和`r(s2)`是和
  谐的；
- 如果`l(s1)`和`r(s2)`被交换了，那么`s2`需要存在一种分割方
  法`s2 = l(s2) + r(s2)`，使得`l(s1)`和`r(s2)`是和谐的，并且`r(s1)`和`l(s2)`是和
  谐的

![scramble-string](https://user-images.githubusercontent.com/54696834/159102053-74f1c7d0-11dd-4987-b7e7-3c59a2f74fcd.png)

这样一来，我们就把原本要解决的问题划分为两个本质相同、但规模更小的子问题，因此可
以考虑使用动态规划解决。

设`f(s1,s2)`来表示`s1`和`s2`是否和谐，那么可以写出状态转移：

- 当 `s1 = s2` 时，`f(s1,s2)`为 true，
- 当存在某个字符`c`，它在`s1`和`s2`中出现的次数不同，则`f(s1, s2)`为 false

因为题目保证给定的原始字符串的长度相同，因此我们只需要判断上面两种情况，如
果`s1`和`s2`不符合这两种情况，那么我们需要枚举分割点。

设`s1`和`s2`的长度为`n`，我们用`s1(x, y)`表示`s1`从第`x`个字符（从 0 开始编号）
开始，长度为`y`的子串。由于分割出的两个字符串不能为空串，那么其中一个字符串就
是`s1(0, i)`，另一个字符串为`s1(i, n-i)`。

- 对于`l(s1)`和`r(s1)`没有被交换的情况，`s2`同样需要被分为`s2(0,i)`以
  及`s2(i, n-i)`，否则长度不同的字符串是不可能和谐的，因此我们可以写出状态转移：
  - 当`i`从`1`到`n-1`遍历，但凡有一个时候满足`f(s1(0, i), s2(0, i))`为 true，同
    时`f(s1(i,n-i), s2(i,n-i))`为 true 时，则代表`f(s1, s2)`为 true，否则为
    false。
- 对于`l(s1)`和`r(s1)`被交换的情况，`s2`需要被分为`s2(0,n-i)`以及`s2(n-i, i)`，
  这样对应的长度才会相同。因此我们可以写出状态转移：
  - 当`i`从`1`到`n-1`遍历，但凡有一个时候满足`f(s1(0, i), s2(n-i, i))`为 true，
    同时`f(s1(i,n-i), s2(0,n-i))`为 true 时，则代表`f(s1, s2)`为 true，否则为
    false。

因此我们可以实现我们的代码：

```typescript
/**
 * 动态规划
 * @desc 时间复杂度 O(N^4)  空间复杂度 O(N^3)
 * @param s1
 * @param s2
 */
export function isScramble(s1: string, s2: string): boolean {
  const len = s1.length;
  const memo: number[][][] = new Array(len)
    .fill([])
    .map(() => new Array(len).fill([]).map(() => new Array(len + 1).fill(0)));
  return dfs(0, 0, len, s1, s2, memo);

  function dfs(
    i1: number,
    i2: number,
    len: number,
    s1: string,
    s2: string,
    memo: number[][][]
  ): boolean {
    if (memo[i1][i2][len] !== 0) {
      return memo[i1][i2][len] === 1;
    }

    // 判断两个子串是否相等
    if (s1.slice(i1, i1 + len) === s2.slice(i2, i2 + len)) {
      memo[i1][i2][len] = 1;
      return true;
    }

    // 判断是否存在字符 c 在两个子串中出现的次数不同
    if (!checkIfSimilar(i1, i2, len, s1, s2)) {
      memo[i1][i2][len] = -1;
      return false;
    }

    // 枚举分割位置
    for (let i = 1; i < len; i++) {
      // 不交换的情况
      if (
        dfs(i1, i2, i, s1, s2, memo) &&
        dfs(i1 + i, i2 + i, len - i, s1, s2, memo)
      ) {
        memo[i1][i2][len] = 1;
        return true;
      }

      // 交换的情况
      if (
        dfs(i1, i2 + len - i, i, s1, s2, memo) &&
        dfs(i1 + i, i2, len - i, s1, s2, memo)
      ) {
        memo[i1][i2][len] = 1;
        return true;
      }
    }

    memo[i1][i2][len] = -1;
    return false;
  }

  function checkIfSimilar(
    i1: number,
    i2: number,
    len: number,
    s1: string,
    s2: string
  ): boolean {
    const freq = new Map<string, number>();
    for (let i = i1; i < i1 + len; i++) {
      const c = s1[i];
      freq.set(c, (freq.get(c) || 0) + 1);
    }
    for (let i = i2; i < i2 + len; i++) {
      const c = s2[i];
      freq.set(c, (freq.get(c) || 0) - 1);
    }
    for (const value of freq.values()) {
      if (value !== 0) {
        return false;
      }
    }
    return true;
  }
}
```
