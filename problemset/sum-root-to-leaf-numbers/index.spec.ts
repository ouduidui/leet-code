import { TreeNode, createTreeNode } from '../../utils/treeNode';
import { sumNumbers, sumNumbers2 } from './index';

describe('求根节点到叶节点数字之和', () => {
  describe('深度优先搜索', () => {
    testCase(sumNumbers);
  });

  describe('广度优先搜索', () => {
    testCase(sumNumbers2);
  });
});

function testCase(fn: (root: TreeNode | null) => number) {
  it('示例一', () => {
    const root = createTreeNode([1, 2, 3]);
    const expected = 25;
    expect(fn(root)).toBe(expected);
  });

  it('示例二', () => {
    const root = createTreeNode([4, 9, 0, 5, 1]);
    const expected = 1026;
    expect(fn(root)).toBe(expected);
  });
}
