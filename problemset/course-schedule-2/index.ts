/**
 * 广度优先搜索
 * @desc 时间复杂度 O(M+N)  空间复杂度 O(M+N)
 * @param numCourses
 * @param prerequisites
 * @returns
 */
export function findOrder(numCourses: number, prerequisites: number[][]): number[] {
  if (prerequisites.length === 0)
    return new Array<number>(numCourses).fill(0).map((_, i) => i)

  const map = new Array(numCourses).fill(0).map(() => [] as number[])
  const mapCount = new Array(numCourses).fill(0)
  for (const v of prerequisites) {
    map[v[1]].push(v[0])
    mapCount[v[0]]++
  }

  const result: number[] = []
  const queue: number[] = []

  for (let i = 0; i < numCourses; i++)
    if (mapCount[i] === 0) queue.unshift(i)

  while (queue.length) {
    const course = queue.pop()!
    result.push(course)

    for (const i of map[course]) {
      mapCount[i]--
      if (mapCount[i] === 0) queue.unshift(i)
    }
  }

  return result.length === numCourses ? result : []
}

/**
 * 深度优先搜索
 * @desc 时间复杂度 O(M+N)  空间复杂度 O(M+N)
 * @param numCourses
 * @param prerequisites
 * @returns
 */
export function findOrder2(numCourses: number, prerequisites: number[][]): number[] {
  if (prerequisites.length === 0)
    return new Array<number>(numCourses).fill(0).map((_, i) => i)

  const map = new Array(numCourses).fill(0).map(() => [] as number[])
  for (const v of prerequisites)
    map[v[1]].push(v[0])

  const visited = new Array<0 | 1 | 2>(numCourses).fill(0)
  let isValid = true
  const result: number[] = []

  for (let i = 0; i < numCourses && isValid; i++)
    dfs(i)

  return result.length === numCourses && isValid ? result : []

  function dfs(course: number) {
    if (visited[course] === 0) {
      visited[course] = 1
      for (const c of map[course])
        dfs(c)
      visited[course] = 2
      result.unshift (course)
    }
    else if (visited[course] === 1) {
      isValid = false
    }
  }
}
