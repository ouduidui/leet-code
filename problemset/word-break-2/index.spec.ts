import { wordBreak } from './index';

describe('单词拆分 II', () => {
  testCase(wordBreak);
});

function testCase(fn: (s: string, wordDict: string[]) => string[]) {
  it('示例一', () => {
    const s = 'catsanddog';
    const wordDict = ['cat', 'cats', 'and', 'sand', 'dog'];
    const expected = ['cat sand dog', 'cats and dog'];
    expect(fn(s, wordDict)).toStrictEqual(expected);
  });

  it('示例二', () => {
    const s = 'pineapplepenapple';
    const wordDict = ['apple', 'pen', 'applepen', 'pine', 'pineapple'];
    const expected = [
      'pine apple pen apple',
      'pine applepen apple',
      'pineapple pen apple'
    ];
    expect(fn(s, wordDict)).toStrictEqual(expected);
  });

  it('示例三', () => {
    const s = 'catsandog';
    const wordDict = ['cats', 'dog', 'sand', 'and', 'cat'];
    const expected: string[] = [];
    expect(fn(s, wordDict)).toStrictEqual(expected);
  });
}
