import { reverseWords, reverseWords2 } from './index';

describe('翻转字符串中里的单词', () => {
  describe('语言特性', () => {
    testCase(reverseWords);
  });

  describe('双指针', () => {
    testCase(reverseWords2);
  });
});

function testCase(fn: (s: string) => string) {
  it('示例一', () => {
    const s = 'the sky is blue';
    const expected = 'blue is sky the';

    expect(fn(s)).toBe(expected);
  });

  it('示例二', () => {
    const s = '  hello world  ';
    const expected = 'world hello';

    expect(fn(s)).toBe(expected);
  });

  it('示例三', () => {
    const s = 'a good   example';
    const expected = 'example good a';

    expect(fn(s)).toBe(expected);
  });

  it('示例四', () => {
    const s = '  Bob    Loves  Alice   ';
    const expected = 'Alice Loves Bob';

    expect(fn(s)).toBe(expected);
  });

  it('示例五', () => {
    const s = 'Alice does not even like bob';
    const expected = 'bob like even not does Alice';

    expect(fn(s)).toBe(expected);
  });
}
