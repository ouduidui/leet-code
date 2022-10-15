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
