import { PriorityQueue } from '~/utils/priorityQueue'

/**
 * 双优先队列 + 模拟
 * @desc 时间复杂度 O((k+n)logk)  空间复杂度 O(k)
 * @param k
 * @param arrival
 * @param load
 * @returns
 */
export function busiestServers(
  k: number,
  arrival: number[],
  load: number[],
): number[] {
  const used = new PriorityQueue<[delay: number, index: number]>((a, b) => a[0] < b[0])
  const available = new PriorityQueue<number>((a, b) => a < b)
  for (let i = 0; i < k; i++)
    available.offer(i)

  const counts = new Array(k).fill(0)
  let maxCount = 0

  // 遍历所有请求
  for (let i = 0; i < arrival.length; i++) {
    const arr = arrival[i]
    const duration = load[i]
    // 找到已经处理完请求的服务器并将其入队等候
    while (used.size > 0 && used.peek()![0] <= arr) {
      const cur = used.poll()!
      available.offer(
        i + ((cur[1] - i) % k + k) % k, // 保证得到的是一个不小于 i 的且与 id 同余的数
      )
    }
    if (available.size > 0) {
      // 找到空闲的服务器下标
      const idx = available.poll()! % k
      used.offer([arr + duration, idx])

      // 更新计数
      counts[idx]++
      maxCount = Math.max(maxCount, counts[idx])
    }
  }

  return counts.reduce((acc, cur, index) => {
    if (cur === maxCount) acc.push(index)
    return acc
  }, [])
}
