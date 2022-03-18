import { TreeNode, createTreeNode } from '~/utils/treeNode';
import { rightSideView } from '.';

describe('二叉树的右视图', () => {
  testCase(rightSideView);
});

function testCase(fn: (root: TreeNode | null) => number[]) {
  it('示例一', () => {
    const root = createTreeNode([1, 2, 3, null, 5, null, 4]);
    const expected = [1, 3, 4];
    expect(fn(root)).toStrictEqual(expected);
  });

  it('示例二', () => {
    const root = createTreeNode([1, null, 3]);
    const expected = [1, 3];
    expect(fn(root)).toStrictEqual(expected);
  });

  it('示例三', () => {
    const root = createTreeNode([]);
    const expected: number[] = [];
    expect(fn(root)).toStrictEqual(expected);
  });

  it('示例四', () => {
    const root = createTreeNode([1, 2]);
    const expected = [1, 2];
    expect(fn(root)).toStrictEqual(expected);
  });

  it('示例五', () => {
    const root = createTreeNode([1, 2, 3, 4]);
    const expected = [1, 3, 4];
    expect(fn(root)).toStrictEqual(expected);
  });
}
