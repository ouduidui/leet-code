import { TreeNode, createTreeNode } from '~/utils/treeNode';
import { tree2str, tree2str2 } from '.';

describe('根据二叉树创建字符串', () => {
  describe('递归', () => {
    testCase(tree2str);
  });

  describe('迭代', () => {
    testCase(tree2str2);
  });
});

function testCase(fn: (root: TreeNode | null) => string) {
  it('示例一', () => {
    const root = createTreeNode([1, 2, 3, 4]);
    const expected = '1(2(4))(3)';
    expect(fn(root)).toBe(expected);
  });

  it('示例一', () => {
    const root = createTreeNode([1, 2, 3, null, 4]);
    const expected = '1(2()(4))(3)';
    expect(fn(root)).toBe(expected);
  });
}
