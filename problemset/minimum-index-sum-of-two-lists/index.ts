/**
 * 哈希表
 * @desc 时间复杂度 O(N + M) 空间复杂度 O(M)
 * @param list1
 * @param list2
 */
export function findRestaurant(list1: string[], list2: string[]): string[] {
  const map = new Map<string, number>()

  let i = 0
  while (i < list1.length) {
    map.set(list1[i], i)
    i++
  }

  const result: string[] = []

  i = 0
  let minSum = Number.MAX_SAFE_INTEGER
  while (i < list2.length) {
    const item = list2[i]
    if (map.has(item)) {
      const sum = map.get(item)! + i
      if (sum < minSum) {
        minSum = sum
        result.length = 0
      }
      if (sum === minSum) result.push(item)
    }
    i++
  }
  return result
}
