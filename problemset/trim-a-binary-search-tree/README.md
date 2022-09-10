# 修剪二叉搜索树

> 难度：中等
>
> https://leetcode.cn/problems/trim-a-binary-search-tree/

## 题目

给你二叉搜索树的根节点 `root` ，同时给定最小边界 `low` 和最大边界 `high`。通过修剪二叉搜索树，使得所有节点的值在`[low, high]`中。修剪树 **不应该** 改变保留在树中的元素的相对结构 (即，如果没有被移除，原有的父代子代关系都应当保留)。 可以证明，存在 **唯一的答案** 。

所以结果应当返回修剪好的二叉搜索树的新的根节点。注意，根节点可能会根据给定的边界发生改变。

### 示例

#### 示例 1：

![image](https://user-images.githubusercontent.com/54696834/189466720-dfdd5148-0e82-4d1c-a308-9859e604f863.png)

```
输入：root = [1,0,2], low = 1, high = 2
输出：[1,null,2]
```

#### 示例 2：

![image](https://user-images.githubusercontent.com/54696834/189466724-aa1cca80-66e4-4711-84eb-f708eb7d3cd3.png)

```
输入：root = [3,0,4,null,2,null,null,1], low = 1, high = 3
输出：[3,2,null,1]
```

## 解题

### 递归

```ts 
/**
 * 递归
 * @desc 时间复杂度 O(N)  空间复杂度 O(N)
 * @param root
 * @param low
 * @param high
 * @returns
 */
export function trimBST(root: TreeNode | null, low: number, high: number): TreeNode | null {
  if (!root) return null

  if (root.val < low) {
    return trimBST(root.right, low, high)
  }
  else if (root.val > high) {
    return trimBST(root.left, low, high)
  }
  else {
    root.left = trimBST(root.left, low, high)
    root.right = trimBST(root.right, low, high)
    return root
  }
}
```

### 迭代

```ts 
/**
 * 迭代
 * @desc 时间复杂度 O(N)  空间复杂度 O(N)
 * @param root
 * @param low
 * @param high
 * @returns
 */
export function trimBST2(root: TreeNode | null, low: number, high: number): TreeNode | null {
  while (root && (root.val < low || root.val > high)) {
    if (root.val < low) root = root.right
    else root = root.left
  }
  if (!root) return null

  for (let node = root; node.left;) {
    if (node.left.val < low)
      node.left = node.left.right

    else
      node = node.left
  }
  for (let node = root; node.right;) {
    if (node.right.val > high)
      node.right = node.right.left

    else
      node = node.right
  }
  return root
}
```