# 从中序与后序遍历序列构造二叉树

> 难度：中等
>
> https://leetcode-cn.com/problems/construct-binary-tree-from-inorder-and-postorder-traversal/

## 题目

给定两个整数数组 `inorder` 和 `postorder` ，其中 `inorder` 是二叉树的中序遍历，
`postorder` 是同一棵树的后序遍历，请你构造并返回这颗 **二叉树** 。

> - 中序遍历的顺序是每次遍历左孩子，再遍历根节点，最后遍历右孩子。
> - 后序遍历的顺序是每次遍历左孩子，再遍历右孩子，最后遍历根节点。

### 示例

#### 示例 1：

![construct-binary-tree-from-inorder-and-postorder-traversal](https://user-images.githubusercontent.com/88995580/159103243-9e50bf37-1627-42cc-a8ed-82ead1fdb0f9.jpg)

```
输入：inorder = [9,3,15,20,7], postorder = [9,15,7,20,3]
输出：[3,9,20,null,null,15,7]
```

#### 示例 2：

```
输入：inorder = [-1], postorder = [-1]
输出：[-1]
```

## 解法

### 递归

```typescript
/**
 * 递归
 * @desc 时间复杂度 O(N)  空间复杂度 O(N)
 * @param inorder {number[]}
 * @param postorder {number[]}
 * @return {TreeNode | null}
 */
export function buildTree(
  inorder: number[],
  postorder: number[]
): TreeNode | null {
  let postIndex = postorder.length - 1;
  const inorderIndexMap = new Map<number, number>();
  inorder.forEach((item, index) => {
    inorderIndexMap.set(item, index);
  });

  return helper(0, inorder.length - 1);

  function helper(leftIndex: number, rightIndex: number): TreeNode | null {
    // 如果这里没有节点构造二叉树了，就结束
    if (leftIndex > rightIndex) return null;

    // 选择 postIndex 位置的元素作为当前子树根节点
    const rootVal = postorder[postIndex];
    const root = new TreeNode(rootVal);

    postIndex--;

    // 根据 root 所在位置分成左右两棵子树
    const index = inorderIndexMap.get(rootVal)!;
    root.right = helper(index + 1, rightIndex);
    root.left = helper(leftIndex, index - 1);

    return root;
  }
}
```

### 迭代

```typescript
/**
 * 迭代
 * @desc 时间复杂度 O(N)  空间复杂度 O(N)
 * @param inorder {number[]}
 * @param postorder {number[]}
 * @return {TreeNode | null}
 */
export function buildTree2(
  inorder: number[],
  postorder: number[]
): TreeNode | null {
  if (postorder.length == 0) return null;

  // 创建根节点
  const root = new TreeNode(postorder[postorder.length - 1]);
  // 初始化栈
  const stack: TreeNode[] = [root];
  let inorderIndex = inorder.length - 1;
  // 从后序序列倒数第二个开始遍历
  for (let i = postorder.length - 2; i >= 0; i--) {
    const postorderVal = postorder[i];
    let node = stack[stack.length - 1];
    if (node.val !== inorder[inorderIndex]) {
      node.right = new TreeNode(postorderVal);
      stack.push(node.right);
    } else {
      while (
        stack.length &&
        stack[stack.length - 1].val === inorder[inorderIndex]
      ) {
        node = stack.pop()!;
        inorderIndex--;
      }
      node.left = new TreeNode(postorderVal);
      stack.push(node.left);
    }
  }
  return root;
}
```
