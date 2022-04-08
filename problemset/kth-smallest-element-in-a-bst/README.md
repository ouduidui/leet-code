# 二叉搜索树中第K小的元素

> 难度：中等
>
> https://leetcode-cn.com/problems/kth-smallest-element-in-a-bst/

## 题目

给定一个二叉搜索树的根节点 `root` ，和一个整数 `k `，请你设计一个算法查找其中第 `k` 个最小元素（从 1 开始计数）。

### 示例 

#### 示例 1：

![kthtree1](https://user-images.githubusercontent.com/54696834/162350379-51c4a593-7a83-4690-9f43-0af916f5b048.jpg)

```
输入：root = [3,1,4,null,2], k = 1
输出：1
```

#### 示例 2：

![kthtree2](https://user-images.githubusercontent.com/54696834/162350383-216f2fbc-3008-4da6-b2ca-24b93503ef6b.jpg)

```
输入：root = [5,3,6,2,4,null,null,1], k = 3
输出：3
```

## 解题

### 中序遍历

```ts
/**
 * 中序遍历
 * @desc 时间复杂度 O(H+K)  空间复杂度 O(H)
 * @param root
 * @param k
 * @returns
 */
export function kthSmallest(root: TreeNode | null, k: number): number {
  if (root === null) return -1

  const stack: TreeNode[] = []
  let cur: TreeNode| null = root
  while (cur || stack.length) {
    while (cur !== null) {
      stack.push(cur)
      cur = cur.left
    }
    cur = stack.pop()!
    k--
    if (k === 0)
      break

    cur = cur.right
  }

  return (cur as TreeNode).val
}
```

### 记录子树的结点数

```ts
/**
 * 记录子树的结点数
 * @desc 时间复杂度 O(N)  空间复杂度 O(logN)
 * @param root
 * @param k
 * @returns
 */
export function kthSmallest2(root: TreeNode | null, k: number): number {
  return new BST(root).kthSmallest(k)
}

class BST {
  nodeNum = new Map<TreeNode, number>()

  constructor(
    public root: TreeNode | null,
  ) {
    this.countNodeNum(root)
  }

  /**
   * 统计以node为根结点的子树的结点数
   * @param node
   * @returns
   */
  private countNodeNum(node: TreeNode | null): number {
    if (node === null) return 0

    const nums = 1 + this.countNodeNum(node.left) + this.countNodeNum(node.right)
    this.nodeNum.set(node, nums)
    return nums
  }

  /**
   * 返回二叉搜索树中第k小的元素
   * @param k
   * @returns
   */
  kthSmallest(k: number): number {
    let node: TreeNode | null = this.root
    while (node !== null) {
      const left = this.getNodeNum(node.left)
      if (left === k - 1) break
      if (left < k - 1) k -= left + 1
      node = node.left
    }

    return (node as TreeNode).val
  }

  /**
   * 获取以node为根结点的子树的结点数
   * @param node
   * @returns
   */
  private getNodeNum(node: TreeNode | null): number {
    if (node === null) return 0
    return this.nodeNum.get(node) || 0
  }
}
```