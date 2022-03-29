/**
 * 滑动窗口
 * @desc 时间复杂度 O(N)  空间复杂度 O(1)
 * @param answerKey
 * @param k
 * @returns
 */
export function maxConsecutiveAnswers(answerKey: string, k: number): number {
  return Math.max(
    maxConsecutiveChar(answerKey, k, 'T'),
    maxConsecutiveChar(answerKey, k, 'F'),
  )

  function maxConsecutiveChar(answerKey: string, k: number, ch: 'T' | 'F'): number {
    const len = answerKey.length
    let ans = 0

    for (let left = 0, right = 0, sum = 0; right < len; right++) {
      // 如果 answerKey[right] 不是 ch 的时候，将其变成 ch ，便更新已经变化的数量
      sum += answerKey.charAt(right) !== ch ? 1 : 0

      // 当变化的个数超过k值，移动左指针，缩小变化的个数
      while (sum > k)
        sum -= answerKey[left++] !== ch ? 1 : 0

      // 更新答案
      ans = Math.max(ans, right - left + 1)
    }

    return ans
  }
}
