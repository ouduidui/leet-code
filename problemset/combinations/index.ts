/**
 * 回溯
 * @desc 时间复杂度 O(N!)  空间复杂度 O(n+k)
 * @param n {number}
 * @param k {number}
 * @return {number[][]}
 */
export function combine(n: number, k: number): number[][] {
  const ans: number[][] = []
  backtrack()
  return ans

  function backtrack(temp: number[] = [], num = 1) {
    if (temp.length + (n - num + 1) < k)
      return

    if (temp.length === k)
      return ans.push([...temp])

    for (let i = num; i <= n; i++) {
      temp.push(i)
      backtrack(temp, i + 1)
      temp.pop()
    }
  }
}
