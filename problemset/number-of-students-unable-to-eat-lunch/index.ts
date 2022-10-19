/**
 * 模拟
 * @desc 时间复杂度 O(N)  空间复杂度 O(1)
 * @param students
 * @param sandwiches
 * @returns
 */
export function countStudents(students: number[], sandwiches: number[]): number {
  let s1 = students.reduce((a, b) => a + b, 0)
  let s0 = students.length - s1
  for (let i = 0; i < sandwiches.length; i++) {
    if (sandwiches[i] === 0 && s0 > 0) s0--
    else if (sandwiches[i] === 1 && s1 > 0) s1--
    else break
  }
  return s0 + s1
}
