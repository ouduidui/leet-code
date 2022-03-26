import { maxPathSum } from '.';
import { TreeNode, createTreeNode } from '~/utils/treeNode';
import { describe, it, expect } from 'vitest';

describe('二叉树中的最大路径和', () => {
  testCase(maxPathSum);
});

function testCase(fn: (root: TreeNode | null) => number) {
  it.each([
    [[1, 2, 3], 6],
    [[-10, 9, 20, null, null, 15, 7], 42],
    [[-3], -3]
  ])('示例%#', (root, expected) => {
    expect(fn(createTreeNode(root))).toBe(expected);
  });
}
