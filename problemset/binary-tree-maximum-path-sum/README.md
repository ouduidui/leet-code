# 二叉树中的最大路径和

> 难度：困难
>
> https://leetcode-cn.com/problems/binary-tree-maximum-path-sum/

## 题目

**路径** 被定义为一条从树中任意节点出发，沿父节点-子节点连接，达到任意节点的序列
。同一个节点在一条路径序列中 至多出现一次 。该路径 **至少包含一个** 节点，且不一
定经过根节点。

**路径和** 是路径中各节点值的总和。

给你一个二叉树的根节点 `root` ，返回其 **最大路径和** 。

### 示例

#### 示例 1：

![binary-tree-maximum-path-sum-1](https://user-images.githubusercontent.com/54696834/159102005-6562b581-178c-4ac7-96d8-d84d926480e9.jpg)

```
输入：root = [1,2,3]
输出：6
解释：最优路径是 2 -> 1 -> 3 ，路径和为 2 + 1 + 3 = 6
```

#### 示例 2：

![binary-tree-maximum-path-sum-2](https://user-images.githubusercontent.com/54696834/159101987-510a5bde-aff9-4180-ba02-60a50cfca56a.jpg)

```
输入：root = [-10,9,20,null,null,15,7]
输出：42
解释：最优路径是 15 -> 20 -> 7 ，路径和为 15 + 20 + 7 = 42
```

## 解题

```typescript
/**
 * 递归
 * @desc 时间复杂度 O(N)  空间复杂度 O(N)
 * @param root
 */
export function maxPathSum(root: TreeNode | null): number {
  let maxValue = -Number.MAX_VALUE;
  dfs(root);
  return maxValue;

  // 递归获取单分支路径最大和
  function dfs(node: TreeNode | null): number {
    if (node === null) return 0;

    // 获取左右分支最大路径和
    const leftCount = Math.max(0, dfs(node.left));
    const rightCount = Math.max(0, dfs(node.right));

    // 更新返回值
    // 节点的最大路径和取决于该节点的值与该节点的左右子节点的最大贡献值
    maxValue = Math.max(node.val + leftCount + rightCount, maxValue);

    // 返回节点的最大贡献值
    return node.val + Math.max(leftCount, rightCount);
  }
}
```
