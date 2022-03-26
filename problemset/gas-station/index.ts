/**
 * 暴力解法
 * @desc 时间复杂度 O(N^2)  空间复杂度 O(1)
 * @param gas
 * @param cost
 */
export function canCompleteCircuit(gas: number[], cost: number[]): number {
  const len = gas.length

  for (let i = 0; i < len; i++) {
    if (drive(i))
      return i
  }

  return -1

  function drive(startIndex: number) {
    let oil = 0
    let count = 0
    while (count < len) {
      const idx = (count + startIndex) % len
      oil += gas[idx] - cost[idx]

      if (oil < 0)
        return false

      count++
    }
    return true
  }
}

/**
 * 一次遍历
 * @desc 时间复杂度 O(N)  空间复杂度 O(1)
 * @param gas
 * @param cost
 */
export function canCompleteCircuit2(gas: number[], cost: number[]): number {
  const len = gas.length

  let i = 0
  while (i < len) {
    let oil = 0
    let count = 0
    while (count < len) {
      const idx = (i + count) % len
      oil += gas[idx] - cost[idx]
      if (oil < 0)
        break

      count++
    }

    if (count === len) {
      return i
    }
    else {
      // 直接从无法到达加油站的最后一个点开始
      i = i + count + 1
    }
  }

  return -1
}
