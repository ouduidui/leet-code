/**
 * 哈希表
 * @desc 时间复杂度 O(N)  空间复杂度 O(N)
 * @param target
 * @param arr
 * @returns
 */
export function canBeEqual(target: number[], arr: number[]): boolean {
  if (target.length !== arr.length) return false

  const map = new Map<number, number>()
  for (const num of target)
    map.set(num, (map.get(num) || 0) + 1)

  for (const num of arr) {
    if (!map.get(num))
      return false

    const count = map.get(num)!
    if (count === 1)
      map.delete(num)
    else
      map.set(num, count - 1)
  }

  return map.size === 0
}

/**
 * 排序
 * @desc 时间复杂度 O(NlogN)  空间复杂度 O(logN)
 * @param target
 * @param arr
 * @returns
 */
export function canBeEqual2(target: number[], arr: number[]): boolean {
  return target.sort().toString() === arr.sort().toString()
}
