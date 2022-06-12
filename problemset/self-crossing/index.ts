/**
 * 归纳法（归纳路径交叉的情况）
 * @desc 时间复杂度 O(N)  空间复杂度 O(1)
 * @param distance
 * @returns
 */
export function isSelfCrossing(distance: number[]): boolean {
  const n: number = distance.length
  for (let i = 3; i < n; ++i) {
    // 第 1 类路径交叉的情况 内卷
    if (distance[i] >= distance[i - 2] && distance[i - 1] <= distance[i - 3])
      return true

    // 第 2 类路径交叉的情况 首尾重叠
    if (i === 4 && (distance[3] === distance[1]
            && distance[4] >= distance[2] - distance[0]))
      return true

    // 第 3 类路径交叉的情况 外卷
    if (i >= 5 && (distance[i - 3] - distance[i - 5] <= distance[i - 1]
            && distance[i - 1] <= distance[i - 3]
            && distance[i] >= distance[i - 2] - distance[i - 4]
            && distance[i - 2] > distance[i - 4]))
      return true
  }
  return false
}

/**
 * 归纳法（归纳路径不交叉时的状态）
 * @desc 时间复杂度 O(N)  空间复杂度 O(1)
 * @param distance
 * @returns
 */
export function isSelfCrossing2(distance: number[]): boolean {
  const n: number = distance.length

  // 处理第 1 种情况 外卷
  let i = 0
  while (i < n && (i < 2 || distance[i] > distance[i - 2]))
    ++i

  if (i === n)
    return false

  // 处理第 j 次移动的情况
  if ((i === 3 && distance[i] === distance[i - 2])
        || (i >= 4 && distance[i] >= distance[i - 2] - distance[i - 4]))
    distance[i - 1] -= distance[i - 3]

  ++i

  // 处理第 2 种情况 内卷
  while (i < n && distance[i] < distance[i - 2])
    ++i

  return i !== n
}
