import { TreeNode, createTreeNode } from '../../utils/treeNode';
import {
  inorderTraversal,
  inorderTraversal2,
  inorderTraversal3
} from './index';

describe('二叉树的中序遍历', () => {
  describe('递归', () => {
    testCase(inorderTraversal);
  });

  describe('迭代 + 栈', () => {
    testCase(inorderTraversal2);
  });

  describe('Morris 中序遍历', () => {
    testCase(inorderTraversal3);
  });
});

function testCase(fn: (root: TreeNode | null) => number[]) {
  it('示例一', () => {
    const root = createTreeNode([1, null, 2, 3]);
    const expected = [1, 3, 2];
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

  it('示例四', () => {
    const root = createTreeNode([1, 2]);
    const expected = [2, 1];
    expect(fn(root)).toStrictEqual(expected);
  });

  it('示例一', () => {
    const root = createTreeNode([1, null, 2]);
    const expected = [1, 2];
    expect(fn(root)).toStrictEqual(expected);
  });
}
