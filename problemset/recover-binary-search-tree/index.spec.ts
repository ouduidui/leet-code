import { recoverTree, recoverTree2, recoverTree3 } from './index';
import { TreeNode, createTreeNode } from '~/utils/treeNode';

describe('恢复二叉搜索树', () => {
  describe('显式中序遍历', () => {
    testCase(recoverTree);
  });

  describe('隐式中序遍历', () => {
    testCase(recoverTree2);
  });

  describe('Morris 中序遍历', () => {
    testCase(recoverTree3);
  });
});

function testCase(fn: (root: TreeNode | null) => void) {
  it('示例一', () => {
    const root = createTreeNode([1, 3, null, null, 2]);
    const expected = createTreeNode([3, 1, null, null, 2]);
    fn(root);

    expect(root).toStrictEqual(expected);
  });

  it('示例二', () => {
    const root = createTreeNode([3, 1, 4, null, null, 2]);
    const expected = createTreeNode([2, 1, 4, null, null, 3]);
    fn(root);

    expect(root).toStrictEqual(expected);
  });
}
