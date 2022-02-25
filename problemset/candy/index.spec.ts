import { candy, candy2 } from './index';

describe('分发糖果', () => {
  describe('两次遍历', () => {
    testCase(candy);
  });

  describe('常数空间遍历', () => {
    testCase(candy2);
  });
});

function testCase(fn: (ratings: number[]) => number) {
  it('示例一', () => {
    const ratings = [1, 0, 2];
    const expected = 5;
    expect(fn(ratings)).toBe(expected);
  });

  it('示例二', () => {
    const ratings = [1, 2, 2];
    const expected = 4;
    expect(fn(ratings)).toBe(expected);
  });

  it('示例三', () => {
    const ratings = [1, 3, 2, 2, 1];
    const expected = 7;
    expect(fn(ratings)).toBe(expected);
  });
}
