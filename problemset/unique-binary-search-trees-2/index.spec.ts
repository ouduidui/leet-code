import { generateTrees } from './index';
import { TreeNode, createTreeNode } from '../../utils/treeNode';

describe('不同的二叉搜索数 II', () => {
  testCase(generateTrees);
});

function testCase(fn: (n: number) => Array<TreeNode | null>) {
  it('示例一', () => {
    const n = 3;
    const expected = [
      createTreeNode([1, null, 2, null, 3]),
      createTreeNode([1, null, 3, 2]),
      createTreeNode([2, 1, null, null, 3]),
      createTreeNode([3, 1, null, 2]),
      createTreeNode([3, 2, 1])
    ];

    expect(fn(n)).toStrictEqual(expected);
  });

  it('示例二', () => {
    const n = 1;
    const expected = [createTreeNode([1])];

    expect(fn(n)).toStrictEqual(expected);
  });
}
