/**
 * 黑名单映射
 */
export class Solution {
  bound: number
  b2w: Map<number, number>

  constructor(n: number, blacklist: number[]) {
    this.b2w = new Map<number, number>()
    const len = blacklist.length
    this.bound = n - len
    const black = new Set()

    for (const b of blacklist) {
      if (b >= this.bound)
        black.add(b)
    }

    let w = this.bound
    for (const b of blacklist) {
      if (b < this.bound) {
        while (black.has(w)) w++

        this.b2w.set(b, w)
        w++
      }
    }
  }

  pick(): number {
    const x = Math.floor(Math.random() * this.bound)
    return this.b2w.get(x) || x
  }
}
