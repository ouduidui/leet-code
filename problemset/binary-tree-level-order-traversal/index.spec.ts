import { levelOrder } from '.';
import { TreeNode, createTreeNode } from '~/utils/treeNode';
import { describe, it, expect } from 'vitest';

describe('二叉树的层序遍历', () => {
  testCase(levelOrder);
});

function testCase(fn: (root: TreeNode | null) => number[][]) {
  it.each([
    [
      [3, 9, 20, null, null, 15, 7],
      [[3], [9, 20], [15, 7]]
    ],
    [[1], [[1]]],
    [[], []]
  ])('示例%#', (root, expected) => {
    expect(fn(createTreeNode(root))).toStrictEqual(expected);
  });
}
