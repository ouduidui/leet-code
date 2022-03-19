# N 叉树的前序遍历

> 难度：简单
>
> <https://leetcode-cn.com/problems/n-ary-tree-preorder-traversal/>

## 题目

给定一个 `n`  叉树的根节点  `root` ，返回 其节点值的 **前序遍历** 。

n 叉树 在输入中按层序遍历进行序列化表示，每组子节点由空值 `null` 分隔（请参见示
例

### 示例

#### 示例 1

![n-ary-tree-preorder-traversal-1](https://user-images.githubusercontent.com/54696834/159101956-a2fcf812-394b-4ede-9187-523d92b37e4d.png)

```
输入：root = [1,null,3,2,4,null,5,6]
输出：[1,3,5,6,2,4]
```

#### 示例 2

![n-ary-tree-preorder-traversal-2](https://user-images.githubusercontent.com/54696834/159101954-9d640b44-90d2-48d6-aede-310e7c7e3d7f.png)

```
输入：root = [1,null,2,3,4,5,null,null,6,7,null,8,null,9,10,null,null,11,null,12,null,13,null,null,14]
输出：[1,2,3,6,7,11,14,4,8,12,5,9,13,10]
```

## 解题

### 递归

```typescript
/**
 * 递归
 * @desc 时间复杂度 O(N)  空间复杂度 O(N)
 * @param root
 */
export function preorder(root: Node | null): number[] {
  const result: number[] = [];
  dfs(root, result);
  return result;

  function dfs(node: Node | null, result: number[]): void {
    if (node === null) return;

    result.push(node.val);

    for (const child of node.children) {
      dfs(child, result);
    }
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
export function preorder2(root: Node | null): number[] {
  if (root === null) return [];

  const result: number[] = [];
  const stack: Node[] = [root];

  while (stack.length) {
    const node = stack.pop()!;
    result.push(node.val);

    const len = node.children.length;

    // 倒序入栈
    for (let i = len - 1; i >= 0; i--) {
      stack.push(node.children[i]);
    }
  }

  return result;
}
```
