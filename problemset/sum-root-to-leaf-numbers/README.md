# 求根节点到叶节点数字之和

> 难度：中等
>
> https://leetcode-cn.com/problems/sum-root-to-leaf-numbers/

## 题目

给你一个二叉树的根节点 `root` ，树中每个节点都存放有一个 `0` 到 `9` 之间的数字。
每条从根节点到叶节点的路径都代表一个数字：

- 例如，从根节点到叶节点的路径 `1 -> 2 -> 3` 表示数字 `123` 。

计算从根节点到叶节点生成的 **所有数字之和** 。

**叶节点** 是指没有子节点的节点。

### 示例

#### 示例 1：

![sum-root-to-leaf-numbers-1](https://user-images.githubusercontent.com/54696834/159102010-7c729d6b-8365-4c9e-9d1d-845cc31345cd.jpg)

```
输入：root = [1,2,3]
输出：25
解释：
从根到叶子节点路径 1->2 代表数字 12
从根到叶子节点路径 1->3 代表数字 13
因此，数字总和 = 12 + 13 = 25
```

#### 示例 2：

![sum-root-to-leaf-numbers-2](https://user-images.githubusercontent.com/54696834/159101996-5da74b7e-909a-4017-bf34-22049c5a6c24.jpg)

```
输入：root = [4,9,0,5,1]
输出：1026
解释：
从根到叶子节点路径 4->9->5 代表数字 495
从根到叶子节点路径 4->9->1 代表数字 491
从根到叶子节点路径 4->0 代表数字 40
因此，数字总和 = 495 + 491 + 40 = 1026
```

## 解题

### 深度优先搜索

```typescript
/**
 * 深度优先搜索
 * @desc 时间复杂度 O(N)  空间复杂度 O(N)
 * @param root
 */
export function sumNumbers(root: TreeNode | null): number {
  let res = 0;
  root && dfs(root, root.val);
  return res;

  function dfs(node: TreeNode, sum: number) {
    if (!node.left && !node.right) {
      res += sum;
    } else {
      node.left && dfs(node.left, sum * 10 + node.left.val);
      node.right && dfs(node.right, sum * 10 + node.right.val);
    }
  }
}
```

### 广度优先搜索

```typescript
/**
 * 广度优先搜索
 * @param root
 */
export function sumNumbers2(root: TreeNode | null): number {
  if (!root) return 0;

  let sum = 0;
  const nodeQueue: TreeNode[] = [root];
  const numQueue: number[] = [root.val];

  while (nodeQueue.length) {
    const node = nodeQueue.shift()!;
    const num = numQueue.shift()!;

    if (!node.left && !node.right) {
      sum += num;
    } else {
      if (node.left) {
        nodeQueue.push(node.left);
        numQueue.push(num * 10 + node.left.val);
      }
      if (node.right) {
        nodeQueue.push(node.right);
        numQueue.push(num * 10 + node.right.val);
      }
    }
  }

  return sum;
}
```
