# 不同的二叉搜索树

> 难度：中等
>
> https://leetcode-cn.com/problems/unique-binary-search-trees/

## 题目

给你一个整数 `n` ，求恰由 `n` 个节点组成且节点值从 `1` 到 `n` 互不相同的 **二叉
搜索树** 有多少种？返回满足题意的二叉搜索树的种数。

### 示例

#### 示例 1：

![unique-binary-search-trees-1](https://user-images.githubusercontent.com/54696834/159102067-44567cdb-7696-450b-9240-04a2ed454800.jpg)

```
输入：n = 3
输出：5
```

#### 示例 2：

```
输入：n = 1
输出：1
```

## 解题

### 回溯

```typescript
/**
 * 回溯
 * @desc 时间复杂度 O(4^N / √N)   空间复杂度 O(4^N / √N)
 * @param n {number}
 * @return {number}
 */
export function numTrees(n: number): number {
  if (n === 0 || n === 1) return n;
  return dfs(1, n).length;

  function dfs(start: number, end: number): Array<TreeNode | null> {
    const allTrees: Array<TreeNode | null> = [];

    if (start > end) return [null];

    for (let i = start; i <= end; i++) {
      const leftTrees = dfs(start, i - 1);
      const rightTrees = dfs(i + 1, end);

      for (const left of leftTrees) {
        for (const right of rightTrees) {
          const tree = new TreeNode(i);
          tree.left = left;
          tree.right = right;
          allTrees.push(tree);
        }
      }
    }

    return allTrees;
  }
}
```

### 动态规划

给定一个有序序列 `1 ... n`，为了构建出一颗二叉搜索树，我们可以遍历每个数字`i`，
将该数字作为树根，将 `1 ... (i - 1)` 序列作为左子树，将 `(i + 1) ... n`序列作为
右子树。接着我们可以按照相同的方式递归构建左子树和右子树。

在上述构建的过程中，由于根的不同，因此我们能确保每颗二叉搜索树是唯一的。

由此可见，原问题可以分解成规模较小的两个子问题，且子问题的解可以复用。

题目要求计算不同二叉搜索树的个数，为此我们可以定义两个函数：

- `G(n)`：长度为`n`的序列能构成的不同二叉搜索树的个数
- `F(i, n)`：以`i`为根、序列长度为`n`的不同二叉搜索树个数（`1 ≤ i ≤ n`）

可见，`G(n)`是我们求解需要的函数。

稍后我们可以看到，`G(n)`可以从`F(i, n)`得到，而`F(i, n)`又会递归地依赖于`G(n)`。

首先，根据前面的思路，不同的二叉搜索树的总数为`G(n)`，是对遍历所
有`i (1 ≤ i ≤ n)`的`F(i, n)`之和。

```
G(n) = F(1, n) + F(2, n) + ... + F(n - 1, n) + F(n, n)
```

对于边界情况，当序列长度为 1（只有根）或为 0（空树）时，只有一种情况，即：

```
G(0) = 1
G(1) = 1
```

给定序列 `1 ... n`，我们选择数字 `i` 作为根，则根为`i`的所有二叉搜索树的集合是左
子树集合和右子树集合
的[笛卡尔积](https://baike.baidu.com/item/%E7%AC%9B%E5%8D%A1%E5%B0%94%E4%B9%98%E7%A7%AF/6323173)
，对于笛卡尔积中的每个元素，加上根节点之后形成完整的二叉搜索树，如下图所示：

![unique-binary-search-trees-2](https://user-images.githubusercontent.com/54696834/159102054-9279894c-90de-4e7c-a36c-bd7165102c22.png)

举例而言，创建以`3`为根，长度为`7`的不同二叉搜索树，整个序列
是`[1,2,3,4,5,6,7]`，我们需要从左子序列`[1,2]`构建左子树，从右子序
列`[4,5,6,7]`构建右子树，然后将它们组合（即笛卡尔积）。

对于这个例子，不同的二叉搜索树的个数为`F(3, 7)`，我们将`[1, 2]`构建不同左子树的
数量表示为`G(2)`，从`[4, 5, 6, 7]`构建不同的右子树的数量表示为`G(4)`，注意
到`G(n)`和序列的内容无关，只和序列的长度有关，于是`F(3, 7) = G(2) · G(4)`，因此
我们可以得到下面公式：

```
F(i, n) = G(i - 1) · G(n - i)
```

因此我们结合上面的公式，可以得到`G(n)`的递归表达式：

```
G(n) = G(1 - 1)·G(n - 1) + G(2 - 1)·G(n - 2) + ... + G(i - 1)·G(n - i) + ... + G(n - 1)·G(n - n)
```

至此，我们从小到大计算`G`函数即可：

```typescript
/**
 * 动态规划
 * @desc 时间复杂度 O(N^2)   空间复杂度 O(N)
 * @param n {number}
 * @return {number}
 */
export function numTrees2(n: number): number {
  const g = new Array(n + 1).fill(0);
  g[0] = g[1] = 1;

  for (let i = 2; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
      g[i] += g[j - 1] * g[i - j];
    }
  }

  return g[n];
}
```

### 数学

事实上，我们从上面的方法推导出的`G(n)`函数的值在数学上被称
为[卡塔兰数](https://baike.baidu.com/item/%E5%8D%A1%E7%89%B9%E5%85%B0%E6%95%B0/6125746)
,卡塔兰数更便于计算的定义如下：

```
C(0) = 1,
C(n+1) = (2(2n+1)) / (n + 2)  * C(n)
```

```typescript
/**
 * 数学
 * @desc 时间复杂度 O(N)   空间复杂度 O(1)
 * @param n {number}
 * @return {number}
 */
export function numTrees3(n: number): number {
  let c = 1;
  for (let i = 0; i < n; i++) {
    c = (c * 2 * (2 * i + 1)) / (i + 2);
  }

  return c;
}
```
