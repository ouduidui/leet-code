# 对称二叉树

> 难度：简单
>
> https://leetcode-cn.com/problems/symmetric-tree/

## 题目

给你一个二叉树的根节点 `root` ， 检查它是否轴对称。

### 示例

#### 示例 1：

![symmetric-tree-1](https://user-images.githubusercontent.com/54696834/159102081-9db6648f-890d-462b-8136-9c80396cbaf9.jpg)

```
输入：root = [1,2,2,3,4,4,3]
输出：true
```

#### 示例 1：

![symmetric-tree-2](https://user-images.githubusercontent.com/88995580/159103246-7c63ecc7-1e56-4ab9-a30c-b8ee19eb1316.jpg)

```
输入：root = [1,2,2,null,3,null,3]
输出：false
```

## 解法

### 递归

```typescript
/**
 * 递归
 * @desc 时间复杂度 O(N)  空间复杂度 O(N)
 * @param root
 */
export function isSymmetric(root: TreeNode | null): boolean {
  if (root === null) return true;

  return helper(root.left, root.right);

  function helper(left: TreeNode | null, right: TreeNode | null): boolean {
    if (!left && !right) return true;
    if (!left || !right) return false;
    if (left.val !== right.val) return false;
    return helper(left.left, right.right) && helper(left.right, right.left);
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
export function isSymmetric2(root: TreeNode | null): boolean {
  const queue: (TreeNode | null)[] = [root, root];

  while (queue.length > 0) {
    const u = queue.shift()!;
    const v = queue.shift()!;

    if (!u && !v) return true;
    if (!u || !v) return false;
    if (u.val !== v.val) return false;

    queue.push(u.left);
    queue.push(v.right);

    queue.push(u.right);
    queue.push(v.left);
  }

  return true;
}
```
