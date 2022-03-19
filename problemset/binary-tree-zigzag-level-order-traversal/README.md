# 二叉树的锯齿形层序遍历

> 难度：中等
>
> https://leetcode-cn.com/problems/binary-tree-zigzag-level-order-traversal/

## 题目

给你二叉树的根节点 `root` ，返回其节点值的 **锯齿形层序遍历** 。（即先从左往右，
再从右往左进行下一层遍历，以此类推，层与层之间交替进行）。

### 示例

#### 示例 1：

![binary-tree-zigzag-level-order-traversal](https://user-images.githubusercontent.com/88995580/159103239-11673283-e4d3-4b2d-9bf3-e17a7232a9d0.jpg)

```
输入：root = [3,9,20,null,null,15,7]
输出：[[3],[20,9],[15,7]]
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

## 解题

```typescript
/**
 * 广度优先遍历
 * @desc 时间复杂度 O(N)   空间复杂度 O(N)
 * @param root {TreeNode | null}
 * @return {number[][]}
 */
export function zigzagLevelOrder(root: TreeNode | null): number[][] {
  if (root === null) return [];

  const ans: number[][] = [];
  const queue: TreeNode[] = [root];
  let isOrderLeft = true; // 判断方向

  while (queue.length) {
    const len = queue.length;
    const values: number[] = [];
    for (let i = 0; i < len; i++) {
      const tree = queue.shift()!;
      // 控制插入顺序
      isOrderLeft ? values.push(tree.val) : values.unshift(tree.val);
      if (tree.left) queue.push(tree.left);
      if (tree.right) queue.push(tree.right);
    }

    isOrderLeft = !isOrderLeft;
    ans.push(values);
  }

  return ans;
}
```
