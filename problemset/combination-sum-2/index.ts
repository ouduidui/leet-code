/**
 * 回溯
 * @desc 时间复杂度 O(2^n * n)    空间复杂度 O(n)
 * @param candidates
 * @param target
 */
export function combinationSum2(
  candidates: number[],
  target: number,
): number[][] {
  const ans: number[][] = []
  candidates.sort((a, b) => a - b)
  backTracking(0, [], 0)

  return ans

  function backTracking(sum: number, combine: number[], startIdx: number) {
    if (sum > target) return
    if (sum === target) return ans.push([...combine])

    for (let i: number = startIdx; i < candidates.length; i++) {
      // 避免重复操作
      if (i !== startIdx && candidates[i - 1] === candidates[i]) continue

      combine.push(candidates[i])
      backTracking(sum + candidates[i], combine, i + 1)
      combine.pop()
    }
  }
}
