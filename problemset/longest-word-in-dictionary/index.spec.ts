import { longestWord } from '.';
// need refactor
import { describe, it, expect } from 'vitest';
describe('词典中最长的单词', () => {
  describe('哈希集合', () => {
    testCase(longestWord);
  });
});

function testCase(fn: (words: string[]) => string) {
  it('示例一', () => {
    const words = ['w', 'wo', 'wor', 'worl', 'world'];
    const expected = 'world';
    expect(fn(words)).toBe(expected);
  });

  it('示例二', () => {
    const words = ['a', 'banana', 'app', 'appl', 'ap', 'apply', 'apple'];
    const expected = 'apple';
    expect(fn(words)).toBe(expected);
  });
}
