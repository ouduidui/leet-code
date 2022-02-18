import { maxPathSum } from './index';
import { TreeNode, createTreeNode } from '../../utils/treeNode';

describe('二叉树中的最大路径和', () => {
  testCase(maxPathSum);
});

function testCase(fn: (root: TreeNode | null) => number) {
  it('示例一', () => {
    const root = createTreeNode([1, 2, 3]);
    const expected = 6;
    expect(fn(root)).toBe(expected);
  });

  it('示例二', () => {
    const root = createTreeNode([-10, 9, 20, null, null, 15, 7]);
    const expected = 42;
    expect(fn(root)).toBe(expected);
  });

  it('示例三', () => {
    const root = createTreeNode([-3]);
    const expected = -3;
    expect(fn(root)).toBe(expected);
  });
}
