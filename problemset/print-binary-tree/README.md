# 输出二叉树

> 难度：中等
>
> https://leetcode.cn/problems/print-binary-tree/

## 题目

给你一棵二叉树的根节点 `root` ，请你构造一个下标从 `0` 开始、大小为 `m x n` 的字符串矩阵 `res` ，用以表示树的 格式化布局 。构造此格式化布局矩阵需要遵循以下规则：

- 树的 **高度** 为 `height` ，矩阵的行数 `m` 应该等于 `height + 1` 。
- 矩阵的列数 `n` 应该等于 `2^(height+1) - 1` 。
- 根节点 需要放置在 顶行 的 正中间 ，对应位置为 `res[0][(n-1)/2]` 。
- 对于放置在矩阵中的每个节点，设对应位置为 `res[r][c]` ，将其左子节点放置在 `res[r+1][c-2^(height-r-1)]` ，右子节点放置在 `res[r+1][c+2^(height-r-1)]` 。
- 继续这一过程，直到树中的所有节点都妥善放置。
- 任意空单元格都应该包含空字符串 `""` 。

返回构造得到的矩阵 `res` 。

### 示例

#### 示例 1：

![image](https://user-images.githubusercontent.com/54696834/185916972-fd408ea1-e1c4-47b8-98ed-d6d40ed61fe6.png)

```
输入：root = [1,2]
输出：
[["","1",""],
 ["2","",""]]
```

#### 示例 2：

![image](https://user-images.githubusercontent.com/54696834/185916989-ea0e8557-b9f0-4170-969e-b0d741d77b68.png)

```
输入：root = [1,2,3,null,4]
输出：
[["","","","1","","",""],
 ["","2","","","","3",""],
 ["","","4","","","",""]]
```

## 解题

```ts 
import type { TreeNode } from '~/utils/treeNode'

/**
 * 深度遍历优先
 * @desc 时间复杂度 O(Height * 2^(height))  空间复杂度 O(height)
 * @param root
 * @returns
 */
export function printTree(root: TreeNode | null): string[][] {
  const calDepth = (root: TreeNode | null) => {
    let h = 0
    if (root?.left)
      h = Math.max(h, calDepth(root.left) + 1)

    if (root?.right)
      h = Math.max(h, calDepth(root.right) + 1)

    return h
  }

  const dfs = (res: string[][], root: TreeNode, r: number, c: number, height: number) => {
    res[r][c] = root.val.toString()
    if (root.left)
      dfs(res, root.left, r + 1, c - (1 << (height - r - 1)), height)

    if (root.right)
      dfs(res, root.right, r + 1, c + (1 << (height - r - 1)), height)
  }

  const height = calDepth(root)
  const m = height + 1
  const n = (1 << (height + 1)) - 1
  const res = new Array(m).fill(0).map(() => new Array(n).fill(''))
  dfs(res, root!, 0, Math.floor((n - 1) / 2), height)
  return res
}
```