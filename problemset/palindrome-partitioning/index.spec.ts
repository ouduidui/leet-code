import { partition, partition2 } from '.';
// need refactor
import { describe, it, expect } from 'vitest';
describe('分割回文串', () => {
  describe('回溯 + 记忆化搜索', () => {
    testCase(partition);
  });

  describe('回溯 + 动态规划预处理', () => {
    testCase(partition2);
  });
});

function testCase(fn: (s: string) => string[][]) {
  it('示例一', () => {
    const s = 'aab';
    const expected = [
      ['a', 'a', 'b'],
      ['aa', 'b']
    ];
    expect(fn(s)).toStrictEqual(expected);
  });

  it('示例二', () => {
    const s = 'a';
    const expected = [['a']];
    expect(fn(s)).toStrictEqual(expected);
  });
}
