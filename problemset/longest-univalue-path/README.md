# 最长同值路径

> 难度：中等
>
> https://leetcode.cn/problems/longest-univalue-path/

## 题目

给定一个二叉树的 `root` ，返回 **最长的路径的长度** ，这个路径中的 **每个节点具有相同**值 。 这条路径可以经过也可以不经过根节点。

**两个节点之间的路径长度** 由它们之间的边数表示。

### 示例

#### 示例 1:

![image](https://user-images.githubusercontent.com/54696834/188152894-4df98ca8-36fe-403c-91f2-04adf4aecaba.png)

```
输入：root = [5,4,5,1,1,5]
输出：2
```

#### 示例 2:

![image](https://user-images.githubusercontent.com/54696834/188152939-8e45c178-d817-47cf-8321-417ea66640d1.png)

```
输入：root = [1,4,5,4,4,5]
输出：2
```

## 解题

```ts 
/**
 * 深度遍历优先
 * @desc 时间复杂度 O(N)  空间复杂度 O(N)
 * @param root
 * @returns
 */
export function longestUnivaluePath(root: TreeNode | null): number {
  let res = 0
  const dfs = (root: TreeNode | null) => {
    if (!root)
      return 0

    const left = dfs(root.left); const right = dfs(root.right)
    let left1 = 0; let right1 = 0
    if (root.left && root.left.val === root.val)
      left1 = left + 1

    if (root.right && root.right.val === root.val)
      right1 = right + 1

    res = Math.max(res, left1 + right1)
    return Math.max(left1, right1)
  }
  dfs(root)
  return res
}
```