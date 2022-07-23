/**
 * 拓扑排序
 * @desc 时间复杂度 O(N+M) 空间复杂度 O(N+M)
 * @param nums
 * @param sequences
 * @returns
 */
export function sequenceReconstruction(nums: number[], sequences: number[][]): boolean {
  const len = nums.length
  const indegrees: number[] = new Array(len + 1).fill(0)
  const graph = new Array(len + 1).fill(0).map(() => new Set<number>())
  for (const sequence of sequences) {
    const size = sequence.length
    for (let i = 1; i < size; i++) {
      const prev = sequence[i - 1]
      const next = sequence[i]
      graph[prev].add(next)
      indegrees[next]++
    }
  }

  const queue: number[] = []
  for (let i = 1; i <= len; i++)
    if (indegrees[i] === 0) queue.push(i)

  while (queue.length) {
    if (queue.length > 1) return false

    const num = queue.shift()!
    const set = graph[num]
    for (const next of set) {
      indegrees[next]--
      if (indegrees[next] === 0) queue.push(next)
    }
  }

  return true
}
