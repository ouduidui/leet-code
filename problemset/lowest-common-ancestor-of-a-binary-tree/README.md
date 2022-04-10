# 二叉树的最近公共祖先

> 难度：中等
>
> https://leetcode-cn.com/problems/lowest-common-ancestor-of-a-binary-tree/

## 题目

给定一个二叉树, 找到该树中两个指定节点的最近公共祖先。

百度百科中最近公共祖先的定义为：“对于有根树 T 的两个节点 p、q，最近公共祖先表示为一个节点 x，满足 x 是 p、q 的祖先且 x 的深度尽可能大（**一个节点也可以是它自己的祖先**）。”

### 示例

#### 示例 1：

![binarytree](https://user-images.githubusercontent.com/54696834/162599027-b2b68017-991c-4b5b-ab5b-bb29b7d119c8.png)

```
输入：root = [3,5,1,6,2,0,8,null,null,7,4], p = 5, q = 1
输出：3
解释：节点 5 和节点 1 的最近公共祖先是节点 3 。
```

#### 示例 2：

![binarytree-1](https://user-images.githubusercontent.com/54696834/162599028-090d9ee9-85bb-47d4-abd1-84a544d9c5f1.png)

```
输入：root = [3,5,1,6,2,0,8,null,null,7,4], p = 5, q = 4
输出：5
解释：节点 5 和节点 4 的最近公共祖先是节点 5 。因为根据定义最近公共祖先节点可以为节点本身。
```

#### 示例 3：

```
输入：root = [1,2], p = 1, q = 2
输出：1
```

## 解题

### 递归

```ts
/**
 * 递归
 * @desc 时间复杂度 O(N)  空间复杂度 O(N)
 * @param root
 * @param p
 * @param q
 * @returns
 */
export function lowestCommonAncestor(
  root: TreeNode | null,
  p: TreeNode | null,
  q: TreeNode | null,
): TreeNode | null {
  let ans = root
  dfs(root, p!.val, q!.val)
  return ans

  function dfs(
    node: TreeNode | null,
    pVal: number,
    qVal: number,
  ): boolean {
    if (node === null) return false

    // 判断左右子树分别有没有p和q节点
    const leftSon = dfs(node.left, pVal, qVal)
    const rightSon = dfs(node.right, pVal, qVal)
    if (
      (leftSon && rightSon)
      || ((node.val === pVal || node.val === qVal) && (leftSon || rightSon))
    )
      ans = node

    return leftSon || rightSon || (node.val === pVal) || (node.val === qVal)
  }
}
```

### 存储父节点

```ts
/**
 * 存储父节点
 * @desc 时间复杂度 O(N)  空间复杂度 O(N)
 * @param root
 * @param p
 * @param q
 * @returns
 */
export function lowestCommonAncestor2(
  root: TreeNode | null,
  p: TreeNode | null,
  q: TreeNode | null,
): TreeNode | null {
  const parents = new Map<number, TreeNode>()
  const visited = new Set<number>()
  // 递归搜集所有父节点
  dfs(root!, parents)

  while (p !== null) {
    visited.add(p.val)
    p = parents.get(p.val) || null
  }

  while (q !== null) {
    if (visited.has(q.val))
      return q

    q = parents.get(q.val) || null
  }

  return null

  function dfs(
    node: TreeNode,
    parents: Map<number, TreeNode>,
  ) {
    if (node.left) {
      parents.set(node.left.val, node)
      dfs(node.left, parents)
    }
    if (node.right) {
      parents.set(node.right.val, node)
      dfs(node.right, parents)
    }
  }
}
```