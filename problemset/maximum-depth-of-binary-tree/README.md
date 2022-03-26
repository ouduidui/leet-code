# 二叉树的最大深度

> 难度：简单
>
> https://leetcode-cn.com/problems/maximum-depth-of-binary-tree/

## 题目

给定一个二叉树，找出其最大深度。

二叉树的深度为根节点到最远叶子节点的最长路径上的节点数。

说明: 叶子节点是指没有子节点的节点。

### 示例：

给定二叉树`[3,9,20,null,null,15,7]`，

```
    3
   / \
  9  20
    /  \
   15   7
```

返回它的最大深度 3 。

## 解法

### 深度优先遍历

```typescript
/**
 * 深度优先遍历
 * @desc 时间复杂度 O(N)   空间复杂度 O(H) 树的高度
 * @param root {TreeNode | null}
 * @return {number}
 */
export function maxDepth(root: TreeNode | null): number {
  if (root === null) return 0;
  return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1;
}
```

### 广度优先遍历

```typescript
/**
 * 广度优先遍历
 * @desc 时间复杂度 O(N)   空间复杂度 O(H) 树的高度
 * @param root {TreeNode | null}
 * @return {number}
 */
export function maxDepth2(root: TreeNode | null): number {
  if (root === null) return 0;

  const queue: TreeNode[] = [root];
  let ans = 0;

  while (queue.length) {
    ans += 1;
    const len = queue.length;
    for (let i = 0; i < len; i++) {
      const tree = queue.shift()!;
      if (tree.left) queue.push(tree.left);
      if (tree.right) queue.push(tree.right);
    }
  }

  return ans;
}
```
