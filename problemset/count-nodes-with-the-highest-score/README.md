# 统计最高分的节点数目

> 难度：中等
>
> https://leetcode-cn.com/problems/count-nodes-with-the-highest-score/

## 题目

给你一棵根节点为 `0` 的   二叉树  ，它总共有 `n`  个节点，节点编号为  `0` 
到` n - 1` 。同时给你一个下标从  `0`  开始的整数数组  `parents`  表示这棵树，其
中  `parents[i]`  是节点 `i`  的父节点。由于节点 `0`  是根，所以
 `parents[0] == -1` 。

一个子树的 **大小**  为这个子树内节点的数目。每个节点都有一个与之关联的  **分
数** 。求出某个节点分数的方法是，将这个节点和与它相连的边全部 **删除** ，剩余部
分是若干个 **非空**  子树，这个节点的 **分数**  为所有这些子树 **大小的乘积** 。

请你返回有 **最高得分**  节点的 **数目**。

### 示例

#### 示例 1：

![count-nodes-with-the-highest-score-1](https://user-images.githubusercontent.com/54696834/159101928-b176be2f-bce2-4d75-a55f-13333b36754d.png)

```
输入：parents = [-1,2,0,2,0]
输出：3
解释：
- 节点 0 的分数为：3 * 1 = 3
- 节点 1 的分数为：4 = 4
- 节点 2 的分数为：1 * 1 * 2 = 2
- 节点 3 的分数为：4 = 4
- 节点 4 的分数为：4 = 4
最高得分为 4 ，有三个节点得分为 4 （分别是节点 1，3 和 4 ）。
```

#### 示例 2：

![count-nodes-with-the-highest-score-2](https://user-images.githubusercontent.com/54696834/159101932-369071c2-59a8-48a7-8979-1506b9d693d6.png)

```
输入：parents = [-1,2,0]
输出：2
解释：
- 节点 0 的分数为：2 = 2
- 节点 1 的分数为：2 = 2
- 节点 2 的分数为：1 * 1 = 1
最高分数为 2 ，有两个节点分数为 2 （分别为节点 0 和 1 ）。
```

## 解题

```typescript
/**
 * 递归
 * @desc 时间复杂度 O(N)  空间复杂度 O(N)
 * @param parents
 */
export function countHighestScoreNodes(parents: number[]): number {
  const len = parents.length;
  const children: number[][] = new Array(len)
    .fill([])
    .map(() => new Array<number>());

  // 整理每个节点的直接孩子节点
  for (let i = 0; i < len; i++) {
    const p = parents[i];
    p !== -1 && children[p].push(i);
  }

  let maxScope = 0;
  let count = 0;

  // 从根节点开始递归遍历
  dfs(0);

  return count;

  /**
   * 获取node节点的节点数
   * @param node
   */
  function dfs(node: number): number {
    // 初始化分数
    // score  = leftChildCount * rightChildCount * (len - leftChildCount rightChildCount - 1)
    let score = 1;
    // 初始化节点数
    let sum = 1;

    // 遍历当前节点的左右子节点
    for (const c of children[node]) {
      // 获取左右子节点数
      const t = dfs(c);
      // 更新分数和数量
      score *= t;
      sum += t;
    }

    // 如果不是根节点，代表node节点存在父节点
    // 因此分数应该乘上剩余节点
    if (node !== 0) score *= len - sum;

    if (score === maxScope) {
      // 如果当前分数跟最大分数一致，则增加count
      count++;
    } else if (score > maxScope) {
      // 如果分数超过之前的最大分数，则重置
      maxScope = score;
      count = 1;
    }

    // 返回节点数
    return sum;
  }
}
```
