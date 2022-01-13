import { fullJustify } from './index';

describe('文本左右对齐', () => {
  describe('模拟', () => {
    testCase(fullJustify);
  });
});

function testCase(fn: (words: string[], maxWidth: number) => string[]) {
  it('示例一', () => {
    const words = ['This', 'is', 'an', 'example', 'of', 'text', 'justification.'];
    const maxWidth = 16;
    const expected = ['This    is    an', 'example  of text', 'justification.  '];

    expect(fn(words, maxWidth)).toStrictEqual(expected);
  });

  it('示例二', () => {
    const words = ['What', 'must', 'be', 'acknowledgment', 'shall', 'be'];
    const maxWidth = 16;
    const expected = ['What   must   be', 'acknowledgment  ', 'shall be        '];

    expect(fn(words, maxWidth)).toStrictEqual(expected);
  });

  it('示例二', () => {
    const words = [
      'Science',
      'is',
      'what',
      'we',
      'understand',
      'well',
      'enough',
      'to',
      'explain',
      'to',
      'a',
      'computer.',
      'Art',
      'is',
      'everything',
      'else',
      'we',
      'do'
    ];
    const maxWidth = 20;
    const expected = [
      'Science  is  what we',
      'understand      well',
      'enough to explain to',
      'a  computer.  Art is',
      'everything  else  we',
      'do                  '
    ];

    expect(fn(words, maxWidth)).toStrictEqual(expected);
  });
}
