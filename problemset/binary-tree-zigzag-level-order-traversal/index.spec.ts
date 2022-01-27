import { TreeNode, createTreeNode } from '../../utils/treeNode';
import { zigzagLevelOrder } from './index';

describe('二叉树的锯齿形层序遍历', () => {
  testCase(zigzagLevelOrder);
});

function testCase(fn: (root: TreeNode | null) => number[][]) {
  it('示例一', () => {
    const root = createTreeNode([3, 9, 20, null, null, 15, 7]);
    const expected = [[3], [20, 9], [15, 7]];
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
}
