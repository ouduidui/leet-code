/**
 * 贪心算法
 * @desc 时间复杂度 O(NlogN + NM)  空间复杂度 O(NM)
 * @param intervals
 * @returns
 */
export function intersectionSizeTwo(intervals: number[][]): number {
  const len = intervals.length
  let res = 0
  const m = 2

  intervals.sort((a, b) => {
    if (a[0] === b[0]) return b[1] - a[1]
    return a[0] - b[0]
  })
  const temp = new Array(len).fill([]).map(() => [])

  for (let i = len - 1; i >= 0; i--) {
    for (let j = intervals[i][0], k = temp[i].length; k < m; j++, k++) {
      res++
      helper(intervals, temp, i - 1, j)
    }
  }

  return res

  function helper(internals: number[][], temp: number[][], pos: number, num: number) {
    for (let i = pos; i >= 0; i--) {
      if (internals[i][1] < num) break
      temp[i].push(num)
    }
  }
}
