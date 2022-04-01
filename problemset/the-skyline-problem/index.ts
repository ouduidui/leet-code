import { PriorityQueue } from '~/utils/priorityQueue'

/**
 * 扫描线 + 优先队列
 * @desc 时间复杂度 O(NlogN)  空间复杂度 O(N)
 * @param buildings
 * @returns
 */
export function getSkyline(buildings: number[][]): number[][] {
  // 初始化优先队列，以建筑物高度从高到低进行优先级排序
  const queue = new PriorityQueue<number[]>((a, b) => b[1] < a[1])

  // 边界数组
  // 将所有建筑的左右坐标扁平化到一个数组里面，并进行从小到大排序
  const boundaries: number[] = buildings.reduce((acc, cur) => {
    acc.push(cur[0], cur[1])
    return acc
  }, []).sort((a, b) => a - b)

  const result: number[][] = []
  const len = buildings.length
  let idx = 0

  // 遍历所有边界
  for (const boundary of boundaries) {
    // 将左边界在当前边界的左边的所有建筑入队
    while (idx < len && buildings[idx][0] <= boundary) {
      queue.offer([/* 右边界 */buildings[idx][1], /* 高度 */ buildings[idx][2]])
      idx++
    }

    // 弹出右边界在在当前边界的左边或重叠的建筑物
    while (!queue.isEmpty() && queue.peek()![0] <= boundary)
      queue.poll()

    // 找到当前边际的最高点
    const max = queue.isEmpty() ? 0 : queue.peek()![1]
    // 去重操作
    if (result.length === 0 || max !== result[result.length - 1][1])
      result.push([boundary, max])
  }

  return result
}
