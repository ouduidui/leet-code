import type { TreeNode } from '~/utils/treeNode'

/**
 * 递归
 * @desc 时间复杂度 O(N)  空间复杂度 O(N)
 * @param root~
 * @returns
 */
export function tree2str(root: TreeNode | null): string {
  if (!root) return ''
  if (!root.left && !root.right) return `${root.val}`
  if (!root.right) return `${root.val}(${tree2str(root.left)})`
  return `${root.val}(${tree2str(root.left)})(${tree2str(root.right)})`
}

/**
 * 迭代
 * @desc 时间复杂度 O(N)  空间复杂度 O(N)
 * @param root
 * @returns
 */
export function tree2str2(root: TreeNode | null): string {
  if (!root) return ''

  let result = ''
  const stack = [root]
  const visited = new Set<TreeNode>()
  while (stack.length) {
    const node = stack[stack.length - 1]
    if (visited.has(node)) {
      if (node !== root) result += ')'
      stack.pop()
    }
    else {
      visited.add(node)
      if (node !== root) result += '('

      result += `${node.val}`
      if (!node.left && node.right) result += '()'
      node.right && stack.push(node.right)
      node.left && stack.push(node.left)
    }
  }

  return result
}
