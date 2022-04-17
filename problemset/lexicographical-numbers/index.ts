/**
 * 深度优先搜索
 * @desc 时间复杂度 O(N)  空间复杂度 O(1)
 * @param n
 * @returns
 */
export function lexicalOrder(n: number): number[] {
  const result: number[] = []

  let num = 1
  for (let i = 0; i < n; i++) {
    result.push(num)

    if (num * 10 <= n) {
      num *= 10
    }
    else {
      while (num % 10 === 9 || num === n)
        num = (num / 10) >> 0

      num++
    }
  }

  return result
}
