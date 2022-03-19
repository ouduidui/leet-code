# 二叉树的层序遍历 II

> 难度：中等
>
> https://leetcode-cn.com/problems/binary-tree-level-order-traversal-ii/

## 题目

给你二叉树的根节点 `root` ，返回其节点值 **自底向上的层序遍历** 。 （即按从叶子
节点所在层到根节点所在的层，逐层从左向右遍历）

### 示例

#### 示例 1：

![binary-tree-level-order-traversal-ii](https://user-images.githubusercontent.com/88995580/159103234-659b11e8-30f4-4780-b162-e0cff5d35cc4.jpg)

```
输入：root = [3,9,20,null,null,15,7]
输出：[[15,7],[9,20],[3]]
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
 * 广度优先搜索
 * @desc 时间复杂度 O(N)  空间复杂度 O(N)
 * @param root {TreeNode | null}
 * @return {number[][]}
 */
export function levelOrderBottom(root: TreeNode | null): number[][] {
  if (root === null) return [];

  const ans: number[][] = [[root.val]];
  const queue: TreeNode[] = [root];

  while (queue.length) {
    const temp: number[] = [];
    const len = queue.length;

    for (let i = 0; i < len; i++) {
      const tree = queue.pop()!;

      if (tree.left) {
        temp.push(tree.left.val);
        queue.unshift(tree.left);
      }

      if (tree.right) {
        temp.push(tree.right.val);
        queue.unshift(tree.right);
      }
    }

    temp.length && ans.unshift(temp);
  }

  return ans;
}
```
