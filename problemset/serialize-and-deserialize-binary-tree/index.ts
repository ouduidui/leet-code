import { TreeNode } from '~/utils/treeNode'

/**
 * 序列化
 * @desc 时间复杂度 O(N)  空间复杂度 O(N)
 * @param root
 * @returns
 */
export function serialize(root: TreeNode | null): string {
  return dfs(root)

  function dfs(node: TreeNode | null, str = ''): string {
    if (node === null) {
      str += 'Node,'
    }
    else {
      str += `${node.val}` + ','
      str = dfs(node.left, str)
      str = dfs(node.right, str)
    }
    return str
  }
}

/**
 * 反序列化
 * @desc 时间复杂度 O(N)  空间复杂度 O(N)
 * @param data
 * @returns
 */
export function deserialize(data: string): TreeNode | null {
  return dfs(data.split(','))

  function dfs(list: string[]): TreeNode | null {
    if (list[0] === 'Node') {
      list.shift()
      return null
    }

    return new TreeNode(Number(list.shift()!), dfs(list), dfs(list))
  }
}
