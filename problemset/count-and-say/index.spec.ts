import { countAndSay } from './index';

describe('外观数列', () => {
  describe('遍历生成', () => {
    testCase(countAndSay);
  });
});

function testCase(fn: (n: number) => string) {
  it('示例一', () => {
    const n = 1;
    const expected = '1';

    expect(fn(n)).toBe(expected);
  });

  it('示例二', () => {
    const n = 4;
    const expected = '1211';

    expect(fn(n)).toBe(expected);
  });
}
