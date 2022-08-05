# 在二叉树中增加一行

> 难度：中等
>
> https://leetcode.cn/problems/add-one-row-to-tree/

## 题目

给定一个二叉树的根 `root` 和两个整数 `val` 和 `depth` ，在给定的深度 `depth` 处添加一个值为 `val` 的节点行。

注意，根节点 `root` 位于深度 `1` 。

加法规则如下:

- 给定整数 `depth`，对于深度为 `depth - 1` 的每个非空树节点 `cur` ，创建两个值为 `val` 的树节点作为 `cur` 的左子树根和右子树根。
- `cur` 原来的左子树应该是新的左子树根的左子树。
- `cur` 原来的右子树应该是新的右子树根的右子树。
- 如果 `depth == 1` 意味着 `depth - 1` 根本没有深度，那么创建一个树节点，值 `val` 作为整个原始树的新根，而原始树就是新根的左子树。
 

#### 示例 1:

![image](https://user-images.githubusercontent.com/54696834/183051295-e9324636-d24a-4965-8506-efae84b148d0.png)


```
输入: root = [4,2,6,3,1,5], val = 1, depth = 2
输出: [4,1,1,2,null,null,6,3,1,5]
```

#### 示例 2:

![image](https://user-images.githubusercontent.com/54696834/183051321-10abdfc8-3457-47c9-b75a-964466d35442.png)

```
输入: root = [4,2,null,3,1], val = 1, depth = 3
输出:  [4,2,null,1,1,3,null,null,1]
```

## 解题

```ts 
import { TreeNode } from '~/utils/treeNode'

/**
 * 深度优先遍历
 * @desc 时间复杂度 O(N)   空间复杂度 O(N)
 * @param root
 * @param val
 * @param depth
 * @returns
 */
export function addOneRow(root: TreeNode | null, val: number, depth: number): TreeNode | null {
  if (!root)
    return null

  if (depth === 1)
    return new TreeNode(val, root, null)

  if (depth === 2) {
    root.left = new TreeNode(val, root.left, null)
    root.right = new TreeNode(val, null, root.right)
  }
  else {
    root.left = addOneRow(root.left, val, depth - 1)
    root.right = addOneRow(root.right, val, depth - 1)
  }
  return root
}
```