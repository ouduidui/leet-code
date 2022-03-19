# 相同的树

> 难度：简单
>
> https://leetcode-cn.com/problems/same-tree/

## 题目

给你两棵二叉树的根节点 `p` 和 `q` ，编写一个函数来检验这两棵树是否相同。

如果两个树在结构上相同，并且节点具有相同的值，则认为它们是相同的。

### 示例

#### 示例 1：

![same-tree-1](https://user-images.githubusercontent.com/88995580/159103222-c4d67198-6396-4cde-a451-e24cff9b6e4a.jpg)

```
输入：p = [1,2,3], q = [1,2,3]
输出：true
```

#### 示例 2：

![same-tree-2](https://user-images.githubusercontent.com/88995580/159103261-f446f033-9905-47a9-8353-b743cce7650d.jpg)

```
输入：p = [1,2], q = [1,null,2]
输出：false
```

#### 示例 3：

![same-tree-3](https://user-images.githubusercontent.com/88995580/159103227-c3498ac0-5a1f-4e43-b862-950dc087fd78.jpg)

```
输入：p = [1,2,1], q = [1,1,2]
输出：false
```

## 解法

### 深度优先搜索

```typescript
/**
 * 深度优先搜索
 * @desc 时间复杂度 O(min(M,N))   空间复杂度 O(min(M,N))
 * @param p
 * @param q
 */
export function isSameTree(p: TreeNode | null, q: TreeNode | null): boolean {
  if (p === null && q === null) return true;
  if (p == null || q === null) return false;
  if (p.val !== q.val) return false;

  return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
}
```

### 广度优先搜索

```typescript
/**
 * 广度优先搜索
 * @desc 时间复杂度 O(min(M,N))   空间复杂度 O(min(M,N))
 * @param p
 * @param q
 */
export function isSameTree2(p: TreeNode | null, q: TreeNode | null): boolean {
  if (p === null && q === null) return true;
  if (p === null || q === null) return false;

  const queue1: TreeNode[] = [p];
  const queue2: TreeNode[] = [q];
  while (queue1.length && queue2.length) {
    const node1 = queue1.shift()!;
    const node2 = queue2.shift()!;
    if (node1.val !== node2.val) return false;

    const left1 = node1.left;
    const right1 = node1.right;
    const left2 = node2.left;
    const right2 = node2.right;

    if ((left1 === null || left2 === null) && left1 !== left2) return false;
    if ((right1 === null || right2 === null) && right1 !== right2) return false;

    left1 && queue1.push(left1);
    left2 && queue2.push(left2);
    right1 && queue1.push(right1);
    right2 && queue2.push(right2);
  }

  return queue1.length + queue2.length === 0;
}
```
