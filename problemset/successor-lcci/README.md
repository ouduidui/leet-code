# 后继者

> 难度：中等
>
> https://leetcode.cn/problems/successor-lcci/

## 题目

设计一个算法，找出二叉搜索树中指定节点的“下一个”节点（也即中序后继）。

如果指定节点没有对应的“下一个”节点，则返回`null`。

### 示例

#### 示例 1:

```
输入: root = [2,1,3], p = 1

  2
 / \
1   3

输出: 2
```

#### 示例 2:

```
输入: root = [5,3,6,2,4,null,null,1], p = 6

      5
     / \
    3   6
   / \
  2   4
 /   
1

输出: null
```

## 解题

### 中序遍历

```ts
/**
 * 中序遍历
 * @desc 时间复杂度 O(N)  空间复杂度 O(N)
 * @param root
 * @param p
 * @returns
 */
export function inorderSuccessor(root: TreeNode | null, p: TreeNode | null): TreeNode | null {
  const stack = []
  let prev: TreeNode | null = null
  let curr: TreeNode | null = root
  while (stack.length || curr) {
    while (curr) {
      stack.push(curr)
      curr = curr.left
    }
    curr = stack.pop()!
    if (prev === p) return curr

    prev = curr
    curr = curr.right
  }
  return null
}
```

### 利用二叉搜索树的性质

```ts
/**
 * 利用二叉搜索树的性质
 * @desc 时间复杂度 O(N)  空间复杂度 O(1)
 * @param root
 * @param p
 * @returns
 */
export function inorderSuccessor2(root: TreeNode | null, p: TreeNode | null): TreeNode | null {
  let successor = null
  if (p?.right) {
    successor = p.right
    while (successor.left)
      successor = successor.left

    return successor
  }
  let node = root
  while (node) {
    if (node.val > p!.val) {
      successor = node
      node = node.left
    }
    else {
      node = node.right
    }
  }
  return successor
}
```