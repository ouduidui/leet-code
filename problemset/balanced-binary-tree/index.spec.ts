import { isBalanced } from '.';
import { TreeNode, createTreeNode } from '~/utils/treeNode';
import { describe, it, expect } from 'vitest';

describe('平衡二叉树', () => {
  testCase(isBalanced);
});

function testCase(fn: (root: TreeNode | null) => boolean) {
  it.each([
    [[3, 9, 20, null, null, 15, 7], true],
    [[1, 2, 2, 3, 3, null, null, 4, 4], false],
    [[], true]
  ])('示例%#', (root, expected) => {
    expect(fn(createTreeNode(root))).toBe(expected);
  });
}
