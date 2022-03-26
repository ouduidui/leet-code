import { TreeNode, createTreeNode } from '~/utils/treeNode';
import { rightSideView } from '.';
import { describe, it, expect } from 'vitest';

describe('二叉树的右视图', () => {
  testCase(rightSideView);
});

function testCase(fn: (root: TreeNode | null) => number[]) {
  it.each([
    [
      [1, 2, 3, null, 5, null, 4],
      [1, 3, 4]
    ],
    [
      [1, null, 3],
      [1, 3]
    ],
    [[], []],
    [
      [1, 2],
      [1, 2]
    ],
    [
      [1, 2, 3, 4],
      [1, 3, 4]
    ]
  ])('示例%#', (root, expected) => {
    expect(fn(createTreeNode(root))).toStrictEqual(expected);
  });
}
