# 二叉树的最小深度

> 难度：简单
>
> https://leetcode-cn.com/problems/minimum-depth-of-binary-tree/

## 题目

给定一个二叉树，找出其最小深度。

最小深度是从根节点到最近叶子节点的最短路径上的节点数量。

**说明：** 叶子节点是指没有子节点的节点。

### 示例

#### 示例 1：

![minimum-depth-of-binary-tree](https://user-images.githubusercontent.com/54696834/159101988-5a4abe4a-2903-45c7-86f5-5a335f507c2d.jpg)

```
输入：root = [3,9,20,null,null,15,7]
输出：2
```

#### 示例 2：

```
输入：root = [2,null,3,null,4,null,5,null,6]
输出：5
```

## 解法

### 深度优先搜索

```typescript
/**
 * 深度优先搜索
 * @desc 时间复杂度 O(N)  空间复杂度 O(H) 二叉树的高度
 * @param root
 */
export function minDepth(root: TreeNode | null): number {
  if (root === null) return 0;

  if (root.left === null && root.right === null) return 1;

  let ret = Number.MAX_VALUE;
  if (root.left) {
    ret = Math.min(minDepth(root.left), ret);
  }
  if (root.right) {
    ret = Math.min(minDepth(root.right), ret);
  }

  return ret + 1;
}
```

### 广度优先搜索

```typescript
/**
 * 广度优先搜索
 * @desc 时间复杂度 O(N)  空间复杂度 O(N)
 * @param root
 */
export function minDepth2(root: TreeNode | null): number {
  if (root === null) return 0;
  const queue: Array<{ node: TreeNode; depth: number }> = [
    { node: root, depth: 1 }
  ];
  while (queue.length) {
    const { node, depth } = queue.pop()!;
    if (node.left === null && node.right === null) return depth;
    if (node.left) queue.unshift({ node: node.left, depth: depth + 1 });
    if (node.right) queue.unshift({ node: node.right, depth: depth + 1 });
  }

  return 0;
}
```
