/**
 * 离线查询 + 并查集
 * @param n
 * @param edgeList
 * @param queries
 * @returns
 */
export function distanceLimitedPathsExist(n: number, edgeList: number[][], queries: number[][]): boolean[] {
  const find = (uf: number[], x: number): number => uf[x] === x ? x : (uf[x] = find(uf, uf[x]))
  const merge = (uf: number[], x: number, y: number) => uf[find(uf, y)] = find(uf, x)
  edgeList.sort((a, b) => a[2] - b[2])
  const index = new Array(queries.length).fill(0)
  for (let i = 0; i < queries.length; i++)
    index[i] = i

  index.sort((a, b) => queries[a][2] - queries[b][2])

  const uf: number[] = new Array(n).fill(0)
  for (let i = 0; i < n; i++)
    uf[i] = i

  const res = new Array(queries.length).fill(0)
  let k = 0
  for (const i of index) {
    while (k < edgeList.length && edgeList[k][2] < queries[i][2]) {
      merge(uf, edgeList[k][0], edgeList[k][1])
      k++
    }
    res[i] = find(uf, queries[i][0]) === find(uf, queries[i][1])
  }
  return res
}
