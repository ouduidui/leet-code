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

export function createTreeNode(array: TreeNodeArrayItem[]): TreeNode | null {
  if (!array.length || array[0] === null) return null;
  const stack: TreeNode[] = [new TreeNode(array[0])];

  let i = 1;
  while (i < array.length) {
    const parent = stack[stack.length - 1];
    if (array[i] === null) {
      if (parent.left !== null) {
        stack.pop();
      } else {
        i++;
        stack.push((parent.right = new TreeNode(array[i]!)));
      }
    } else if (parent.left === null) {
      stack.push((parent.left = new TreeNode(array[i]!)));
    } else if (parent.right === null) {
      stack.push((parent.right = new TreeNode(array[i]!)));
    }
    i++;
  }

  return stack[0];
}
