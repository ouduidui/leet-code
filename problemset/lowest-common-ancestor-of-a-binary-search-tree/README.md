# 二叉搜索树的最近公共祖先

> 难度：简单
>
> https://leetcode-cn.com/problems/lowest-common-ancestor-of-a-binary-search-tree/

## 题目

给定一个二叉搜索树, 找到该树中两个指定节点的最近公共祖先。

百度百科中最近公共祖先的定义为：“对于有根树 T 的两个结点 p、q，最近公共祖先表示为一个结点 x，满足 x 是 p、q 的祖先且 x 的深度尽可能大（**一个节点也可以是它自己的祖先**）。”

例如，给定如下二叉搜索树:  `root = [6,2,8,0,4,7,9,null,null,3,5]`

![binarysearchtree_improved](https://user-images.githubusercontent.com/54696834/162585923-aaecc204-edcb-456e-9a3d-fe8ce92d4c8e.png)

### 示例 

#### 示例 1:

```
输入: root = [6,2,8,0,4,7,9,null,null,3,5], p = 2, q = 8
输出: 6 
解释: 节点 2 和节点 8 的最近公共祖先是 6。
```

#### 示例 2:

```
输入: root = [6,2,8,0,4,7,9,null,null,3,5], p = 2, q = 4
输出: 2
解释: 节点 2 和节点 4 的最近公共祖先是 2, 因为根据定义最近公共祖先节点可以为节点本身。
```

## 解题

```ts
/**
 * 一次遍历
 * @desc 时间复杂度 O(N)  空间复杂度 O(1)
 * @param root
 * @param p
 * @param q
 * @returns
 */
export function lowestCommonAncestor(
  root: TreeNode | null,
  p: TreeNode | null,
  q: TreeNode | null,
): TreeNode | null {
  let ancestor = root
  const pVal = p!.val
  const qVal = q!.val

  while (true) {
    if (pVal < ancestor!.val && qVal < ancestor!.val)
      ancestor = ancestor!.left
    else if (pVal > ancestor!.val && qVal > ancestor!.val)
      ancestor = ancestor!.right
    else
      break
  }

  return ancestor
}
```