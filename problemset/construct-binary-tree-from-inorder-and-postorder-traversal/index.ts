import { TreeNode } from '~/utils/treeNode'

/**
 * 递归
 * @desc 时间复杂度 O(N)  空间复杂度 O(N)
 * @param inorder {number[]}
 * @param postorder {number[]}
 * @return {TreeNode | null}
 */
export function buildTree(
  inorder: number[],
  postorder: number[],
): TreeNode | null {
  let postIndex = postorder.length - 1
  const inorderIndexMap = new Map<number, number>()
  inorder.forEach((item, index) => {
    inorderIndexMap.set(item, index)
  })

  return helper(0, inorder.length - 1)

  function helper(leftIndex: number, rightIndex: number): TreeNode | null {
    // 如果这里没有节点构造二叉树了，就结束
    if (leftIndex > rightIndex) return null

    // 选择 postIndex 位置的元素作为当前子树根节点
    const rootVal = postorder[postIndex]
    const root = new TreeNode(rootVal)

    postIndex--

    // 根据 root 所在位置分成左右两棵子树
    const index = inorderIndexMap.get(rootVal)!
    root.right = helper(index + 1, rightIndex)
    root.left = helper(leftIndex, index - 1)

    return root
  }
}

/**
 * 迭代
 * @desc 时间复杂度 O(N)  空间复杂度 O(N)
 * @param inorder {number[]}
 * @param postorder {number[]}
 * @return {TreeNode | null}
 */
export function buildTree2(
  inorder: number[],
  postorder: number[],
): TreeNode | null {
  if (postorder.length === 0) return null

  // 创建根节点
  const root = new TreeNode(postorder[postorder.length - 1])
  // 初始化栈
  const stack: TreeNode[] = [root]
  let inorderIndex = inorder.length - 1
  // 从后序序列倒数第二个开始遍历
  for (let i = postorder.length - 2; i >= 0; i--) {
    const postorderVal = postorder[i]
    let node = stack[stack.length - 1]
    if (node.val !== inorder[inorderIndex]) {
      node.right = new TreeNode(postorderVal)
      stack.push(node.right)
    }
    else {
      while (
        stack.length
        && stack[stack.length - 1].val === inorder[inorderIndex]
      ) {
        node = stack.pop()!
        inorderIndex--
      }
      node.left = new TreeNode(postorderVal)
      stack.push(node.left)
    }
  }
  return root
}
