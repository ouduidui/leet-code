# 两数之和 IV - 输入 BST

> 难度：简单
>
> https://leetcode-cn.com/problems/two-sum-iv-input-is-a-bst/

## 题目

给定一个二叉搜索树 `root` 和一个目标结果 `k`，如果 `BST` 中存在两个元素且它们的
和等于给定的目标结果，则返回 `true`。

### 示例

#### 示例 1：

![two-sum-iv-input-is-a-bst-1](https://user-images.githubusercontent.com/54696834/159190975-736a58d3-a89a-4119-bfb6-cea13459f94b.jpg)

```
输入: root = [5,3,6,2,4,null,7], k = 9
输出: true
```

#### 示例 2：

![two-sum-iv-input-is-a-bst-2](https://user-images.githubusercontent.com/54696834/159190978-0f9da24e-bc9a-47ed-b916-63124d498a11.jpg)

```
输入: root = [5,3,6,2,4,null,7], k = 28
输出: false
```

## 解题

### 广度优先搜索 + 哈希表

```typescript
/**
 * 广度优先搜索 + 哈希表
 * @desc 时间复杂度 O(N)  空间复杂度 O(N)
 * @param root
 * @param k
 * @returns
 */
export function findTarget(root: TreeNode | null, k: number): boolean {
  if (root === null) return false;

  const set = new Set<number>();
  const stack = [root];

  while (stack.length > 0) {
    const node = stack.pop()!;

    const diff = k - node.val;
    if (set.has(diff)) return true;
    set.add(node.val);

    node.left && stack.push(node.left);
    node.right && stack.push(node.right);
  }

  return false;
}
```

### 深度优先搜索 + 哈希表

```typescript
/**
 * 深度优先搜索 + 哈希表
 * @desc 时间复杂度 O(N)  空间复杂度 O(N)
 * @param root
 * @param k
 * @returns
 */
export function findTarget2(root: TreeNode | null, k: number): boolean {
  if (root === null) return false;
  return dfs(root, k);

  function dfs(node: TreeNode, k: number, set = new Set<number>()): boolean {
    if (set.has(k - node.val)) return true;

    set.add(node.val);

    if (
      (node.left && dfs(node.left, k, set)) ||
      (node.right && dfs(node.right, k, set))
    ) {
      return true;
    }

    return false;
  }
}
```

### 深度优先搜索 + 中序遍历 + 双指针

```typescript
/**
 * 深度优先搜索 + 中序遍历 + 双指针
 * @desc 时间复杂度 O(N)  空间复杂度 O(N)
 * @param root
 * @param k
 * @returns
 */
export function findTarget3(root: TreeNode | null, k: number): boolean {
  if (root === null) return false;

  const list: number[] = [];
  inorderTraversal(root, list);

  let left = 0;
  let right = list.length - 1;

  while (left < right) {
    const sum = list[left] + list[right];
    if (sum === k) return true;
    if (sum < k) left++;
    else right--;
  }

  return false;

  function inorderTraversal(node: TreeNode | null, list: number[]) {
    if (!node) return;
    inorderTraversal(node.left, list);
    list.push(node.val);
    inorderTraversal(node.right, list);
  }
}
```
