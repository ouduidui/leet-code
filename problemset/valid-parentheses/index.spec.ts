import { isValid } from './index';

describe('有效的括号', () => {
  testCase(isValid);
});

function testCase(fn: (s: string) => boolean) {
  test('示例一', () => {
    const s = '()';
    const expected = true;

    expect(fn(s)).toBe(expected);
  });

  test('示例二', () => {
    const s = '()[]{}';
    const expected = true;

    expect(fn(s)).toBe(expected);
  });

  test('示例三', () => {
    const s = '(]';
    const expected = false;

    expect(fn(s)).toBe(expected);
  });

  test('示例四', () => {
    const s = '([)]';
    const expected = false;

    expect(fn(s)).toBe(expected);
  });

  test('示例五', () => {
    const s = '{[]}';
    const expected = true;

    expect(fn(s)).toBe(expected);
  });
}
