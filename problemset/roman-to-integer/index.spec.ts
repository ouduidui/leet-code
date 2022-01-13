import { romanToInt } from './index';

describe('罗马数字转整数', () => {
  describe('模拟', () => {
    testCase(romanToInt);
  });
});

function testCase(fn: (s: string) => number) {
  test('实例一', () => {
    const s = 'III';
    const expected = 3;

    expect(fn(s)).toEqual(expected);
  });

  test('实例二', () => {
    const s = 'IV';
    const expected = 4;

    expect(fn(s)).toEqual(expected);
  });

  test('实例三', () => {
    const s = 'IX';
    const expected = 9;

    expect(fn(s)).toEqual(expected);
  });

  test('实例四', () => {
    const s = 'LVIII';
    const expected = 58;

    expect(fn(s)).toEqual(expected);
  });

  test('实例五', () => {
    const s = 'MCMXCIV';
    const expected = 1994;

    expect(fn(s)).toEqual(expected);
  });
}
