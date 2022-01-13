import { convert } from './index';

describe('Z字形变换', () => {
  describe('按行排序', () => {
    testCase(convert);
  });
});

function testCase(fn: (s: string, numRows: number) => string) {
  test('示例一', () => {
    const s = 'PAYPALISHIRING';
    const numRows = 3;
    const expected = 'PAHNAPLSIIGYIR';

    expect(fn(s, numRows)).toBe(expected);
  });

  test('示例二', () => {
    const s = 'PAYPALISHIRING';
    const numRows = 4;
    const expected = 'PINALSIGYAHRPI';

    expect(fn(s, numRows)).toBe(expected);
  });

  test('示例三', () => {
    const s = 'A';
    const numRows = 1;
    const expected = 'A';

    expect(fn(s, numRows)).toBe(expected);
  });
}
