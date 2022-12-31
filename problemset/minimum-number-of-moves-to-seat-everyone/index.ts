/**
 * 排序
 * @desc 时间复杂度 O(nlogn) 空间复杂度 O(logn)
 * @param seats
 * @param students
 * @returns
 */
export function minMovesToSeat(seats: number[], students: number[]): number {
  seats.sort((a, b) => a - b)
  students.sort((a, b) => a - b)
  let res = 0
  for (let i = 0; i < seats.length; i++)
    res += Math.abs(seats[i] - students[i])

  return res
}
