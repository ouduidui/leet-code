// Definition for a binary tree node.
export class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

type TreeNodeArrayItem = number | null;

/**
 * 数组转树
 * @param array
 */
export function createTreeNode(array: TreeNodeArrayItem[]): TreeNode | null {
  if (!array.length || array[0] === null) return null;
  const rootTree = new TreeNode(array.shift()!);
  const stack: TreeNode[] = [rootTree];

  while (array.length) {
    const tree = stack.pop()!;
    const num1 = array.shift();
    if (num1) {
      tree.left = new TreeNode(num1);
      stack.unshift(tree.left);
    }
    const num2 = array.shift();
    if (num2) {
      tree.right = new TreeNode(num2);
      stack.unshift(tree.right);
    }
  }

  return rootTree;
}
