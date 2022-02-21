import { findLadders } from './index';

describe('单词接龙 II', () => {
  testCase(findLadders);
});

function testCase(
  fn: (beginWord: string, endWord: string, wordList: string[]) => string[][]
) {
  it('示例一', () => {
    const beginWord = 'hit';
    const endWord = 'cog';
    const wordList = ['hot', 'dot', 'dog', 'lot', 'log', 'cog'];
    const expected = [
      ['hit', 'hot', 'dot', 'dog', 'cog'],
      ['hit', 'hot', 'lot', 'log', 'cog']
    ];
    expect(fn(beginWord, endWord, wordList)).toStrictEqual(expected);
  });

  it('示例二', () => {
    const beginWord = 'hit';
    const endWord = 'cog';
    const wordList = ['hot', 'dot', 'dog', 'lot', 'log'];
    const expected: string[][] = [];
    expect(fn(beginWord, endWord, wordList)).toStrictEqual(expected);
  });

  it('示例三', () => {
    const beginWord = 'red';
    const endWord = 'tax';
    const wordList = ['ted', 'tex', 'red', 'tax', 'tad', 'den', 'rex', 'pee'];
    const expected = [
      ['red', 'ted', 'tad', 'tax'],
      ['red', 'ted', 'tex', 'tax'],
      ['red', 'rex', 'tex', 'tax']
    ];
    expect(fn(beginWord, endWord, wordList)).toStrictEqual(expected);
  });
}
