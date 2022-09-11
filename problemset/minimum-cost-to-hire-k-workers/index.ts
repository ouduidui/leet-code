import { MaxPriorityQueue } from '@datastructures-js/priority-queue'

/**
 * 贪心 + 优先队列
 * @desc 时间复杂度 O(NlogN)  空间复杂度 O(N)
 * @param quality
 * @param wage
 * @param k
 * @returns
 */
export function mincostToHireWorkers(quality: number[], wage: number[], k: number): number {
  const n = quality.length
  const h = new Array(n).fill(0).map((_, i) => i)
  h.sort((a, b) => {
    return quality[b] * wage[a] - quality[a] * wage[b]
  })
  let res = 1e9
  let totalq = 0.0
  const pq = new MaxPriorityQueue<number>()
  for (let i = 0; i < k - 1; i++) {
    totalq += quality[h[i]]
    pq.enqueue(quality[h[i]])
  }
  for (let i = k - 1; i < n; i++) {
    const idx = h[i]
    totalq += quality[idx]
    pq.enqueue(quality[idx])
    const totalc = (wage[idx] / quality[idx]) * totalq
    res = Math.min(res, totalc)
    totalq -= pq.dequeue()
  }
  return Number(res.toFixed(5))
}
