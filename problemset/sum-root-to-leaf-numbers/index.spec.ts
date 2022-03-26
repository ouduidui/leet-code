import { TreeNode, createTreeNode } from '~/utils/treeNode';
import { sumNumbers, sumNumbers2 } from '.';
import { describe, it, expect } from 'vitest';

describe('求根节点到叶节点数字之和', () => {
  describe('深度优先搜索', () => {
    testCase(sumNumbers);
  });

  describe('广度优先搜索', () => {
    testCase(sumNumbers2);
  });
});

function testCase(fn: (root: TreeNode | null) => number) {
  it.each([
    [[1, 2, 3], 25],
    [[4, 9, 0, 5, 1], 1026]
  ])('示例%#', (root, expected) => {
    expect(fn(createTreeNode(root))).toBe(expected);
  });
}
