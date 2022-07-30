/**
 * 并查集
 * @param nums
 * @returns
 */
export function largestComponentSize(nums: number[]): number {
  const max = Math.max(...nums)
  const uf = new UnionFind(max + 1)
  for (const num of nums) {
    for (let i = 2; i ** 2 <= num; i++) {
      if (num % i === 0) {
        uf.union(num, i)
        uf.union(num, (num / i) >> 0)
      }
    }
  }

  const counts = new Array(max + 1).fill(0)
  let ans = 0
  for (const num of nums) {
    const root = uf.find(num)
    counts[root]++
    ans = Math.max(ans, counts[root])
  }

  return ans
}

class UnionFind {
  parent: number[]
  rank: number[]

  constructor(len: number) {
    this.parent = new Array(len).fill(0).map((_, i) => i)
    this.rank = new Array(len).fill(0)
  }

  union(x: number, y: number) {
    const xRoot = this.find(x)
    const yRoot = this.find(y)
    if (xRoot !== yRoot) {
      if (this.rank[xRoot] > this.rank[yRoot]) {
        this.parent[yRoot] = xRoot
      }
      else if (this.rank[xRoot] < this.rank[yRoot]) {
        this.parent[xRoot] = yRoot
      }
      else {
        this.parent[yRoot] = xRoot
        this.rank[xRoot]++
      }
    }
  }

  find(x: number) {
    if (this.parent[x] !== x)
      this.parent[x] = this.find(this.parent[x])

    return this.parent[x]
  }
}
