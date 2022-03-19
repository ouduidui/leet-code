# 不同的二叉搜索数 II

> 难度：中等
>
> https://leetcode-cn.com/problems/unique-binary-search-trees-ii/

## 题目

给你一个整数 `n` ，请你生成并返回所有由 `n` 个节点组成且节点值从 `1` 到 `n` 互不
相同的不同 **二叉搜索树** 。可以按 **任意顺序** 返回答案。

### 示例

#### 示例 1：

![unique-binary-search-trees-ii](https://user-images.githubusercontent.com/54696834/159102069-e96466b4-722c-4e1e-836c-61199e0b8406.jpg)

```
输入：n = 3
输出：[[1,null,2,null,3],[1,null,3,2],[2,1,3],[3,1,null,null,2],[3,2,null,1]]
```

#### 示例 2：

```
输入：n = 1
输出：[[1]]
```

## 解法

> 二叉搜索树关键的性质是根节点的值大于左子树所有节点的值，小于右子树所有节点的值
> ，且左子树和右子树也同样为二叉搜索树。

```typescript
/**
 * 回溯
 * @desc 时间复杂度 O(4^N / √N)   空间复杂度 O(4^N / √N)
 * @param n {number}
 * @return {Array<TreeNode | null>}
 */
export function generateTrees(n: number): Array<TreeNode | null> {
  if (n === 0) return [];
  return dfs(1, n);

  function dfs(start: number, end: number): Array<TreeNode | null> {
    const allTrees: Array<TreeNode | null> = [];

    if (start > end) {
      allTrees.push(null);
      return allTrees;
    }

    // 枚举可行根节点
    for (let i = start; i <= end; i++) {
      // 获得所有可行的左子树集合
      const leftTrees = dfs(start, i - 1);
      // 获得所有可行的右子树集合
      const rightTrees = dfs(i + 1, end);

      // 从左子树集合中选出一棵左子树，从右子树集合中选出一棵右子树，拼接到根节点上
      for (const left of leftTrees) {
        for (const right of rightTrees) {
          const cur = new TreeNode(i);
          cur.left = left;
          cur.right = right;
          allTrees.push(cur);
        }
      }
    }

    return allTrees;
  }
}
```
