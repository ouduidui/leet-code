import { TreeNode, createTreeNode } from '../../utils/treeNode';
import {
  preorderTraversal,
  preorderTraversal2,
  preorderTraversal3
} from './index';

describe('二叉树的前序遍历', () => {
  describe('递归', () => {
    testCase(preorderTraversal);
  });

  describe('迭代', () => {
    testCase(preorderTraversal2);
  });

  describe('Morris 遍历', () => {
    testCase(preorderTraversal3);
  });
});

function testCase(fn: (root: TreeNode | null) => number[]) {
  it('示例一', () => {
    const root = createTreeNode([1, null, 2, 3]);
    const expected = [1, 2, 3];
    expect(fn(root)).toStrictEqual(expected);
  });

  it('示例二', () => {
    const root = createTreeNode([]);
    const expected: number[] = [];
    expect(fn(root)).toStrictEqual(expected);
  });

  it('示例三', () => {
    const root = createTreeNode([1]);
    const expected = [1];
    expect(fn(root)).toStrictEqual(expected);
  });
}
