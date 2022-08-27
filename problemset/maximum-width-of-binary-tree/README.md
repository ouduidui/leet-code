# 二叉树最大宽度

> 难度：中等
>
> https://leetcode.cn/problems/maximum-width-of-binary-tree/

## 题目

给你一棵二叉树的根节点 `root` ，返回树的 **最大宽度** 。

树的 **最大宽度** 是所有层中最大的 **宽度** 。

每一层的 **宽度** 被定义为该层最左和最右的非空节点（即，两个端点）之间的长度。将这个二叉树视作与满二叉树结构相同，两端点间会出现一些延伸到这一层的 `null` 节点，这些 `null` 节点也计入长度。

题目数据保证答案将会在  **32 位** 带符号整数范围内。

 

#### 示例 1：

![image](https://user-images.githubusercontent.com/54696834/187010948-3858cab7-4fe4-45e7-b787-b216d71de3d6.png)

```
输入：root = [1,3,2,5,3,null,9]
输出：4
解释：最大宽度出现在树的第 3 层，宽度为 4 (5,3,null,9) 。
```

#### 示例 2：

![image](https://user-images.githubusercontent.com/54696834/187010950-1cb1217d-a524-4178-94c4-0104a7694655.png)

```
输入：root = [1,3,2,5,null,null,9,6,null,7]
输出：7
解释：最大宽度出现在树的第 4 层，宽度为 7 (6,null,null,null,null,null,7) 。
```

#### 示例 3：

![image](https://user-images.githubusercontent.com/54696834/187010955-bbe0a7b9-eae5-4886-91c9-19c0085545cf.png)

```
输入：root = [1,3,2,5]
输出：2
解释：最大宽度出现在树的第 2 层，宽度为 2 (3,2) 。
```

## 解题

### 广度优先搜索

```ts 
/**
 * 广度优先搜索
 * @desc 时间复杂度 O(N)  空间复杂度 O(N)
 * @param root
 * @returns
 */
export function widthOfBinaryTree(root: TreeNode | null): number {
  if (!root) return 0

  let res = 1
  const queue: [TreeNode, number][] = [[root, 1]]

  while (queue.length) {
    const size = queue.length
    let left = 0
    let right = 0
    for (let i = 0; i < size; i++) {
      const [node, index] = queue.shift()!
      if (node.left)
        queue.push([node.left, index * 2])

      if (node.right)
        queue.push([node.right, index * 2 + 1])

      if (i === 0)
        left = index
      else if (i === size - 1)
        right = index
    }

    res = Math.max(res, right - left + 1)
  }

  return res
}
```

### 深度优先搜索

```ts 
/**
 * 深度优先搜索
 * @desc 时间复杂度 O(N)  空间复杂度 O(N)
 * @param root
 * @returns
 */
export function widthOfBinaryTree2(root: TreeNode | null): number {
  const map = new Map<number, number>()
  return dfs(root, 1, 1)

  function dfs(node: TreeNode | null, depth: number, index: number): number {
    if (!node) return 0

    !map.has(depth) && map.set(depth, index)

    return Math.max(
      index - map.get(depth)! + 1,
      dfs(node.left, depth + 1, index * 2),
      dfs(node.right, depth + 1, index * 2 + 1),
    )
  }
}
```