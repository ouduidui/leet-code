# 出现次数最多的子树元素和

> 难度：中等
>
> https://leetcode.cn/problems/most-frequent-subtree-sum/

## 题目

给你一个二叉树的根结点 `root` ，请返回出现次数最多的子树元素和。如果有多个元素出现的次数相同，返回所有出现次数最多的子树元素和（不限顺序）。

一个结点的 「子树元素和」 定义为以该结点为根的二叉树上所有结点的元素之和（包括结点本身）。

### 示例

#### 示例 1: 

![image](https://user-images.githubusercontent.com/54696834/174463340-97675e84-9e93-4d18-9882-8511628ab88e.png)

```
输入: root = [5,2,-3]
输出: [2,-3,4]
```

#### 示例 2: 

![image](https://user-images.githubusercontent.com/54696834/174463344-d609b05d-7f2a-4dd5-b6b8-2e9177728e3e.png)

```
输入: root = [5,2,-5]
输出: [2]
```

## 解题

```ts
/**
 * 深度优先搜索
 * @desc 时间复杂度 O(N) 空间复杂度 O(N)
 * @param root
 * @returns
 */
export function findFrequentTreeSum(root: TreeNode | null): number[] {
  if (!root) return []

  const map = new Map<number, number>()
  let maxCount = 0
  dfs(root)

  const ans: number[] = []
  for (const [num, cnt] of map)
    if (cnt === maxCount) ans.push(num)

  return ans

  function dfs(node: TreeNode): number {
    let sum = node.val

    if (node.left) sum += dfs(node.left)
    if (node.right) sum += dfs(node.right)

    const count = (map.get(sum) || 0) + 1
    map.set(sum, count)
    maxCount = Math.max(maxCount, count)

    return sum
  }
}
```