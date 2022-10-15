# 可能的二分法

> 难度：中等
>
> https://leetcode.cn/problems/possible-bipartition/

## 题目

给定一组 `n` 人（编号为 1, 2, ..., n）， 我们想把每个人分进任意大小的两组。每个人都可能不喜欢其他人，那么他们不应该属于同一组。

给定整数 `n` 和数组 `dislikes` ，其中 `dislikes[i] = [ai, bi]` ，表示不允许将编号为 `ai` 和  `bi`的人归入同一组。当可以用这种方法将所有人分进两组时，返回 `true`；否则返回 `false`。

### 示例

#### 示例 1：

```
输入：n = 4, dislikes = [[1,2],[1,3],[2,4]]
输出：true
解释：group1 [1,4], group2 [2,3]
```

#### 示例 2：

```
输入：n = 3, dislikes = [[1,2],[1,3],[2,3]]
输出：false
```

#### 示例 3：

```
输入：n = 5, dislikes = [[1,2],[2,3],[3,4],[4,5],[1,5]]
输出：false
```

## 解题

```ts 
/**
 * 深度优先搜索
 * @desc 时间复杂度 O(N+M) 空间复杂度 O(N+M)
 * @param n
 * @param dislikes
 * @returns
 */
export function possibleBipartition(n: number, dislikes: number[][]): boolean {
  const color = new Array<number>(n + 1).fill(0)
  const g: number[][] = new Array(n + 1).fill([]).map(() => [])

  for (const p of dislikes) {
    g[p[0]].push(p[1])
    g[p[1]].push(p[0])
  }
  for (let i = 1; i <= n; ++i) {
    if (color[i] === 0 && !dfs(i, 1))
      return false
  }
  return true

  function dfs(curnode: number, nowcolor: number) {
    color[curnode] = nowcolor
    for (const nextnode of g[curnode]) {
      if (color[nextnode] !== 0 && color[nextnode] === color[curnode])
        return false

      if (color[nextnode] === 0 && !dfs(nextnode, 3 ^ nowcolor))
        return false
    }
    return true
  }
}
```