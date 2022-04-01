/**
 * 排序 + 哈希表
 * @desc 时间复杂度 O(NlogN)  空间复杂度 O(N)
 * @param arr
 * @returns
 */
export function canReorderDoubled(arr: number[]): boolean {
  const count = new Map<number, number>()
  for (const x of arr)
    count.set(x, (count.get(x) || 0) + 1)

  // 因为 0 只能跟本身进行匹配，因此需要保证 0 的数量是偶数
  if ((count.get(0) || 0) % 2 !== 0) return false

  const vals = [...count.keys()].sort((a, b) => Math.abs(a) - Math.abs(b))

  for (const x of vals) {
    if ((count.get(2 * x) || 0) < count.get(x)!)
      return false
    count.set(2 * x, (count.get(2 * x) || 0) - count.get(x)!)
  }

  return true
}
