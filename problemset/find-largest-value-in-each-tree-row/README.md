# 在每个树行中找最大值

> 难度：中等
>
> https://leetcode.cn/problems/find-largest-value-in-each-tree-row/

## 题目

给定一棵二叉树的根节点 `root` ，请找出该二叉树中每一层的最大值。

### 示例 

#### 示例 1：

![image](https://user-images.githubusercontent.com/54696834/175475977-a1e1956a-b6a7-43da-949d-8422ee855673.png)

```
输入: root = [1,3,2,5,3,null,9]
输出: [1,3,9]
```

#### 示例 2：

```
输入: root = [1,2,3]
输出: [1,3]
```

## 解题

```ts 
/**
 * 广度优先搜索
 * @desc 时间复杂度 O(N)  空间复杂度 O(N)
 * @param root
 * @returns
 */
export function largestValues(root: TreeNode | null): number[] {
  const ans: number[] = []

  if (root) {
    const queue: TreeNode[] = [root]

    while (queue.length) {
      let len = queue.length
      let maxVal = -Number.MAX_VALUE
      while (len--) {
        const node = queue.pop()!
        maxVal = Math.max(maxVal, node.val)
        node.left && queue.unshift(node.left)
        node.right && queue.unshift(node.right)
      }
      ans.push(maxVal)
    }
  }

  return ans
}
```