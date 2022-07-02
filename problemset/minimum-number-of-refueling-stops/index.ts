import { PriorityQueue } from '~/utils/priorityQueue'

/**
 * 动态规划
 * @desc 时间复杂度 O(N²)  空间复杂度 O(N)
 * @param target
 * @param startFuel
 * @param stations
 * @returns
 */
export function minRefuelStops(
  target: number,
  startFuel: number,
  stations: number[][],
): number {
  const len = stations.length
  const dp = new Array(len + 1).fill(0)
  dp[0] = startFuel

  for (let i = 0; i < len; i++) {
    for (let j = i; j >= 0; j--) {
      if (dp[j] >= stations[i][0])
        dp[j + 1] = Math.max(dp[j + 1], dp[j] + stations[i][1])
    }
  }

  for (let i = 0; i <= len; i++) {
    if (dp[i] >= target)
      return i
  }

  return -1
}

/**
 * 贪心算法
 * @desc 时间复杂度 O(NlogN)  空间复杂度 O(N)
 * @param target
 * @param startFuel
 * @param stations
 * @returns
 */
export function minRefuelStops2(
  target: number,
  startFuel: number,
  stations: number[][],
): number {
  const pq = new PriorityQueue<number>((a, b) => b - a >= 0)
  let ans = 0
  let prev = 0
  let fuel = startFuel
  const len = stations.length

  for (let i = 0; i <= len; i++) {
    const curr = i < len ? stations[i][0] : target
    fuel -= curr - prev
    while (fuel < 0 && !pq.isEmpty()) {
      fuel += pq.poll()!
      ans++
    }

    if (fuel < 0) return -1

    if (i < len) {
      pq.offer(stations[i][1])
      prev = curr
    }
  }
  return ans
}
