# 二叉树的所有路径

> 难度：简单
>
> https://leetcode-cn.com/problems/binary-tree-paths/

## 题目

给你一个二叉树的根节点 `root` ，按 **任意顺序** ，返回所有从根节点到叶子节点的路径。

**叶子节点** 是指没有子节点的节点。

### 示例

#### 示例 1：

![paths-tree](https://user-images.githubusercontent.com/54696834/162888969-caba5715-5b1a-4b38-b374-afdf21ff8a5f.jpg)

```
输入：root = [1,2,3,null,5]
输出：["1->2->5","1->3"]
```

#### 示例 2：

```
输入：root = [1]
输出：["1"]
```

## 解题

### 深度优先遍历

```ts
/**
 * 深度优先遍历
 * @desc 时间复杂度 O(N²)  空间复杂度 O(N²)
 * @param root
 * @returns
 */
export function binaryTreePaths(root: TreeNode | null): string[] {
  const result: string[] = []
  root && dfs(root, [], result)
  return result

  function dfs(node: TreeNode, temp: number[], result: string[]) {
    temp.push(node.val)
    if (!node.left && !node.right)
      return result.push(temp.join('->'))

    node.left && dfs(node.left, [...temp], result)
    node.right && dfs(node.right, [...temp], result)
  }
}
```

### 广度优先遍历

```ts
/**
 * 广度优先遍历
 * @desc 时间复杂度 O(N²)  空间复杂度 O(N²)
 * @param root
 * @returns
 */
export function binaryTreePaths2(root: TreeNode | null): string[] {
  const result: string[] = []
  if (root === null) return result

  const nodeQueue: TreeNode[] = [root]
  const tempQueue: string[] = [`${root.val}`]

  while (nodeQueue.length) {
    const node = nodeQueue.pop()!
    const temp = tempQueue.pop()!

    if (!node.left && !node.right) {
      result.push(temp)
    }
    else {
      if (node.left) {
        nodeQueue.unshift(node.left)
        tempQueue.unshift(`${temp}->${node.left.val}`)
      }

      if (node.right) {
        nodeQueue.unshift(node.right)
        tempQueue.unshift(`${temp}->${node.right.val}`)
      }
    }
  }

  return result
}
```