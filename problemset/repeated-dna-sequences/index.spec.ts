import {
  findRepeatedDnaSequences,
  findRepeatedDnaSequences2,
  findRepeatedDnaSequences3
} from '.';
// need refactor
import { describe, it, expect } from 'vitest';
describe('重复的DNA序列', () => {
  describe('哈希表', () => {
    testCase(findRepeatedDnaSequences);
  });

  describe('哈希表 + 滑动窗口', () => {
    testCase(findRepeatedDnaSequences2);
  });

  describe('哈希表 + 滑动窗口 + 位运算', () => {
    testCase(findRepeatedDnaSequences3);
  });
});

function testCase(fn: (s: string) => string[]) {
  it('示例一', () => {
    const s = 'AAAAACCCCCAAAAACCCCCCAAAAAGGGTTT';
    const expected = ['AAAAACCCCC', 'CCCCCAAAAA'];
    expect(fn(s)).toEqual(expected);
  });

  it('示例二', () => {
    const s = 'AAAAAAAAAAAAA';
    const expected = ['AAAAAAAAAA'];
    expect(fn(s)).toEqual(expected);
  });
}
