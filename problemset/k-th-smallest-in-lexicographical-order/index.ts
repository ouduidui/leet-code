/**
 * 字典树思想
 * @desc 时间复杂度 O(log²N)  空间复杂度 O(1)
 * @param n
 * @param k
 * @returns
 */
export function findKthNumber(n: number, k: number): number {
  let curr = 1
  k--

  while (k > 0) {
    // 获取当前节点下面的子树数量
    const steps = getSteps(curr, n)
    // 如果steps小于k的话，则跳到下一个兄弟节点
    if (steps <= k) {
      k -= steps
      curr++
    }
    // 如果steps大于k的话，则答案就在该节点下，则开始递归查找
    else {
      curr *= 10
      k--
    }
  }

  return curr

  /**
   * 找到以curr为节点下的子树数量
   * @param curr
   * @param n
   * @returns
   */
  function getSteps(curr: number, n: number): number {
    let steps = 0
    // 该层子树的第一个节点
    let first = curr
    // 该层子树的最后一个节点
    let last = curr
    while (first <= n) {
      steps += Math.min(last, n) - first + 1
      first = first * 10
      last = last * 10 + 9
    }

    return steps
  }
}
