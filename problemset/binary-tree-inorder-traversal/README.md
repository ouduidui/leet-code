# 二叉树的中序遍历

> 难度：简单
>
> https://leetcode-cn.com/problems/binary-tree-inorder-traversal/

## 题目

给定一个二叉树的根节点 `root` ，返回它的 **中序** 遍历。

### 示例

#### 示例 1:

![binary-tree-inorder-traversal-1](https://user-images.githubusercontent.com/88995580/159103259-83238040-caa5-4dc9-bc9f-fe2abec38c80.jpg)

```
输入：root = [1,null,2,3]
输出：[1,3,2]
```

#### 示例 2:

```
输入：root = []
输出：[]
```

#### 示例 3:

```
输入：root = [1]
输出：[1]
```

#### 示例 1:

![binary-tree-inorder-traversal-2](https://user-images.githubusercontent.com/88995580/159103268-b069aa7f-010a-4380-976b-b5af9cb7588b.jpg)

```
输入：root = [1,2]
输出：[2,1]
```

#### 示例 5:

![binary-tree-inorder-traversal-3](https://user-images.githubusercontent.com/88995580/159103266-2121c108-b370-4869-91b8-b5c7a1dc6ac4.jpg)

```
输入：root = [1,null,2]
输出：[1,2]
```

## 解法

### 递归

```typescript
/**
 * 递归
 * @desc 时间复杂度 O(N)  空间复杂度 O(N)
 * @param root {TreeNode | null}
 * @return {number[]}
 */
export function inorderTraversal(root: TreeNode | null): number[] {
  return dfs(root);

  function dfs(tree: TreeNode | null): number[] {
    if (tree === null) return [];
    return [...dfs(tree.left), tree.val, ...dfs(tree.right)];
  }
}
```

### 迭代 + 栈

```typescript
/**
 * 迭代 + 栈
 * @desc 时间复杂度 O(N)  空间复杂度 O(N)
 * @param root {TreeNode | null}
 * @return {number[]}
 */
export function inorderTraversal2(root: TreeNode | null): number[] {
  const res: number[] = [];
  const stack: TreeNode[] = [];
  while (root || stack.length) {
    while (root) {
      stack.push(root);
      root = root.left;
    }

    const tree = stack.pop() as TreeNode;
    res.push(tree.val);
    root = tree.right;
  }

  return res;
}
```

### Morris 遍历算法

**Morris 遍历算法**是另一种遍历二叉树的方法，它能将非递归的中序遍历空间复杂度降
为 `O(1)`。

**Morris 遍历算法**整体步骤如下（假设当前遍历到的节点为 `x`）：

1. 如果 `x` 无左孩子，先将 `x` 的值加入答案数组，再访问 `x` 的右孩子，即
   `x = x.right`
2. 如果 `x` 有左孩子，则找到 `x` 左子树上最右的节点（**即左子树中序遍历的最后一
   个节点，`x` 在中序遍历中的前驱节点**），我们记为 `predecessor`。根据
   `predecessor` 的右孩子是否为空，进行如下操作:
   1. 如果 `predecessor` 的右孩子为空，则将其右孩子指向 `x`，然后访问 `x` 的左孩
      子，即 `x = x.left`
   2. 如果 `predecessor` 的右孩子不为空，则此时其右孩子指向 `x`，说明我们已经遍
      历完 `x` 的左子树，我们将 `predecessor` 的右孩子置空，将 `x` 的值加入答案
      数组，然后访问 `x` 的右孩子，即 `x = x.right`
3. 重复上述操作，直至访问完整棵树

![binary-tree-inorder-traversal-4](https://user-images.githubusercontent.com/54696834/159102044-57aed236-8d58-4b45-a187-a0c4e2f750d1.gif)

其实整个过程我们就多做一步：假设当前遍历到的节点为 `x`，将 `x` 的左子树中最右边
的节点的右孩子指向 `x`，这样在左子树遍历完成后我们通过这个指向走回了 `x`，且能通
过这个指向知晓我们已经遍历完成了左子树，而不用再通过栈来维护，省去了栈的空间复杂
度。

```typescript
/**
 * Morris 中序遍历
 * @desc 时间复杂度 O(N)  空间复杂度 O(1)
 * @param root {TreeNode | null}
 * @return {number[]}
 */
export function inorderTraversal3(root: TreeNode | null): number[] {
  const res: number[] = [];
  let predecessor: TreeNode | null = null;

  while (root) {
    if (root.left) {
      // predecessor 节点就是当前 root 节点向左走一步，然后一直向右走至无法走为止
      predecessor = root.left;
      while (predecessor.right && predecessor.right !== root) {
        predecessor = predecessor.right;
      }

      // 让 predecessor 的右指针指向 root，继续遍历左子树
      if (predecessor.right === null) {
        predecessor.right = root;
        root = root.left;
      }
      // 说明左子树已经访问完了，我们需要断开链接
      else {
        res.push(root.val);
        predecessor.right = null;
        root = root.right;
      }
    }
    // 如果没有左孩子，则直接访问右孩子
    else {
      res.push(root.val);
      root = root.right;
    }
  }

  return res;
}
```
