import { reverse } from './index';

describe('整数反转', () => {
  describe('暴力解法', () => {
    testCase(reverse);
  });
});

function testCase(fn: (x: number) => number) {
  test('示例一', () => {
    const x = 123;
    const expected = 321;

    expect(fn(x)).toBe(expected);
  });

  test('示例二', () => {
    const x = -123;
    const expected = -321;

    expect(fn(x)).toBe(expected);
  });

  test('示例三', () => {
    const x = 120;
    const expected = 21;

    expect(fn(x)).toBe(expected);
  });

  test('示例四', () => {
    const x = 0;
    const expected = 0;

    expect(fn(x)).toBe(expected);
  });
}
