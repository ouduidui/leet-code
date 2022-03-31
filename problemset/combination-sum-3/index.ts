/**
 * 回溯
 * @desc 时间复杂度 O(NlogN)  空间复杂度 O(N)
 * @param k
 * @param n
 * @returns
 */
export function combinationSum3(k: number, n: number): number[][] {
  const result: number[][] = []
  backtrack(1, k, n, [], 0)
  return result

  function backtrack(startNums: number, k: number, n: number, temp: number[], sum: number) {
    if (temp.length === k) {
      if (sum === n)
        result.push(temp)
      return
    }

    for (let i = startNums; i < 10; i++)
      backtrack(i + 1, k, n, [...temp, i], sum + i)
  }
}
