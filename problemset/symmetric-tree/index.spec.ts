import { isSymmetric, isSymmetric2 } from './index';
import { TreeNode, createTreeNode } from '../../utils/treeNode';

describe('对称二叉树', () => {
  describe('递归', function () {
    testCase(isSymmetric);
  });

  describe('迭代', function () {
    testCase(isSymmetric2);
  });
});

function testCase(fn: (root: TreeNode | null) => boolean) {
  it('示例一', () => {
    const root = createTreeNode([1, 2, 2, 3, 4, 4, 3]);
    const expected = true;
    expect(fn(root)).toBe(expected);
  });

  it('示例二', () => {
    const root = createTreeNode([1, 2, 2, null, 3, null, 3]);
    const expected = false;
    expect(fn(root)).toBe(expected);
  });
}
