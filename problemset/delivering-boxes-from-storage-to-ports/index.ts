/**
 * 动态规划 + 单调队列优化
 * @desc 时间复杂度 O(n) 空间复杂度 O(n)
 * @param boxes
 * @param portsCount
 * @param maxBoxes
 * @param maxWeight
 * @returns
 */
export function boxDelivering(boxes: number[][], portsCount: number, maxBoxes: number, maxWeight: number): number {
  const n = boxes.length
  const p = new Array(n + 1).fill(0)
  const w = new Array(n + 1).fill(0)
  const neg = new Array(n + 1).fill(0)
  const W = new Array(n + 1).fill(0)
  for (let i = 1; i <= n; ++i) {
    p[i] = boxes[i - 1][0]
    w[i] = boxes[i - 1][1]
    if (i > 1)
      neg[i] = neg[i - 1] + (p[i - 1] !== p[i] ? 1 : 0)

    W[i] = W[i - 1] + w[i]
  }

  const opt = [0]
  const f = new Array(n + 1).fill(0)
  const g = new Array(n + 1).fill(0)
  for (let i = 1; i <= n; ++i) {
    while (i - opt[0] > maxBoxes || W[i] - W[opt[0]] > maxWeight)
      opt.shift()

    f[i] = g[opt[0]] + neg[i] + 2

    if (i !== n) {
      g[i] = f[i] - neg[i + 1]
      while (opt.length && g[i] <= g[opt[opt.length - 1]])
        opt.pop()

      opt.push(i)
    }
  }

  return f[n]
}
