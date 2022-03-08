import { twoSum } from './index';

describe('两数之和 II - 输入有序数组', () => {
  testCase(twoSum);
});

function testCase(fn: (numbers: number[], target: number) => number[]) {
  it('示例一', () => {
    const numbers = [2, 7, 11, 15];
    const target = 9;
    const expected = [1, 2];
    expect(fn(numbers, target)).toStrictEqual(expected);
  });

  it('示例二', () => {
    const numbers = [2, 3, 4];
    const target = 6;
    const expected = [1, 3];
    expect(fn(numbers, target)).toStrictEqual(expected);
  });

  it('示例三', () => {
    const numbers = [-1, 0];
    const target = -1;
    const expected = [1, 2];
    expect(fn(numbers, target)).toStrictEqual(expected);
  });
}
