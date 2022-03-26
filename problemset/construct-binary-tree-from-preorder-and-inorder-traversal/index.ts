import { TreeNode } from '~/utils/treeNode'

/**
 * 递归
 * @desc 时间复杂度 O(N)  空间复杂度 O(N)
 * @param preorder {number[]}
 * @param inorder {number[]}
 */
export function buildTree(
  preorder: number[],
  inorder: number[],
): TreeNode | null {
  const len = preorder.length
  // 构造哈希表，可以快速定位到根节点
  const indexHash = new Map<number, number>()
  for (let i = 0; i < len; i++)
    indexHash.set(inorder[i], i)

  return _buildTree(0, len - 1, 0, len - 1)

  /**
   * 构建二叉树
   * @param preorderLeft {number}
   * @param preorderRight {number}
   * @param inorderLeft {number}
   * @param inorderRight {number}
   */
  function _buildTree(
    preorderLeft: number,
    preorderRight: number,
    inorderLeft: number,
    inorderRight: number,
  ): TreeNode | null {
    if (preorderLeft > preorderRight)
      return null

    // 先序遍历中的第一个节点就是根节点
    const preorderRoot = preorderLeft
    // 在中序遍历中定位根节点
    const inorderRoot = indexHash.get(preorder[preorderRoot])!

    // 创建根节点
    const root = new TreeNode(preorder[preorderRoot])
    // 得到左子树的节点数目
    const leftSubtreeSize = inorderRoot - inorderLeft
    // 递归构造左子树
    // 先序遍历中「从 左边界+1 开始的 size_left_subtree」个元素就对应了中序遍历中「从 左边界 开始到 根节点定位-1」的元素
    root.left = _buildTree(
      preorderLeft + 1,
      preorderLeft + leftSubtreeSize,
      inorderLeft,
      inorderRoot - 1,
    )
    // 递归构造右子树
    // 先序遍历中「从 左边界+1+左子树节点数目 开始到 右边界」的元素就对应了中序遍历中「从 根节点定位+1 到 右边界」的元素
    root.right = _buildTree(
      preorderLeft + leftSubtreeSize + 1,
      preorderRight,
      inorderRoot + 1,
      inorderRight,
    )
    return root
  }
}

/**
 * 迭代
 * @desc 时间复杂度 O(N)  空间复杂度 O(N)
 * @param preorder {number[]}
 * @param inorder {number[]}
 */
export function buildTree2(
  preorder: number[],
  inorder: number[],
): TreeNode | null {
  if (preorder.length === 0) return null

  // 创建根节点
  const root = new TreeNode(preorder[0])
  const stack: TreeNode[] = [root]
  let inorderIndex = 0

  // 遍历前序节点
  for (let i = 1; i < preorder.length; i++) {
    // 获取前序节点的值
    const preorderVal = preorder[i]
    // 获取栈顶节点（不弹出）
    let node = stack[stack.length - 1]
    // 如果当前中序值跟栈顶节点的值不匹配，则代表是该栈顶节点的左子节点
    if (node.val !== inorder[inorderIndex]) {
      node.left = new TreeNode(preorderVal)
      // 将左节点入栈
      stack.push(node.left)
    }
    // 如果当前中序值跟栈顶节点的值相等，则弹出并更新中序下标，找到根节点
    else {
      while (
        stack.length !== 0
        && stack[stack.length - 1].val === inorder[inorderIndex]
      ) {
        node = stack.pop()!
        inorderIndex++
      }
      node.right = new TreeNode(preorderVal)
      stack.push(node.right)
    }
  }

  return root
}
