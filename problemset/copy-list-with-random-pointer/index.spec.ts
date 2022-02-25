import {
  Node,
  createListNodeWithRandomPointer
} from '../../utils/listNodeWithRandomPointer';
import { copyRandomList, copyRandomList2 } from './index';

describe('复制带随机指针的链表', () => {
  describe('回溯 + 哈希表', () => {
    testCase(copyRandomList);
  });
  describe('迭代 + 节点拆分', () => {
    testCase(copyRandomList2);
  });
});

function testCase(fn: (head: Node | null) => Node | null) {
  it('示例一', () => {
    const head = createListNodeWithRandomPointer([
      [7, null],
      [13, 0],
      [11, 4],
      [10, 2],
      [1, 0]
    ]);
    const result = fn(head);
    expect(result).not.toBe(head);
    expect(result).toStrictEqual(head);
  });

  it('示例二', () => {
    const head = createListNodeWithRandomPointer([
      [1, 1],
      [2, 1]
    ]);
    const result = fn(head);
    expect(result).not.toBe(head);
    expect(result).toStrictEqual(head);
  });

  it('示例三', () => {
    const head = createListNodeWithRandomPointer([
      [3, null],
      [3, 0],
      [3, null]
    ]);
    const result = fn(head);
    expect(result).not.toBe(head);
    expect(result).toStrictEqual(head);
  });
}
