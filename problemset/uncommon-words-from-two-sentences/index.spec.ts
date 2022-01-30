import { uncommonFromSentences } from './index';

describe('两句话中的不常见单词', () => {
  testCase(uncommonFromSentences);
});

function testCase(fn: (s1: string, s2: string) => string[]) {
  it('示例一', () => {
    const s1 = 'this apple is sweet';
    const s2 = 'this apple is sour';
    const expected = ['sweet', 'sour'];

    expect(fn(s1, s2)).toEqual(expected);
  });

  it('示例二', () => {
    const s1 = 'apple apple';
    const s2 = 'banana';
    const expected = ['banana'];

    expect(fn(s1, s2)).toEqual(expected);
  });
}
