/**
 * 哈希表
 * @desc 时间复杂度 O(N)  空间复杂度 O(N)
 * @param arr
 * @param pieces
 * @returns
 */
export function canFormArray(arr: number[], pieces: number[][]): boolean {
  const n = arr.length
  const m = pieces.length
  const index = new Map<number, number>()
  for (let i = 0; i < m; i++)
    index.set(pieces[i][0], i)

  for (let i = 0; i < n;) {
    if (!index.has(arr[i]))
      return false

    const j = index.get(arr[i])!
    const len = pieces[j].length

    for (let k = 0; k < len; k++) {
      if (arr[i + k] !== pieces[j][k])
        return false
    }
    i = i + len
  }
  return true
}
