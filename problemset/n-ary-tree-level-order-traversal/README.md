# N 叉树的层序遍历

> 难度：中等
>
> https://leetcode-cn.com/problems/n-ary-tree-level-order-traversal/

## 题目

给定一个 N 叉树，返回其节点值的层序遍历。（即从左到右，逐层遍历）。

树的序列化输入是用层序遍历，每组子节点都由 `null` 值分隔（参见示例）。

### 示例

#### 示例 1：

![n-ary-tree-level-order-traversal-1](https://user-images.githubusercontent.com/54696834/162345424-cba73038-bcef-4141-95fc-ea624a1d54a7.png)

```
输入：root = [1,null,3,2,4,null,5,6]
输出：[[1],[3,2,4],[5,6]]
```

#### 示例 2：

![n-ary-tree-level-order-traversal-2](https://user-images.githubusercontent.com/54696834/162345426-18653067-e748-45e7-baca-04d1fe72422d.png)

```
输入：root = [1,null,2,3,4,5,null,null,6,7,null,8,null,9,10,null,null,11,null,12,null,13,null,null,14]
输出：[[1],[2,3,4,5],[6,7,8,9,10],[11,12,13],[14]]
```

## 解题

```ts
/**
 * 广度优先搜索
 * @desc 时间复杂度 O(N)  空间复杂度 O(N)
 * @param root
 * @returns
 */
export function levelOrder(root: Node | null): number[][] {
  if (root === null) return []

  const result: number[][] = []
  const queue: Node[] = [root]

  while (queue.length) {
    const len = queue.length
    const nums: number[] = []
    for (let i = 0; i < len; i++) {
      const node = queue.pop()!
      nums.push(node.val)
      if (node.children.length)
        queue.unshift(...[...node.children].reverse())
    }
    result.push(nums)
  }

  return result
}
```