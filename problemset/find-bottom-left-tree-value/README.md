# 找树左下角的值

> 难度：中等
>
> https://leetcode.cn/problems/find-bottom-left-tree-value/

## 题目

给定一个二叉树的 **根节点** `root`，请找出该二叉树的 **最底层** **最左边** 节点的值。

假设二叉树中至少有一个节点。

### 示例

#### 示例 1:

![image](https://user-images.githubusercontent.com/54696834/174931104-1a6158b9-27f7-491e-aed0-ec872b62ebb3.png)

```
输入: root = [2,1,3]
输出: 1
```

#### 示例 2:

![image](https://user-images.githubusercontent.com/54696834/174931123-a4f7a146-4ad9-42fe-b081-93b2399275a0.png)

```
输入: [1,2,3,4,null,5,6,null,null,7]
输出: 7
```

## 解题

### 深度优先遍历

```typescript
/**
 * 深度优先遍历
 * @desc 时间复杂度 O(N) 空间复杂度 O(N)
 * @param root
 * @returns
 */
export function findBottomLeftValue(root: TreeNode | null): number {
  let maxHeight = 0
  let ans = 0
  dfs(root, 0)

  return ans

  function dfs(node: TreeNode | null, height: number) {
    if (!node) return

    height++
    dfs(node.left, height)
    dfs(node.right, height)
    if (height > maxHeight) {
      maxHeight = height
      ans = node.val
    }
  }
}
```

### 广度优先遍历

```typescript
/**
 * 广度优先遍历
 * @desc 时间复杂度 O(N) 空间复杂度 O(N)
 * @param root
 * @returns
 */
export function findBottomLeftValue2(root: TreeNode | null): number {
  if (!root) return -1

  let ans = 0
  const queue: TreeNode[] = [root]
  while (queue.length) {
    const node = queue.pop()!
    node.right && queue.unshift(node.right)
    node.left && queue.unshift(node.left)
    ans = node.val
  }

  return ans
}
```