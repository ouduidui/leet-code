# 二叉树的右视图

> 难度：中等
>
> https://leetcode-cn.com/problems/binary-tree-right-side-view/

## 题目

给定一个二叉树的 **根节点** `root`，想象自己站在它的右侧，按照从顶部到底部的顺序
，返回从右侧所能看到的节点值。

### 示例

#### 示例 1：

![binary-tree-right-side-view](https://user-images.githubusercontent.com/54696834/159101927-153b981d-8a7e-4471-af80-0609b8c50a44.jpg)

```
输入: [1,2,3,null,5,null,4]
输出: [1,3,4]
```

#### 示例 2：

```
输入: [1,null,3]
输出: [1,3]
```

#### 示例 3：

```
输入: []
输出: []
```

## 解题

```typescript
/**
 * 广度优先遍历
 * @desc 时间复杂度 O(N)   空间复杂度 O(N)
 * @param root
 */
export function rightSideView(root: TreeNode | null): number[] {
  const result: number[] = [];

  if (!root) return result;

  const queue: TreeNode[] = [root];
  let row = 0;

  while (queue.length) {
    const len = queue.length;
    let node: TreeNode;
    for (let i = 0; i < len; i++) {
      node = queue.pop()!;
      node.left && queue.unshift(node.left);
      node.right && queue.unshift(node.right);
    }
    result[row++] = node!.val;
  }

  return result;
}
```
