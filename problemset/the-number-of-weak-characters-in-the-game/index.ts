/**
 * 暴力解法
 * @desc 时间复杂度 O(N^2)   空间复杂度 O(1)
 * @param properties {number[][]}
 * @return {number}
 */
export function numberOfWeakCharacters(properties: number[][]): number {
  if (properties.length < 2) return 0

  const len = properties.length
  let ans = 0
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len; j++) {
      if (
        i !== j
        && properties[i][0] < properties[j][0]
        && properties[i][1] < properties[j][1]
      ) {
        ans++
        break
      }
    }
  }

  return ans
}

/**
 * 排序
 * @desc 时间复杂度 O(NlogN)   空间复杂度 O(logN)
 * @param properties {number[][]}
 * @return {number}
 */
export function numberOfWeakCharacters2(properties: number[][]): number {
  if (properties.length < 2) return 0

  // 排序： 按照攻击力降序排列，如果攻击力相等，则按照防御力升序排列
  properties.sort((a, b) => {
    return a[0] === b[0] ? a[1] - b[1] : b[0] - a[0]
  })

  let maxDef = 0 // 最大防御力
  let ans = 0
  for (const p of properties) {
    // 如果防御力小于最大防御力，则代表为弱选手
    // 因为攻击力相等的时候防御力倒序排列，因此不会出现 p[1] < maxDef 同时 p[0] 与 maxDef对于的角色攻击力一致的情况
    if (p[1] < maxDef)
      ans++
    else
      maxDef = p[1]
  }

  return ans
}
