/**
 * 回溯
 * @desc 时间复杂度 O(M+NlogN)  空间复杂度 O(M+NlogN)
 * @param tickets
 * @returns
 */
export function findItinerary(tickets: string[][]): string[] {
  const res = ['JFK']
  const map = new Map<string, string[]>()

  // 建立映射
  for (const [from, to] of tickets) {
    const tos = map.get(from) || []
    tos.push(to)
    map.set(from, tos)
  }

  // 按照字母排序
  for (const cities of map.values())
    cities.sort()

  // 回溯
  backTrack('JFK', 0)
  return res

  /**
   * 回溯
   * @param city 当前访问的城市
   * @param used 已用掉的机票数
   * @returns
   */
  function backTrack(city: string, used: number) {
    // 用光了所有机票，路径找到了
    if (tickets.length === used) return true

    // 获取下一站能去的城市list
    const nextCities = map.get(city)
    // 还没用光机票，就没有下一站了，返回false
    if (!nextCities || nextCities.length === 0)
      return false

    // 设置出各种选项（递归分支）
    for (let i = 0; i < nextCities.length; i++) {
      const next = nextCities[i]
      nextCities.splice(i, 1)
      res.push(next)
      if (backTrack(next, used + 1)) { return true }
      else {
        nextCities.splice(i, 0, next)
        res.pop()
      }
    }
  }
}

/**
 * 欧拉路径
 * @desc 时间复杂度 O(M+NlogN)  空间复杂度 O(M+NlogN)
 * @param tickets
 * @returns
 */
export function findItinerary2(tickets: string[][]): string[] {
  const res: string[] = []
  const map = new Map<string, string[]>()

  // 建立映射
  for (const [from, to] of tickets) {
    const tos = map.get(from) || []
    tos.push(to)
    map.set(from, tos)
  }

  // 按照字母排序
  for (const cities of map.values())
    cities.sort()

  // 回溯
  backTrack('JFK')
  return res

  /**
   * @param city 当前访问的城市
   * @returns
   */
  function backTrack(city: string) {
    const nextCities = map.get(city)
    // eslint-disable-next-line no-unmodified-loop-condition
    while (nextCities && nextCities.length) {
      const next = nextCities.shift()!
      backTrack(next)
    }
    // 当前城市没有下一站，就把他加到res里，递归开始向上返回，选过的城市一个个推入res
    res.unshift(city)
  }
}
