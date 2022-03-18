import { isBalanced } from './index';
import { TreeNode, createTreeNode } from '~/utils/treeNode';

describe('平衡二叉树', () => {
  testCase(isBalanced);
});

function testCase(fn: (root: TreeNode | null) => boolean) {
  it('示例一', () => {
    const root = createTreeNode([3, 9, 20, null, null, 15, 7]);
    const expected = true;
    expect(fn(root)).toBe(expected);
  });

  it('示例二', () => {
    const root = createTreeNode([1, 2, 2, 3, 3, null, null, 4, 4]);
    const expected = false;
    expect(fn(root)).toBe(expected);
  });

  it('示例三', () => {
    const root = createTreeNode([]);
    const expected = true;
    expect(fn(root)).toBe(expected);
  });
}
