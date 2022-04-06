# 最小高度树

> 难度：中等
>
> https://leetcode-cn.com/problems/minimum-height-trees/

## 题目

树是一个无向图，其中任何两个顶点只通过一条路径连接。 换句话说，一个任何没有简单环路的连通图都是一棵树。

给你一棵包含 `n` 个节点的树，标记为 `0` 到 `n - 1` 。给定数字 n` 和一个有 `n - 1` 条无向边的 `edges` 列表（每一个边都是一对标签），其中 `edges[i] = [ai, bi]` 表示树中节点 `ai` 和 `bi` 之间存在一条无向边。

可选择树中任何一个节点作为根。当选择节点 `x` 作为根节点时，设结果树的高度为 `h` 。在所有可能的树中，具有最小高度的树（即，`min(h)`）被称为 **最小高度树** 。

请你找到所有的 **最小高度树** 并按 **任意顺序** 返回它们的根节点标签列表。

树的 **高度** 是指根节点和叶子节点之间最长向下路径上边的数量。

### 示例

#### 示例 1：

![minimum-height-trees-1](https://user-images.githubusercontent.com/54696834/161868696-47ec3e60-9a14-4f63-ad17-f8b9d79e97fa.jpg)

```
输入：n = 4, edges = [[1,0],[1,2],[1,3]]
输出：[1]
解释：如图所示，当根是标签为 1 的节点时，树的高度是 1 ，这是唯一的最小高度树。
```

#### 示例 2：

![minimum-height-trees-2](https://user-images.githubusercontent.com/54696834/161868698-43b003b1-58d5-4fcc-8170-27d77b9b189d.jpg)

```
输入：n = 6, edges = [[3,0],[3,1],[3,2],[3,4],[5,4]]
输出：[3,4]
```

## 解题

```ts
/**
 * 拓扑排序
 * @desc 时间复杂度 O(N)  空间复杂度 O(N)
 * @param n
 * @param edges
 * @returns
 */
export function findMinHeightTrees(n: number, edges: number[][]): number[] {
  if (n === 1) return [0]

  const degree = new Array<number>(n).fill(0)
  const adj = new Array(n).fill([]).map(() => [] as number[])
  for (const edge of edges) {
    adj[edge[0]].push(edge[1])
    adj[edge[1]].push(edge[0])
    degree[edge[0]]++
    degree[edge[1]]++
  }

  const queue: number[] = []
  // 将度为1的节点压入队列
  for (let i = 0; i < n; i++) {
    if (degree[i] === 1)
      queue.push(i)
  }

  // 剩余节点
  let remainNodes = n
  while (remainNodes > 2) {
    const sz = queue.length
    remainNodes -= sz
    for (let i = 0; i < sz; i++) {
      const cur = queue.shift()!
      for (const v of adj[cur]) {
        degree[v]--
        if (degree[v] === 1)
          queue.push(v)
      }
    }
  }

  return queue
}
```