import { sortedArrayToBST } from './index';
import { TreeNode, createTreeNode } from '../../utils/treeNode';

describe('将有序数组转换为二叉搜索树', () => {
  testCase(sortedArrayToBST);
});

function testCase(fn: (nums: number[]) => TreeNode | null) {
  it('示例一', () => {
    const nums = [-10, -3, 0, 5, 9];
    const expected = createTreeNode([0, -10, 5, null, -3, null, 9]);

    expect(fn(nums)).toStrictEqual(expected);
  });

  it('示例二', () => {
    const nums = [1, 3];
    const expected = createTreeNode([1, null, 3]);

    expect(fn(nums)).toStrictEqual(expected);
  });
}
