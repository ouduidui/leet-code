import { isSymmetric, isSymmetric2 } from '.';
import { TreeNode, createTreeNode } from '~/utils/treeNode';
import { describe, it, expect } from 'vitest';

describe('对称二叉树', () => {
  describe('递归', function () {
    testCase(isSymmetric);
  });

  describe('迭代', function () {
    testCase(isSymmetric2);
  });
});

function testCase(fn: (root: TreeNode | null) => boolean) {
  it.each([
    [[1, 2, 2, 3, 4, 4, 3], true],
    [[1, 2, 2, null, 3, null, 3], false]
  ])('示例%#', (root, expected) => {
    expect(fn(createTreeNode(root))).toBe(expected);
  });
}
