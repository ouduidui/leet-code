# 删除二叉搜索树中的节点

> 难度：中等
>
> https://leetcode.cn/problems/delete-node-in-a-bst/

## 题目

给定一个二叉搜索树的根节点 `root` 和一个值 `key`，删除二叉搜索树中的 `key` 对应的节点，并保证二叉搜索树的性质不变。返回二叉搜索树（有可能被更新）的根节点的引用。

一般来说，删除节点可分为两个步骤：

1. 首先找到需要删除的节点；
2. 如果找到了，删除它。

### 示例

#### 示例 1：

![image](https://user-images.githubusercontent.com/54696834/171571610-1e06f366-839d-4707-b5f9-f23f3a396b0b.png)

```
输入：root = [5,3,6,2,4,null,7], key = 3
输出：[5,4,6,2,null,null,7]
解释：给定需要删除的节点值是 3，所以我们首先找到 3 这个节点，然后删除它。
一个正确的答案是 [5,4,6,2,null,null,7], 如下图所示。
另一个正确答案是 [5,2,6,null,4,null,7]。
```

![image](https://user-images.githubusercontent.com/54696834/171571629-35246722-9a4c-4ed8-99a9-01cbe8b58fb2.png)


#### 示例 2:

```
输入: root = [5,3,6,2,4,null,7], key = 0
输出: [5,3,6,2,4,null,7]
解释: 二叉树不包含值为 0 的节点
```

#### 示例 3:

```
输入: root = [], key = 0
输出: []
```

## 解题

### 递归

```ts 
/**
 * 递归
 * @desc 时间复杂度 O(N) 空间复杂度 O(N)
 * @param root
 * @param key
 * @returns
 */
export function deleteNode(root: TreeNode | null, key: number): TreeNode | null {
  if (!root) return null

  if (root.val === key) {
    if (!root.left && !root.right) return null
    if (!root.right) return root.left
    if (!root.left) return root.right

    let successor = root.right
    while (successor.left)
      successor = successor.left

    root.right = deleteNode(root.right, successor.val)
    successor.right = root.right
    successor.left = root.left
    return successor
  }

  if (root.val > key)
    root.left = deleteNode(root.left, key)

  if (root.val < key)
    root.right = deleteNode(root.right, key)

  return root
}
```

### 迭代

```ts 
/**
 * 迭代
 * @desc 时间复杂度 O(N) 空间复杂度 O(N)
 * @param root
 * @param key
 * @returns
 */
export function deleteNode2(root: TreeNode | null, key: number): TreeNode | null {
  let cur = root
  let curParent = null
  while (cur && cur.val !== key) {
    curParent = cur
    if (cur.val > key)
      cur = cur.left

    else
      cur = cur.right
  }
  if (!cur)
    return root

  if (!cur.left && !cur.right) {
    cur = null
  }
  else if (!cur.right) {
    cur = cur.left
  }
  else if (!cur.left) {
    cur = cur.right
  }
  else {
    let successor = cur.right; let successorParent = cur
    while (successor.left) {
      successorParent = successor
      successor = successor.left
    }
    if (successorParent.val === cur.val)
      successorParent.right = successor.right

    else
      successorParent.left = successor.right

    successor.right = cur.right
    successor.left = cur.left
    cur = successor
  }
  if (!curParent) {
    return cur
  }
  else {
    if (curParent.left && curParent.left.val === key)
      curParent.left = cur

    else
      curParent.right = cur

    return root
  }
}
```