# 验证二叉搜索树

> 难度：中等
>
> https://leetcode-cn.com/problems/validate-binary-search-tree/

## 题目

给你一个二叉树的根节点 `root` ，判断其是否是一个有效的二叉搜索树。

**有效** 二叉搜索树定义如下：

- 节点的左子树只包含 **小于** 当前节点的数。
- 节点的右子树只包含 **大于** 当前节点的数。
- 所有左子树和右子树自身必须也是二叉搜索树。

### 示例 1：

![validate-binary-search-tree-1](https://user-images.githubusercontent.com/88995580/159103264-b6030c51-3108-488f-9025-eeb8b1077468.jpg)

```
输入：root = [2,1,3]
输出：true
```

### 示例 2：

![validate-binary-search-tree-2](https://user-images.githubusercontent.com/88995580/159103232-ace4829c-5a49-4236-9231-285489dd542a.jpg)

```
输入：root = [5,1,4,null,null,3,6]
输出：false
解释：根节点的值是 5 ，但是右子节点的值是 4 。
```

## 解题

### 递归

```typescript
/**
 * 递归
 * @desc 时间复杂度 O(N)   空间复杂度 O(N)
 * @param root
 */
export function isValidBST(root: TreeNode | null): boolean {
  return helper(root, -Infinity, Infinity);

  function helper(
    root: TreeNode | null,
    lower: number, // 下界
    upper: number // 上界
  ): boolean {
    if (root === null) return true;

    if (root.val <= lower || root.val >= upper) return false;

    return (
      helper(root.left, lower, root.val) && helper(root.right, root.val, upper)
    );
  }
}
```

### 中序遍历

![validate-binary-search-tree-3](https://user-images.githubusercontent.com/54696834/159102039-9b940a1c-623d-43f1-ac1a-57eb682cd521.gif)

```typescript
/**
 * 中序遍历
 * @desc 时间复杂度 O(N)   空间复杂度 O(N)
 * @param root
 */
export function isValidBST2(root: TreeNode | null): boolean {
  const stack: TreeNode[] = [];
  let inorder = -Infinity;

  while (stack.length || root !== null) {
    // 将root指向最左边的节点
    while (root !== null) {
      stack.push(root);
      root = root.left;
    }
    root = stack.pop()!;

    // 如果中序遍历得到的节点的值小于等于前一个 inorder，说明不是二叉搜索树
    if (root.val <= inorder) {
      return false;
    }

    inorder = root.val;
    root = root.right;
  }

  return true;
}
```
