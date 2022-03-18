import { TreeNode, createTreeNode } from '~/utils/treeNode';
import { minDepth, minDepth2 } from './index';

describe('二叉树的最小深度', () => {
  describe('深度优先搜索', function () {
    testCase(minDepth);
  });
  describe('广度优先搜索', function () {
    testCase(minDepth2);
  });
});

function testCase(fn: (root: TreeNode | null) => number) {
  it('示例一', () => {
    const root = createTreeNode([3, 9, 20, null, null, 15, 7]);
    const expected = 2;
    expect(fn(root)).toBe(expected);
  });

  it('示例二', () => {
    const root = createTreeNode([2, null, 3, null, 4, null, 5, null, 6]);
    const expected = 5;
    expect(fn(root)).toBe(expected);
  });
}
