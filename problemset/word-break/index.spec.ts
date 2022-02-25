import { wordBreak } from './index';

describe('单词拆分', () => {
  testCase(wordBreak);
});

function testCase(fn: (s: string, wordDict: string[]) => boolean) {
  it('示例一', () => {
    const s = 'leetcode';
    const wordDict = ['leet', 'code'];
    const expected = true;

    expect(fn(s, wordDict)).toBe(expected);
  });

  it('示例二', () => {
    const s = 'applepenapple';
    const wordDict = ['apple', 'pen'];
    const expected = true;

    expect(fn(s, wordDict)).toBe(expected);
  });

  it('示例三', () => {
    const s = 'catsandog';
    const wordDict = ['cats', 'dog', 'sand', 'and', 'cat'];
    const expected = false;

    expect(fn(s, wordDict)).toBe(expected);
  });

  it('示例四', () => {
    const s = 'aaaaaaa';
    const wordDict = ['aaaa', 'aaa'];
    const expected = true;

    expect(fn(s, wordDict)).toBe(expected);
  });
}
