# 二叉树的前序遍历

> 难度：简单
>
> https://leetcode-cn.com/problems/binary-tree-preorder-traversal/

## 题目

给你二叉树的根节点 root ，返回它节点值的 **前序** 遍历。

> 按照访问根节点——左子树——右子树的方式遍历这棵树

### 示例

#### 示例 1：

![binary-tree-preorder-traversal](https://user-images.githubusercontent.com/54696834/159102003-b238b84f-d110-4f12-ba06-37070680bb83.jpg)

```
输入：root = [1,null,2,3]
输出：[1,2,3]
```

#### 示例 2：

```
输入：root = []
输出：[]
```

#### 示例 1：

```
输入：root = [1]
输出：[1]
```

## 解题

### 递归

```typescript
/**
 * 递归
 * @desc 时间复杂度 O(N)  空间复杂度 O(N)
 * @param root
 */
export function preorderTraversal(root: TreeNode | null): number[] {
  if (!root) return [];

  const result: number[] = [];
  dfs(root, result);
  return result;

  function dfs(root: TreeNode, res: number[]) {
    res.push(root.val);
    root.left && dfs(root.left, res);
    root.right && dfs(root.right, res);
  }
}
```

### 迭代

```typescript
/**
 * 迭代
 * @desc 时间复杂度 O(N)  空间复杂度 O(N)
 * @param root
 */
export function preorderTraversal2(root: TreeNode | null): number[] {
  if (!root) return [];

  const queue: TreeNode[] = [root];
  const result: number[] = [];

  while (queue.length) {
    const r = queue.pop()!;
    result.push(r.val);

    r.left && queue.unshift(r.left);
    r.right && queue.unshift(r.right);
  }

  return result;
}
```

### Morris 遍历

```typescript
/**
 * Morris 遍历
 * @desc 时间复杂度 O(N)  空间复杂度 O(1)
 * @param root
 */
export function preorderTraversal3(root: TreeNode | null): number[] {
  if (!root) return [];

  const result: number[] = [];
  let p1: TreeNode | null = root;
  let p2: TreeNode | null = null;

  while (p1) {
    p2 = p1.left;

    // 如果p1还有左节点
    if (p2) {
      // 递归到当前节点的最右边
      while (p2.right && p2.right !== p1) {
        p2 = p2.right;
      }
      // 如果前驱节点的右子节点为空，将前驱节点的右子节点设置为当前节点
      // 然后将当前节点加入答案，并将前驱节点的右子节点更新为当前节点
      // 当前节点更新为当前节点的左子节点
      if (p2.right === null) {
        result.push(p1.val);
        p2.right = p1;
        p1 = p1.left;
        continue;
      }
      // 如果前驱节点的右子节点为当前节点，将它的右子节点重新设为空
      // 当前节点更新为当前节点的右子节点
      else {
        p2.right = null;
      }
    }
    // 如果p1没有左节点
    else {
      // 证明已经遍历到最左端，将结果插入
      result.push(p1.val);
    }
    p1 = p1.right;
  }

  return result;
}
```
