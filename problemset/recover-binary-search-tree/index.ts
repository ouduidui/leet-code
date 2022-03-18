import { TreeNode } from '~/utils/treeNode';

/**
 * 显式中序遍历
 * @desc 时间复杂度 O(N)  空间复杂度O(N)
 * @param root {TreeNode | null}
 */
export function recoverTree(root: TreeNode | null): void {
  const nums: number[] = [];
  // 中序遍历依次获取每个值，存入nums
  inorder(root, nums);
  // 超出两个非递增位置
  const [first, second] = findTwoSwapped(nums) as [number, number];
  // 调换位置
  recover(root, 2, first, second);

  /**
   * 中序遍历
   * @param root
   * @param nums
   */
  function inorder(root: TreeNode | null, nums: number[]): void {
    if (root === null) return;
    inorder(root.left, nums);
    nums.push(root.val);
    inorder(root.right, nums);
  }

  /**
   * 找到nums数组中两个非递增的位置
   * @param nums
   */
  function findTwoSwapped(nums: number[]): [number, number] {
    const n = nums.length;
    let index1 = -1;
    let index2 = -1;
    for (let i = 0; i < n - 1; i++) {
      if (nums[i + 1] < nums[i]) {
        index2 = i + 1;
        if (index1 === -1) index1 = i;
        else break;
      }
    }
    return [nums[index1], nums[index2]];
  }

  /**
   * 调换val1和val2的值
   * @param root
   * @param count
   * @param val1
   * @param val2
   */
  function recover(
    root: TreeNode | null,
    count: number,
    val1: number,
    val2: number
  ) {
    if (root === null) return;

    if (root.val === val1 || root.val === val2) {
      root.val = root.val === val1 ? val2 : val1;
      if (--count === 0) {
        return;
      }
    }
    recover(root.left, count, val1, val2);
    recover(root.right, count, val1, val2);
  }
}

/**
 * 隐式中序遍历
 * @desc 时间复杂度 O(N)  空间复杂度O(H) 二叉树的高度
 * @param root {TreeNode | null}
 */
export function recoverTree2(root: TreeNode | null): void {
  const stack: TreeNode[] = [];
  // 存储两个非递增的节点
  let x: TreeNode | null = null;
  let y: TreeNode | null = null;
  // 存储上一个节点
  let pre: TreeNode | null = null;

  while (stack.length || root !== null) {
    while (root !== null) {
      stack.push(root);
      root = root.left;
    }
    root = stack.pop()!;
    // 寻找两个非递增的节点
    if (pre !== null && root.val < pre.val) {
      y = root;
      if (x === null) x = pre;
      else break;
    }

    pre = root;
    root = root.right;
  }

  // 调换位置
  if (x && y) {
    const temp = x.val;
    x.val = y.val;
    y.val = temp;
  }
}

/**
 * Morris 中序遍历
 * @desc 时间复杂度 O(N)  空间复杂度O(1)
 * @param root {TreeNode | null}
 */
export function recoverTree3(root: TreeNode | null): void {
  let predecessor: TreeNode | null = null;
  // 存储两个非递增的节点
  let x: TreeNode | null = null;
  let y: TreeNode | null = null;
  // 存储上一个节点
  let pre: TreeNode | null = null;

  while (root !== null) {
    if (root.left !== null) {
      // predecessor 节点就是当前 root 节点向左走一步，然后一直向右走至无法走为止
      predecessor = root.left;
      while (predecessor.right !== null && predecessor.right !== root) {
        predecessor = predecessor.right;
      }

      // 让 predecessor 的右指针指向 root，继续遍历左子树
      if (predecessor.right === null) {
        predecessor.right = root;
        root = root.left;
      }
      // 说明左子树已经访问完了，我们需要断开链接
      else {
        if (pre !== null && root.val < pre.val) {
          y = root;
          if (x === null) {
            x = pre;
          }
        }
        pre = root;

        predecessor.right = null;
        root = root.right;
      }
    }
    // 如果没有左孩子，则直接访问右孩子
    else {
      if (pre !== null && root.val < pre.val) {
        y = root;
        if (x === null) {
          x = pre;
        }
      }
      pre = root;
      root = root.right;
    }
  }

  // 调换位置
  if (x && y) {
    const temp = x.val;
    x.val = y.val;
    y.val = temp;
  }
}
