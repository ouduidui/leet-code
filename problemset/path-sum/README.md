# 路径总和

> 难度：简单
>
> https://leetcode-cn.com/problems/path-sum/

## 题目

给你二叉树的根节点 `root` 和一个表示目标和的整数 `targetSum` 。判断该树中是否存
在 **根节点到叶子节点** 的路径，这条路径上所有节点值相加等于目标和 `targetSum`
。如果存在，返回 `true` ；否则，返回 `false` 。

**叶子节点** 是指没有子节点的节点。

### 示例

#### 示例 1：

![path-sum-1](https://user-images.githubusercontent.com/54696834/159101965-1fbf6ae9-bd84-489d-9b16-a1a39ed11f7c.jpg)

```
输入：root = [5,4,8,11,null,13,4,7,2,null,null,null,1], targetSum = 22
输出：true
解释：等于目标和的根节点到叶节点路径如上图所示。
```

#### 示例 2：

![path-sum-2](https://user-images.githubusercontent.com/54696834/159102007-3c7dc5aa-6558-4a65-8412-cbe2c853002b.jpg)

```
输入：root = [1,2,3], targetSum = 5
输出：false
解释：树中存在两条根节点到叶子节点的路径：
(1 --> 2): 和为 3
(1 --> 3): 和为 4
不存在 sum = 5 的根节点到叶子节点的路径。
```

#### 示例 3：

```
输入：root = [], targetSum = 0
输出：false
解释：由于树是空的，所以不存在根节点到叶子节点的路径。
```

## 解法

### 深度优先搜索

```typescript
/**
 * 深度优先搜索
 * @desc 时间复杂度 O(N)  空间复杂度 O(H) 二叉树的高度
 * @param root
 * @param targetSum
 */
export function hasPathSum(root: TreeNode | null, targetSum: number): boolean {
  if (root === null) return false;
  if (root.left === null && root.right === null) return root.val === targetSum;
  return (
    hasPathSum(root.left, targetSum - root.val) ||
    hasPathSum(root.right, targetSum - root.val)
  );
}
```

### 广度优先搜索

```typescript
/**
 * 广度优先搜索
 * @desc 时间复杂度 O(N)  空间复杂度 O(N)
 * @param root
 * @param targetSum
 */
export function hasPathSum2(root: TreeNode | null, targetSum: number): boolean {
  if (root === null) return false;

  const queue: TreeNode[] = [root];
  const valQueue: number[] = [root.val];
  while (queue.length) {
    const node = queue.pop()!;
    const val = valQueue.pop()!;
    if (node.left === null && node.right === null) {
      if (targetSum === val) return true;
      continue;
    }
    if (node.left) {
      queue.unshift(node.left);
      valQueue.unshift(val + node.left.val);
    }

    if (node.right) {
      queue.unshift(node.right);
      valQueue.unshift(val + node.right.val);
    }
  }

  return false;
}
```
