import { levelOrderBottom } from './index';
import { TreeNode, createTreeNode } from '~/utils/treeNode';

describe('二叉树的层序遍历 II', () => {
  testCase(levelOrderBottom);
});

function testCase(fn: (root: TreeNode | null) => number[][]) {
  it('示例一', () => {
    const root = createTreeNode([3, 9, 20, null, null, 15, 7]);
    const expected = [[15, 7], [9, 20], [3]];
    expect(fn(root)).toStrictEqual(expected);
  });

  it('示例二', () => {
    const root = createTreeNode([1]);
    const expected = [[1]];
    expect(fn(root)).toStrictEqual(expected);
  });

  it('示例三', () => {
    const root = createTreeNode([]);
    const expected: number[][] = [];
    expect(fn(root)).toStrictEqual(expected);
  });

  it('示例四', () => {
    const root = createTreeNode([1, 2, 3, 4, null, null, 5]);
    const expected = [[4, 5], [2, 3], [1]];
    expect(fn(root)).toStrictEqual(expected);
  });
}
