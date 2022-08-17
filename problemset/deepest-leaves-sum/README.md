# 层数最深叶子节点的和

> 难度：中等
>
> https://leetcode.cn/problems/deepest-leaves-sum/

## 题目

给你一棵二叉树的根节点 `root` ，请你返回 **层数最深的叶子节点的和** 。

### 示例

#### 示例 1：

![image](https://user-images.githubusercontent.com/54696834/185023356-0dc15f59-e38f-4579-816b-a8d4bd7e7b2b.png)

```
输入：root = [1,2,3,4,5,null,6,7,null,null,null,null,8]
输出：15
```

#### 示例 2：

```
输入：root = [6,7,8,2,7,1,3,9,null,1,4,null,null,null,5]
输出：19
```

## 解题

### 深度优先搜索

```ts 
/**
 * 深度优先搜索
 * @desc 时间复杂度 O(N)  空间复杂度 O(N)
 * @param root
 * @returns
 */
export function deepestLeavesSum(root: TreeNode | null): number {
  let maxLevel = -1
  let sum = 0
  dfs(root, 0)
  return sum

  function dfs(node: TreeNode | null, level: number) {
    if (!node) return

    if (level > maxLevel) {
      maxLevel = level
      sum = node.val
    }
    else if (level === maxLevel) {
      sum += node.val
    }

    dfs(node.left, level + 1)
    dfs(node.right, level + 1)
  }
}
```

### 广度优先搜索

```ts
/**
 * 广度优先搜索
 * @desc 时间复杂度 O(N)  空间复杂度 O(N)
 * @param root
 * @returns
 */
export function deepestLeavesSum2(root: TreeNode | null): number {
  let sum = 0
  if (!root) return sum

  const queue: TreeNode[] = []
  queue.push(root)
  while (queue.length) {
    sum = 0
    const size = queue.length
    for (let i = 0; i < size; i++) {
      const node = queue.shift()!
      sum += node.val
      if (node.left)
        queue.push(node.left)

      if (node.right)
        queue.push(node.right)
    }
  }
  return sum
}
```