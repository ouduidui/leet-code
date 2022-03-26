/**
 * 字符串分割
 * @desc 时间复杂度 O(N+M)  空间复杂度 O(N+M)
 * @param version1
 * @param version2
 */
export function compareVersion(version1: string, version2: string): number {
  if (version1 === version2) return 0

  const v1 = version1.split('.')
  const v2 = version2.split('.')

  while (v1.length || v2.length) {
    const i1 = Number(v1.shift() || '0')
    const i2 = Number(v2.shift() || '0')

    if (i1 > i2) return 1
    if (i1 < i2) return -1
  }

  return 0
}

/**
 * 双指针
 * @desc 时间复杂度 O(N+M)  空间复杂度 O(N+M)
 * @param version1
 * @param version2
 */
export function compareVersion2(version1: string, version2: string): number {
  if (version1 === version2) return 0

  const m = version1.length
  const n = version2.length
  let p1 = 0
  let p2 = 0

  while (p1 < m || p2 < n) {
    let x = 0
    for (; p1 < m && version1[p1] !== '.'; p1++)
      x = x * 10 + Number(version1[p1])

    let y = 0
    for (; p2 < n && version2[p2] !== '.'; p2++)
      y = y * 10 + Number(version2[p2])

    if (x > y) return 1
    if (x < y) return -1

    p1++
    p2++
  }

  return 0
}
