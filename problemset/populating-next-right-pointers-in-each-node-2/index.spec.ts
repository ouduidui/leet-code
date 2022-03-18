import { connect, connect2 } from './index';
import {
  Node,
  createBinaryTree,
  createPerfectBinaryTree
} from '~/utils/perfectBinaryTree';

describe('填充每个节点的下一个右侧节点指针 II', () => {
  describe('层级遍历', () => {
    testCase(connect);
  });

  describe('使用已建立的 next 指针', () => {
    testCase(connect2);
  });
});

function testCase(fn: (root: Node | null) => Node | null) {
  it('示例一', () => {
    const root = createBinaryTree([1, 2, 3, 4, 5, null, 7]);
    const expected = createPerfectBinaryTree([
      1,
      '#',
      2,
      3,
      '#',
      4,
      5,
      null,
      7,
      '#'
    ]);
    expect(fn(root)).toEqual(expected);
  });
}
