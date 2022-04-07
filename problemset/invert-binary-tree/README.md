# 翻转二叉树

> 难度：简单
>
> https://leetcode-cn.com/problems/invert-binary-tree/

## 题目

给你一棵二叉树的根节点 `root` ，翻转这棵二叉树，并返回其根节点。


### 示例

#### 示例 1：

![invert1-tree](https://user-images.githubusercontent.com/54696834/162126059-7db54186-1207-4183-880d-a66d663490e0.jpg)

```
输入：root = [4,2,7,1,3,6,9]
输出：[4,7,2,9,6,3,1]
```

#### 示例 2：

![invert2-tree](https://user-images.githubusercontent.com/54696834/162126067-012f9c20-1b33-49e9-8251-817dc2928b9a.jpg)

```
输入：root = [2,1,3]
输出：[2,3,1]
```

#### 示例 3：

![invert2-tree](https://user-images.githubusercontent.com/54696834/162126067-012f9c20-1b33-49e9-8251-817dc2928b9a.jpg)

```
输入：root = []
输出：[]
```

## 解题

### 递归

```ts
/**
 * 递归
 * @desc 时间复杂度 O(N)  空间复杂度 O(N)
 * @param root
 * @returns
 */
export function invertTree(root: TreeNode | null): TreeNode | null {
  if (root === null) return root
  const temp = root.left
  root.left = invertTree(root.right)
  root.right = invertTree(temp)
  return root
}
```

### 迭代

```ts
/**
 * 迭代
 * @desc 时间复杂度 O(N)  空间复杂度 O(N)
 * @param root
 * @returns
 */
export function invertTree2(root: TreeNode | null): TreeNode | null {
  if (root === null) return root

  const queue = [root]

  while (queue.length) {
    const node = queue.pop()!
    const temp = node.left
    node.left = node.right
    node.right = temp

    if (node.left) queue.unshift(node.left)
    if (node.right) queue.unshift(node.right)
  }

  return root
}
```