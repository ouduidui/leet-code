# 从前序与中序遍历序列构造二叉树

> 难度：中等
>
> https://leetcode-cn.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/

## 题目

给定两个整数数组 `preorder` 和 `inorder` ，其中 `preorder` 是二叉树的**先序遍
历**， `inorder` 是同一棵树的**中序遍历**，请构造二叉树并返回其根节点。

> 二叉树前序遍历的顺序为：
>
> - 先遍历根节点；
> - 随后递归地遍历左子树；
> - 最后递归地遍历右子树。
>
> 二叉树中序遍历的顺序为：
>
> - 先递归地遍历左子树；
> - 随后遍历根节点；
> - 最后递归地遍历右子树。

### 示例

#### 示例 1：

![construct-binary-tree-from-preorder-and-inorder-traversal](https://user-images.githubusercontent.com/88995580/159103244-390c4a39-0f1d-4e27-b2e2-6d5b2150a203.jpg)

```
输入: preorder = [3,9,20,15,7], inorder = [9,3,15,20,7]
输出: [3,9,20,null,null,15,7]
```

#### 示例 2：

```
输入: preorder = [-1], inorder = [-1]
输出: [-1]
```

## 解法

### 递归

```typescript
/**
 * 递归
 * @desc 时间复杂度 O(N)  空间复杂度 O(N)
 * @param preorder {number[]}
 * @param inorder {number[]}
 */
export function buildTree(
  preorder: number[],
  inorder: number[]
): TreeNode | null {
  const len = preorder.length;
  // 构造哈希表，可以快速定位到根节点
  const indexHash = new Map<number, number>();
  for (let i = 0; i < len; i++) {
    indexHash.set(inorder[i], i);
  }

  return _buildTree(0, len - 1, 0, len - 1);

  /**
   * 构建二叉树
   * @param preorderLeft {number}
   * @param preorderRight {number}
   * @param inorderLeft {number}
   * @param inorderRight {number}
   */
  function _buildTree(
    preorderLeft: number,
    preorderRight: number,
    inorderLeft: number,
    inorderRight: number
  ): TreeNode | null {
    if (preorderLeft > preorderRight) {
      return null;
    }

    // 先序遍历中的第一个节点就是根节点
    const preorderRoot = preorderLeft;
    // 在中序遍历中定位根节点
    const inorderRoot = indexHash.get(preorder[preorderRoot])!;

    // 创建根节点
    const root = new TreeNode(preorder[preorderRoot]);
    // 得到左子树的节点数目
    const leftSubtreeSize = inorderRoot - inorderLeft;
    // 递归构造左子树
    // 先序遍历中「从 左边界+1 开始的 size_left_subtree」个元素就对应了中序遍历中「从 左边界 开始到 根节点定位-1」的元素
    root.left = _buildTree(
      preorderLeft + 1,
      preorderLeft + leftSubtreeSize,
      inorderLeft,
      inorderRoot - 1
    );
    // 递归构造右子树
    // 先序遍历中「从 左边界+1+左子树节点数目 开始到 右边界」的元素就对应了中序遍历中「从 根节点定位+1 到 右边界」的元素
    root.right = _buildTree(
      preorderLeft + leftSubtreeSize + 1,
      preorderRight,
      inorderRoot + 1,
      inorderRight
    );
    return root;
  }
}
```

### 迭代

- 我们用一个栈和一个指针辅助进行二叉树的构造。初始时栈中存放了根节点（前序遍历的
  第一个节点），指针指向中序遍历的第一个节点；

- 我们依次枚举前序遍历中除了第一个节点以外的每个节点。如果 `index` 恰好指向栈顶
  节点，那么我们不断地弹出栈顶节点并向右移动 `index`，并将当前节点作为最后一个弹
  出的节点的右儿子；如果 `index` 和栈顶节点不同，我们将当前节点作为栈顶节点的左
  儿子；

- 无论是哪一种情况，我们最后都将当前的节点入栈。

```typescript
/**
 * 迭代
 * @desc 时间复杂度 O(N)  空间复杂度 O(N)
 * @param preorder {number[]}
 * @param inorder {number[]}
 */
export function buildTree2(
  preorder: number[],
  inorder: number[]
): TreeNode | null {
  if (preorder.length === 0) return null;

  // 创建根节点
  const root = new TreeNode(preorder[0]);
  const stack: TreeNode[] = [root];
  let inorderIndex = 0;

  // 遍历前序节点
  for (let i = 1; i < preorder.length; i++) {
    // 获取前序节点的值
    const preorderVal = preorder[i];
    // 获取栈顶节点（不弹出）
    let node = stack[stack.length - 1];
    // 如果当前中序值跟栈顶节点的值不匹配，则代表是该栈顶节点的左子节点
    if (node.val !== inorder[inorderIndex]) {
      node.left = new TreeNode(preorderVal);
      // 将左节点入栈
      stack.push(node.left);
    }
    // 如果当前中序值跟栈顶节点的值相等，则弹出并更新中序下标，找到根节点
    else {
      while (
        stack.length !== 0 &&
        stack[stack.length - 1].val === inorder[inorderIndex]
      ) {
        node = stack.pop()!;
        inorderIndex++;
      }
      node.right = new TreeNode(preorderVal);
      stack.push(node.right);
    }
  }

  return root;
}
```
