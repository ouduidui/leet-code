import { TreeNode, createTreeNode } from '~/utils/treeNode';
import { tree2str, tree2str2 } from '.';
import { describe, it, expect } from 'vitest';

describe('根据二叉树创建字符串', () => {
  describe('递归', () => {
    testCase(tree2str);
  });

  describe('迭代', () => {
    testCase(tree2str2);
  });
});

function testCase(fn: (root: TreeNode | null) => string) {
  it.each([
    [[1, 2, 3, 4], '1(2(4))(3)'],
    [[1, 2, 3, null, 4], '1(2()(4))(3)']
  ])('示例%#', (root, expected) => {
    expect(fn(createTreeNode(root))).toBe(expected);
  });
}
