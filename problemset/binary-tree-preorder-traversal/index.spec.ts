import { TreeNode, createTreeNode } from '~/utils/treeNode';
import { preorderTraversal, preorderTraversal2, preorderTraversal3 } from '.';
import { describe, it, expect } from 'vitest';

describe('二叉树的前序遍历', () => {
  describe('递归', () => {
    testCase(preorderTraversal);
  });

  describe('迭代', () => {
    testCase(preorderTraversal2);
  });

  describe('Morris 遍历', () => {
    testCase(preorderTraversal3);
  });
});

function testCase(fn: (root: TreeNode | null) => number[]) {
  it.each([
    [
      [1, null, 2, 3],
      [1, 2, 3]
    ],
    [[], []],
    [[1], [1]]
  ])('示例%#', (root, expected) => {
    expect(fn(createTreeNode(root))).toStrictEqual(expected);
  });
}
