import { TreeNode } from '~/utils/treeNode'

/**
 * 队列
 */
export class CBTInserter {
  private candidate: TreeNode[] = []

  /**
   * @desc 时间复杂度 O(N)  空间复杂度 O(N+Q)
   * @param root
   * @returns
   */
  constructor(private root: TreeNode | null) {
    if (!root) return

    const queue = [root]

    while (queue.length) {
      const node = queue.shift()!
      if (node.left) queue.push(node.left)
      if (node.right) queue.push(node.right)
      if (!(node.left && node.right)) this.candidate.push(node)
    }
  }

  /**
   * @desc 时间复杂度 O(1)
   */
  insert(val: number): number {
    const child = new TreeNode(val)
    const node = this.candidate[0]
    const ret = node.val

    if (!node.left) {
      node.left = child
    }
    else {
      node.right = child
      this.candidate.shift()
    }
    this.candidate.push(child)
    return ret
  }

  /**
 * @desc 时间复杂度 O(1)
 */
  get_root(): TreeNode | null {
    return this.root
  }
}

/**
 * 二进制
 */
export class CBTInserter2 {
  private cnt = 0

  /**
   * @desc 时间复杂度 O(N)  空间复杂度 O(N)
   * @param root
   * @returns
   */
  constructor(private root: TreeNode | null) {
    if (!root) return

    const queue = [root]

    while (queue.length) {
      this.cnt++
      const node = queue.shift()!
      if (node.left) queue.push(node.left)
      if (node.right) queue.push(node.right)
    }
  }

  /**
     * @desc 时间复杂度 O(1)
     */
  insert(val: number): number {
    this.cnt++
    const child = new TreeNode(val)
    let node: TreeNode = this.root as TreeNode
    const highbit = this.cnt.toString(2).length - 1
    for (let i = highbit - 1; i >= 1; i--) {
      if ((this.cnt & (1 << i)) !== 0)
        node = node.right!
      else
        node = node.left!
    }

    if ((this.cnt & 1) !== 0)
      node.right = child
    else
      node.left = child

    return node.val
  }

  /**
   * @desc 时间复杂度 O(1)
   */
  get_root(): TreeNode | null {
    return this.root
  }
}
