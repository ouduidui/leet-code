# 单值二叉树

> 难度：简单
>
> https://leetcode.cn/problems/univalued-binary-tree/

## 题目

如果二叉树每个节点都具有相同的值，那么该二叉树就是单值二叉树。

只有给定的树是单值二叉树时，才返回 `true`；否则返回 `false`。

### 示例

#### 示例 1：

![ univalued-binary-tree-1](https://user-images.githubusercontent.com/54696834/169935283-ad150b9a-7bff-4f87-8d14-d410087c7d06.png)

```
输入：[1,1,1,1,1,null,1]
输出：true
```

#### 示例 2：

![ univalued-binary-tree-2](https://user-images.githubusercontent.com/54696834/169935295-e6d06249-7af5-4f75-9f33-6912b190c675.png)

```
输入：[2,2,2,5,2]
输出：false
```

## 解题

### 广度优先遍历

```ts 
/**
 * 广度优先遍历
 * @desc 时间复杂度 O(N)  空间复杂度 O(N)
 * @param root
 * @returns
 */
export function isUnivalTree(root: TreeNode | null): boolean {
  if (root === null) return true

  const queue: TreeNode[] = [root]
  const val = root.val

  while (queue.length) {
    const node = queue.pop()!

    if (node.val !== val) return false

    node.left && queue.push(node.left)
    node.right && queue.push(node.right)
  }

  return true
}
```

### 深度优先遍历

```ts 
/**
 * 深度优先遍历
 * @desc 时间复杂度 O(N)  空间复杂度 O(N)
 * @param root
 * @returns
 */
export function isUnivalTree2(root: TreeNode | null): boolean {
  if (root === null) return true
  if (root.left && (root.left.val !== root.val || !isUnivalTree2(root.left))) return false
  if (root.right && (root.right.val !== root.val || !isUnivalTree2(root.right))) return false

  return true
}
```