import { sortedArrayToBST } from '.';
import { TreeNode, createTreeNode } from '~/utils/treeNode';
import { describe, it, expect } from 'vitest';

describe('将有序数组转换为二叉搜索树', () => {
  testCase(sortedArrayToBST);
});

function testCase(fn: (nums: number[]) => TreeNode | null) {
  it.each([
    [
      [-10, -3, 0, 5, 9],
      [0, -10, 5, null, -3, null, 9]
    ],
    [
      [1, 3],
      [1, null, 3]
    ]
  ])('示例%#', (nums, expected) => {
    expect(fn(nums)).toStrictEqual(createTreeNode(expected));
  });
}
