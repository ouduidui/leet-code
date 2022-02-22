import { ladderLength } from './index';

describe('单词接龙', () => {
  testCase(ladderLength);
});

function testCase(
  fn: (beginWord: string, endWord: string, wordList: string[]) => number
) {
  it('示例一', () => {
    const beginWord = 'hit';
    const endWord = 'cog';
    const wordList = ['hot', 'dot', 'dog', 'lot', 'log', 'cog'];
    const expected = 5;
    expect(fn(beginWord, endWord, wordList)).toBe(expected);
  });

  it('示例二', () => {
    const beginWord = 'hit';
    const endWord = 'cog';
    const wordList = ['hot', 'dot', 'dog', 'lot', 'log'];
    const expected = 0;
    expect(fn(beginWord, endWord, wordList)).toBe(expected);
  });
}
