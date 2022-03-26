import { createTreeNode, TreeNode } from '~/utils/treeNode';
import {
  postorderTraversal,
  postorderTraversal2,
  postorderTraversal3
} from '.';
import { describe, it, expect } from 'vitest';

describe('二叉树的后序遍历', () => {
  describe('递归', () => {
    testCase(postorderTraversal);
  });

  describe('迭代', () => {
    testCase(postorderTraversal2);
  });

  describe('Morris 遍历', () => {
    testCase(postorderTraversal3);
  });
});

function testCase(fn: (root: TreeNode | null) => number[]) {
  it.each([
    [
      [1, null, 2, 3],
      [3, 2, 1]
    ],
    [[], []],
    [[1], [1]]
  ])('示例%#', (root, expected) => {
    expect(fn(createTreeNode(root))).toStrictEqual(expected);
  });
}
