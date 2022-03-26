import { pathSum, pathSum2 } from '.';
import { TreeNode, createTreeNode } from '~/utils/treeNode';
// need refactor
import { describe, it, expect } from 'vitest';
describe('路径总和 II', () => {
  describe('深度优先搜索', () => {
    testCase(pathSum);
  });
  describe('广度优先搜索', () => {
    testCase(pathSum2);
  });
});

function testCase(
  fn: (root: TreeNode | null, targetSum: number) => number[][]
) {
  it('示例一', () => {
    const root = createTreeNode([
      5,
      4,
      8,
      11,
      null,
      13,
      4,
      7,
      2,
      null,
      null,
      5,
      1
    ]);
    const targetSum = 22;
    const expected = [
      [5, 4, 11, 2],
      [5, 8, 4, 5]
    ];
    expect(fn(root, targetSum)).toStrictEqual(expected);
  });

  it('示例二', () => {
    const root = createTreeNode([1, 2, 3]);
    const targetSum = 5;
    const expected: number[][] = [];
    expect(fn(root, targetSum)).toStrictEqual(expected);
  });

  it('示例三', () => {
    const root = createTreeNode([1, 2]);
    const targetSum = 0;
    const expected: number[][] = [];
    expect(fn(root, targetSum)).toStrictEqual(expected);
  });
}
