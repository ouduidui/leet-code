/**
 * 回溯
 * @desc 时间复杂度 O(S) S为所有可行解的长度之和   空间复杂度 O(target)
 * @param candidates
 * @param target
 */
export function combinationSum(
  candidates: number[],
  target: number,
): number[][] {
  const ans: number[][] = []
  for (let i = 0; i < candidates.length; i++)
    backTracking(i, [candidates[i]])

  return ans

  function backTracking(idx: number, solve: number[]) {
    if (getSum(solve) < target) {
      for (let i: number = idx; i < candidates.length; i++) {
        solve.push(candidates[i])
        backTracking(i, solve)
        solve.pop()
      }
    }
    else if (getSum(solve) === target) {
      ans.push([...solve])
    }
  }

  function getSum(arr: number[]): number {
    return arr.reduce((acc, cur) => acc + cur, 0)
  }
}

/**
 * 回溯 + 剪枝
 * @desc 时间复杂度 O(S) S为所有可行解的长度之和   空间复杂度 O(target)
 * @param candidates
 * @param target
 */
export function combinationSum2(
  candidates: number[],
  target: number,
): number[][] {
  const ans: number[][] = []
  backTracking(target, [], 0)
  return ans

  function backTracking(target: number, combine: number[], idx: number) {
    if (idx === candidates.length) return

    if (target === 0) {
      ans.push(combine)
      return
    }

    backTracking(target, combine, idx + 1)

    if (target - candidates[idx] >= 0) {
      backTracking(
        target - candidates[idx],
        [...combine, candidates[idx]],
        idx,
      )
    }
  }
}
