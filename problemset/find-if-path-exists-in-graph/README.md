# 寻找图中是否存在路径

> 难度：简单
>
> https://leetcode.cn/problems/find-if-path-exists-in-graph/

## 题目

有一个具有 `n` 个顶点的 **双向** 图，其中每个顶点标记从 `0` 到 `n - 1`（包含 `0` 和 `n - 1`）。图中的边用一个二维整数数组 `edges` 表示，其中 `edges[i] = [ui, vi]` 表示顶点 `ui` 和顶点 `vi` 之间的双向边。 每个顶点对由 **最多一条** 边连接，并且没有顶点存在与自身相连的边。

请你确定是否存在从顶点 `source` 开始，到顶点 `destination` 结束的 **有效路径** 。

给你数组 `edges` 和整数 `n`、`source` 和 `destination`，如果从 `source` 到 `destination` 存在 **有效路径** ，则返回 `true`，否则返回 `false` 。

 

#### 示例 1：

![image](https://user-images.githubusercontent.com/54696834/208372717-fd48a4c0-6763-4c2c-bed6-0e1458361ba9.png)

```
输入：n = 3, edges = [[0,1],[1,2],[2,0]], source = 0, destination = 2
输出：true
解释：存在由顶点 0 到顶点 2 的路径:
- 0 → 1 → 2 
- 0 → 2
```

#### 示例 2：

![image](https://user-images.githubusercontent.com/54696834/208372730-72e6a808-c166-49af-93c8-6990eea0d4de.png)

```
输入：n = 6, edges = [[0,1],[0,2],[3,5],[5,4],[4,3]], source = 0, destination = 5
输出：false
解释：不存在由顶点 0 到顶点 5 的路径.
```

## 解题

```ts 
/**
 * 并查表
 * @param n
 * @param edges
 * @param source
 * @param destination
 * @returns
 */
export function validPath(n: number, edges: number[][], source: number, destination: number): boolean {
  if (source === destination)
    return true

  const uf = new UnionFind(n)
  for (const edge of edges)
    uf.uni(edge[0], edge[1])

  return uf.connect(source, destination)
}

class UnionFind {
  parent: number[]
  rank: number[]

  constructor(n: number) {
    this.parent = new Array(n).fill(0).map((_, i) => i)
    this.rank = new Array(n).fill(0)
  }

  uni(x: number, y: number) {
    const rootx = this.find(x)
    const rooty = this.find(y)
    if (rootx !== rooty) {
      if (this.rank[rootx] > this.rank[rooty]) {
        this.parent[rooty] = rootx
      }
      else if (this.rank[rootx] < this.rank[rooty]) {
        this.parent[rootx] = rooty
      }
      else {
        this.parent[rooty] = rootx
        this.rank[rootx]++
      }
    }
  }

  find(x: number) {
    if (this.parent[x] !== x)
      this.parent[x] = this.find(this.parent[x])

    return this.parent[x]
  }

  connect(x: number, y: number) {
    return this.find(x) === this.find(y)
  }
}
```