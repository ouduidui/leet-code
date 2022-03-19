# 路径总和 II

> 难度：中等
>
> https://leetcode-cn.com/problems/path-sum-ii/

## 题目

给你二叉树的根节点 `root` 和一个整数目标和 `targetSum` ，找出所有 **从根节点到叶
子节点** 路径总和等于给定目标和的路径。

**叶子节点** 是指没有子节点的节点。

### 示例

#### 示例 1：

![path-sum-ii-1](https://user-images.githubusercontent.com/54696834/159101964-76118323-180f-4fca-a82a-3d1d36378417.jpg)

```
输入：root = [5,4,8,11,null,13,4,7,2,null,null,5,1], targetSum = 22
输出：[[5,4,11,2],[5,8,4,5]]
```

#### 示例 2：

![path-sum-ii-2](https://user-images.githubusercontent.com/54696834/159102009-42aa876a-598a-4e06-a1ae-c76a17aa8223.jpg)

```
输入：root = [1,2,3], targetSum = 5
输出：[]
```

#### 示例 3：

```
输入：root = [1,2], targetSum = 0
输出：[]
```

## 解题

### 深度优先搜索

```typescript
/**
 * 深度优先搜索
 * @desc 时间复杂度 O(N^2)  空间复杂度 O(N)
 * @param root
 * @param targetSum
 */
export function pathSum(root: TreeNode | null, targetSum: number): number[][] {
  const ret: number[][] = [];
  root && dfs(root, targetSum - root.val, [root.val]);
  return ret;

  function dfs(node: TreeNode, sum: number, temp: number[]) {
    if (node.left === null && node.right === null) {
      if (sum === 0) ret.push(temp);
      return;
    }
    node.left && dfs(node.left, sum - node.left.val, [...temp, node.left.val]);
    node.right &&
      dfs(node.right, sum - node.right.val, [...temp, node.right.val]);
  }
}
```

### 广度优先搜索

```typescript
/**
 * 广度优先搜索
 * @desc 时间复杂度 O(N^2)  空间复杂度 O(N)
 * @param root
 * @param targetSum
 */
export function pathSum2(root: TreeNode | null, targetSum: number): number[][] {
  const ret: number[][] = [];
  if (!root) return ret;

  const queue: Array<{ node: TreeNode; sum: number; temp: number[] }> = [
    { node: root, sum: targetSum - root.val, temp: [root.val] }
  ];
  while (queue.length) {
    const { node, sum, temp } = queue.pop()!;
    if (node.left === null && node.right === null) {
      if (sum === 0) ret.push(temp);
      continue;
    }
    node.left &&
      queue.unshift({
        node: node.left,
        sum: sum - node.left.val,
        temp: [...temp, node.left.val]
      });

    node.right &&
      queue.unshift({
        node: node.right,
        sum: sum - node.right.val,
        temp: [...temp, node.right.val]
      });
  }

  return ret;
}
```
