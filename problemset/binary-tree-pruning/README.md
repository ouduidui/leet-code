# 二叉树剪枝

> 难度：中等
>
> https://leetcode.cn/problems/binary-tree-pruning/

## 题目

给你二叉树的根结点 `root` ，此外树的每个结点的值要么是 `0` ，要么是 `1` 。

返回移除了所有不包含 `1` 的子树的原二叉树。

节点 `node` 的子树为 `node` 本身加上所有 `node` 的后代。


### 示例

#### 示例 1

![image](https://user-images.githubusercontent.com/54696834/180114168-293b35ca-d4fa-454c-8cce-df3c99d8eb27.png)

```
输入：root = [1,null,0,0,1]
输出：[1,null,0,null,1]
解释：
只有红色节点满足条件“所有不包含 1 的子树”。 右图为返回的答案。
```

#### 示例 2：

![image](https://user-images.githubusercontent.com/54696834/180114180-bccdca01-1f19-4cdf-8fae-4c40c8bd9c8e.png)

```
输入：root = [1,0,1,0,0,0,1]
输出：[1,null,1,null,1]
```

#### 示例 3：

![image](https://user-images.githubusercontent.com/54696834/180114193-25a4fa93-5f89-429e-a5d0-9262a4e02eb7.png)

```
输入：root = [1,1,0,1,1,0,1,0]
输出：[1,1,0,1,1,null,1]
```

## 解题

```ts 
/**
 * 递归
 * @desc 时间复杂度 O(N)  空间复杂度 O(N)
 * @param root
 * @returns
 */
export function pruneTree(root: TreeNode | null): TreeNode | null {
  if (!root) return null

  root.left = pruneTree(root.left)
  root.right = pruneTree(root.right)

  if (!root.left && !root.right && root.val === 0) return null

  return root
}
```