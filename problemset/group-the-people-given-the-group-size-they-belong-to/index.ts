/**
 * 哈希表
 * @desc 时间复杂度 O(N)  空间复杂度 O(N)
 * @param groupSizes
 * @returns
 */
export function groupThePeople(groupSizes: number[]): number[][] {
  const groups = new Map<number, number[]>()
  const n = groupSizes.length
  for (let i = 0; i < n; i++) {
    const size = groupSizes[i]
    if (!groups.has(size))
      groups.set(size, [])

    groups.get(size)!.push(i)
  }
  const groupList: number[][] = []
  for (const [size, people] of groups.entries()) {
    const groupCount = (people.length / size) >> 0
    for (let i = 0; i < groupCount; i++) {
      const group = []
      const start = i * size
      for (let j = 0; j < size; j++)
        group.push(people[start + j])

      groupList.push(group)
    }
  }
  return groupList
}
