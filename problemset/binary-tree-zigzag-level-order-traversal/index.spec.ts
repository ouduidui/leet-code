import { TreeNode, createTreeNode } from '~/utils/treeNode';
import { zigzagLevelOrder } from '.';
import { describe, it, expect } from 'vitest';

describe('二叉树的锯齿形层序遍历', () => {
  testCase(zigzagLevelOrder);
});

function testCase(fn: (root: TreeNode | null) => number[][]) {
  it.each([
    [
      [3, 9, 20, null, null, 15, 7],
      [[3], [20, 9], [15, 7]]
    ],
    [[1], [[1]]],
    [[], []]
  ])('示例%#', (root, expected) => {
    expect(fn(createTreeNode(root))).toStrictEqual(expected);
  });
}
