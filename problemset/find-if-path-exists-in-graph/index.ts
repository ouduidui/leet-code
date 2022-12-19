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
