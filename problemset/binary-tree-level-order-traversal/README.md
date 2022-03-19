# 二叉树的层序遍历

> 难度：中等
>
> https://leetcode-cn.com/problems/binary-tree-level-order-traversal/

## 题目

给你二叉树的根节点 `root` ，返回其节点值的 **层序遍历** 。 （即逐层地，从左到右
访问所有节点）。

### 示例

#### 示例 1：

![binary-tree-level-order-traversal](https://user-images.githubusercontent.com/88995580/159103237-829728d7-e067-4187-ae51-7a2f67660f1e.jpg)

```
输入：root = [3,9,20,null,null,15,7]
输出：[[3],[9,20],[15,7]]
```

#### 示例 2：

```
输入：root = [1]
输出：[[1]]
```

#### 示例 3：

```
输入：root = []
输出：[]
```

## 解法

```typescript
/**
 * 迭代 - 广度优先查找
 * @desc 时间复杂度 O(N)  空间复杂度 O(N)
 * @param root
 */
export function levelOrder(root: TreeNode | null): number[][] {
  if (!root) return [];
  const ans: number[][] = [];
  const queue: TreeNode[] = [root];

  while (queue.length) {
    const vals: number[] = [];
    const queueLen = queue.length;
    for (let i = 0; i < queueLen; i++) {
      const tree = queue.shift()!;
      vals.push(tree.val);
      tree.left && queue.push(tree.left);
      tree.right && queue.push(tree.right);
    }
    ans.push(vals);
  }

  return ans;
}
```
