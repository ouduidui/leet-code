# 找出星型图的中心节点

> 难度：简单
>
> https://leetcode-cn.com/problems/find-center-of-star-graph/

## 题目

有一个无向的 **星型** 图，由 `n` 个编号从 `1` 到 `n` 的节点组成。星型图有一个
**中心** 节点，并且恰有 `n - 1` 条边将中心节点与其他每个节点连接起来。

给你一个二维整数数组 `edges` ，其中 `edges[i] = [ui, vi]` 表示在节点 `ui` 和
`vi` 之间存在一条边。请你找出并返回 `edges` 所表示星型图的中心节点。

### 示例

#### 示例 1：

![find-center-of-star-graph](https://user-images.githubusercontent.com/54696834/159101981-cb0bdd43-5e7a-476f-ae33-5634a248c5d4.png)

```
输入：edges = [[1,2],[2,3],[4,2]]
输出：2
解释：如上图所示，节点 2 与其他每个节点都相连，所以节点 2 是中心节点。
```

#### 示例 2：

```
输入：edges = [[1,2],[5,1],[1,3],[1,4]]
输出：1
```

## 解题

```typescript
/**
 * 寻找出现在两条边中的节点
 * @desc 时间复杂度 O(1)  空间复杂度 O(1)
 * @param edges
 */
export function findCenter(edges: number[][]): number {
  return edges[0][0] === edges[1][0] || edges[0][0] === edges[1][1]
    ? edges[0][0]
    : edges[0][1];
}
```
