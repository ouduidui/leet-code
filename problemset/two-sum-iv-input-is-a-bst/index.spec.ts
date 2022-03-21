import { TreeNode, createTreeNode } from '~/utils/treeNode';
import { findTarget, findTarget2, findTarget3 } from '.';

describe('两数之和 IV - 输入 BST', () => {
  describe('广度优先搜索 + 哈希表', () => {
    testCase(findTarget);
  });

  describe('广度优先搜索 + 哈希表', () => {
    testCase(findTarget2);
  });

  describe('广度优先搜索 + 哈希表', () => {
    testCase(findTarget3);
  });
});

function testCase(fn: (root: TreeNode | null, k: number) => boolean) {
  it('示例一', () => {
    const root = createTreeNode([5, 3, 6, 2, 4, null, 7]);
    const k = 9;
    const expected = true;
    expect(fn(root, k)).toBe(expected);
  });

  it('示例二', () => {
    const root = createTreeNode([5, 3, 6, 2, 4, null, 7]);
    const k = 28;
    const expected = false;
    expect(fn(root, k)).toBe(expected);
  });
}
