# N 叉树的后序遍历

> 难度：简单
>
> https://leetcode-cn.com/problems/n-ary-tree-postorder-traversal/

## 题目

给定一个 `n`  叉树的根节点  `root` ，返回 其节点值的 **后序遍历** 。

**n 叉树 **在输入中按层序遍历进行序列化表示，每组子节点由空值 `null` 分隔（请参
见示例）。

### 示例

#### 示例 1：

![n-ary-tree-postorder-traversal-1](https://user-images.githubusercontent.com/54696834/159101931-38c839ef-2331-4c79-b79b-0619c6bdc25d.png)

```
输入：root = [1,null,3,2,4,null,5,6]
输出：[5,6,3,2,4,1]
```

#### 示例 2：

![n-ary-tree-postorder-traversal-2](https://user-images.githubusercontent.com/54696834/159101930-e492d194-ce34-43ed-9067-cc3780d7f5b9.png)

```
输入：root = [1,null,2,3,4,5,null,null,6,7,null,8,null,9,10,null,null,11,null,12,null,13,null,null,14]
输出：[2,6,14,11,7,3,12,8,4,13,9,10,5,1]
```

## 解题

### 递归

```typescript
 * 递归
 * @desc 时间复杂度 O(N)  空间复杂度 O(N)
 * @param root
 * @returns
 */
export function postorder(root: Node | null): number[] {
  const result: number[] = [];
  dfs(root, result);
  return result;

  function dfs(node: Node | null, res: number[]) {
    if (node === null) return;
    node.children.forEach((c) => dfs(c, res));
    res.push(node.val);
  }
}
```

### 迭代

```typescript
/**
 * 迭代
 * @desc 时间复杂度 O(N)  空间复杂度 O(N)
 * @param root
 * @returns
 */
export function postorder2(root: Node | null): number[] {
  if (root === null) return [];

  const result: number[] = [];
  const stack: Node[] = [root];
  const visited = new Set<Node>();

  while (stack.length > 0) {
    const tail = stack[stack.length - 1];

    const len = tail.children.length;

    if (len === 0 || visited.has(tail)) {
      const node = stack.pop()!;
      result.push(node.val);
    } else {
      visited.add(tail);
      for (let i = len - 1; i >= 0; i--) {
        stack.push(tail.children[i]);
      }
    }
  }

  return result;
}
```

### 前序翻转

```typescript
/**
 * 前序翻转
 * @desc 时间复杂度 O(N)  空间复杂度 O(N)
 * @param root
 * @returns
 */
export function postorder3(root: Node | null): number[] {
  if (root === null) return [];

  const result: number[] = [];
  const stack: Node[] = [root];

  while (stack.length > 0) {
    const node = stack.pop()!;
    result.push(node.val);
    node.children.forEach((c) => stack.push(c));
  }

  return result.reverse();
}
```
