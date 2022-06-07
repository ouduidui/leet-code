/**
 * 二分查找
 * @desc 时间复杂度 O(NlogM)  空间复杂度 O(1)
 * @param piles
 * @param h
 * @returns
 */
export function minEatingSpeed(piles: number[], h: number): number {
  let low = 1
  let high = Math.max(...piles)

  let k = high
  while (low < high) {
    const speed = Math.floor((high - low) / 2) + low
    const time = getTime(speed)
    if (time <= h) {
      k = speed
      high = speed
    }
    else {
      low = speed + 1
    }
  }
  return k

  function getTime(speed: number): number {
    let time = 0
    for (const pile of piles) {
      const curTime = ((pile + speed - 1) / speed) >> 0
      time += curTime
    }

    return time
  }
}
