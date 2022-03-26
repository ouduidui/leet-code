/**
 * 递归
 * @desc 时间复杂度 O(N)  空间复杂度 O(N)
 * @param parents
 */
export function countHighestScoreNodes(parents: number[]): number {
  const len = parents.length
  const children: number[][] = new Array(len)
    .fill([])
    .map(() => new Array<number>())

  // 整理每个节点的直接孩子节点
  for (let i = 0; i < len; i++) {
    const p = parents[i]
    p !== -1 && children[p].push(i)
  }

  let maxScope = 0
  let count = 0

  // 从根节点开始递归遍历
  dfs(0)

  return count

  /**
   * 获取node节点的节点数
   * @param node
   */
  function dfs(node: number): number {
    // 初始化分数
    // score  = leftChildCount * rightChildCount * (len - leftChildCount rightChildCount - 1)
    let score = 1
    // 初始化节点数
    let sum = 1

    // 遍历当前节点的左右子节点
    for (const c of children[node]) {
      // 获取左右子节点数
      const t = dfs(c)
      // 更新分数和数量
      score *= t
      sum += t
    }

    // 如果不是根节点，代表node节点存在父节点
    // 因此分数应该乘上剩余节点
    if (node !== 0) score *= len - sum

    if (score === maxScope) {
      // 如果当前分数跟最大分数一致，则增加count
      count++
    }
    else if (score > maxScope) {
      // 如果分数超过之前的最大分数，则重置
      maxScope = score
      count = 1
    }

    // 返回节点数
    return sum
  }
}
