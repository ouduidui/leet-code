# 最大层内元素和

> 难度：中等
>
> https://leetcode.cn/problems/maximum-level-sum-of-a-binary-tree/

## 题目

给你一个二叉树的根节点 `root`。设根节点位于二叉树的第 `1` 层，而根节点的子节点位于第 `2` 层，依此类推。

请返回层内元素之和 **最大** 的那几层（可能只有一层）的层号，并返回其中 **最小** 的那个。
 
### 示例

#### 示例 1：

![image](https://user-images.githubusercontent.com/54696834/182010293-29422869-a78e-4e72-b559-972300dbb402.png)

```
输入：root = [1,7,0,7,-8,null,null]
输出：2
解释：
第 1 层各元素之和为 1，
第 2 层各元素之和为 7 + 0 = 7，
第 3 层各元素之和为 7 + -8 = -1，
所以我们返回第 2 层的层号，它的层内元素之和最大。
```

#### 示例 2：

```
输入：root = [989,null,10250,98693,-89388,null,null,null,-32127]
输出：2
```

## 解题

```ts 
/**
 * 广度优先遍历
 * @desc 时间复杂度 O(N)   空间复杂度 O(N)
 * @param root
 * @returns
 */
export function maxLevelSum(root: TreeNode | null): number {
  if (!root) return NaN

  const queue: TreeNode[] = [root]
  let curLevel = 0
  let maxSum = -Number.MAX_VALUE
  let maxSumLevel = 0

  while (queue.length) {
    curLevel++
    const len = queue.length
    let sum = 0
    for (let i = 0; i < len; i++) {
      const node = queue.pop()!
      sum += node.val
      node.left && queue.unshift(node.left)
      node.right && queue.unshift(node.right)
    }

    if (sum > maxSum) {
      maxSum = sum
      maxSumLevel = curLevel
    }
  }

  return maxSumLevel
}
```