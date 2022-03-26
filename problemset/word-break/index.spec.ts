import { wordBreak } from '.';
import { describe, it, expect } from 'vitest';

describe('单词拆分', () => {
  testCase(wordBreak);
});

function testCase(fn: (s: string, wordDict: string[]) => boolean) {
  it.each([
    ['leetcode', ['leet', 'code'], true],
    ['applepenapple', ['apple', 'pen'], true],
    ['catsandog', ['cats', 'dog', 'sand', 'and', 'cat'], false],
    ['aaaaaaa', ['aaaa', 'aaa'], true]
  ])('示例%#', (s, wordDict, expected) => {
    expect(fn(s, wordDict)).toBe(expected);
  });
}
