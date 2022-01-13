import { threeSum } from './index';

describe('三数之和', () => {
  describe('暴力解法', () => {
    testCase(threeSum);
  });
});

function testCase(fn: (nums: number[]) => number[][]) {
  test('示例一', () => {
    const nums: number[] = [-1, 0, 1, 2, -1, -4];
    const expected: number[][] = [
      [-1, -1, 2],
      [-1, 0, 1]
    ];

    testAns(fn(nums), expected);
  });

  test('示例二', () => {
    const nums: number[] = [];
    const expected: number[][] = [];

    testAns(fn(nums), expected);
  });

  test('示例三', () => {
    const nums: number[] = [0];
    const expected: number[][] = [];

    testAns(fn(nums), expected);
  });

  test('示例四', () => {
    const nums: number[] = [0, 3, 0, 1, 1, -1, -5, -5, 3, -3, -3, 0];
    const expected: number[][] = [
      [-3, 0, 3],
      [-1, 0, 1],
      [0, 0, 0]
    ];

    testAns(fn(nums), expected);
  });
}

function testAns(ans: number[][], expected: number[][]) {
  if (!expected.length) {
    expect(ans).toEqual(expected);
  } else {
    expect(ans.length === expected.length).toBe(true);
    expect(
      expected.every((arr) => {
        return ans.some((arr2) => {
          return arr.every((num) => {
            return arr2.includes(num);
          });
        });
      })
    ).toBe(true);
  }
}
