import { maxDepth, maxDepth2 } from '.';
import { TreeNode, createTreeNode } from '~/utils/treeNode';
// need refactor
import { describe, it, expect } from 'vitest';
describe('二叉树的最大深度', () => {
  describe('深度优先遍历', function () {
    testCase(maxDepth);
  });

  describe('广度优先遍历', function () {
    testCase(maxDepth2);
  });
});

function testCase(fn: (root: TreeNode | null) => number) {
  it('示例', () => {
    const root = createTreeNode([3, 9, 20, null, null, 15, 7]);
    const expected = 3;
    expect(fn(root)).toBe(expected);
  });
}
