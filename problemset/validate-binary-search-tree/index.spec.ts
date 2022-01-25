import { isValidBST, isValidBST2 } from './index';
import { TreeNode, createTreeNode } from '../../utils/treeNode';

describe('验证二叉搜索树', () => {
  describe('递归', () => {
    testCase(isValidBST);
  });

  describe('中序遍历', () => {
    testCase(isValidBST2);
  });
});

function testCase(fn: (root: TreeNode | null) => boolean) {
  it('示例一', () => {
    const root = createTreeNode([2, 1, 3]);
    const expected = true;
    expect(fn(root)).toBe(expected);
  });

  it('示例二', () => {
    const root = createTreeNode([5, 1, 4, null, null, 3, 6]);
    const expected = false;
    expect(fn(root)).toBe(expected);
  });

  it('示例三', () => {
    const root = createTreeNode([2, 2, 2]);
    const expected = false;
    expect(fn(root)).toBe(expected);
  });

  it('示例四', () => {
    const root = createTreeNode([5, 4, 6, null, null, 3, 7]);
    const expected = false;
    expect(fn(root)).toBe(expected);
  });
}
