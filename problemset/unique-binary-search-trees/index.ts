import { TreeNode } from '~/utils/treeNode'

/**
 * 回溯
 * @desc 时间复杂度 O(4^N / √N)   空间复杂度 O(4^N / √N)
 * @param n {number}
 * @return {number}
 */
export function numTrees(n: number): number {
  if (n === 0 || n === 1) return n
  return dfs(1, n).length

  function dfs(start: number, end: number): Array<TreeNode | null> {
    const allTrees: Array<TreeNode | null> = []

    if (start > end) return [null]

    for (let i = start; i <= end; i++) {
      const leftTrees = dfs(start, i - 1)
      const rightTrees = dfs(i + 1, end)

      for (const left of leftTrees) {
        for (const right of rightTrees) {
          const tree = new TreeNode(i)
          tree.left = left
          tree.right = right
          allTrees.push(tree)
        }
      }
    }

    return allTrees
  }
}

/**
 * 动态规划
 * @desc 时间复杂度 O(N^2)   空间复杂度 O(N)
 * @param n {number}
 * @return {number}
 */
export function numTrees2(n: number): number {
  const g = new Array(n + 1).fill(0)
  g[0] = g[1] = 1

  for (let i = 2; i <= n; i++) {
    for (let j = 1; j <= i; j++)
      g[i] += g[j - 1] * g[i - j]
  }

  return g[n]
}

/**
 * 数学
 * @desc 时间复杂度 O(N)   空间复杂度 O(1)
 * @param n {number}
 * @return {number}
 */
export function numTrees3(n: number): number {
  let c = 1
  for (let i = 0; i < n; i++)
    c = (c * 2 * (2 * i + 1)) / (i + 2)

  return c
}
