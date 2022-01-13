import { combinationSum, combinationSum2 } from './index';

describe('组合总和', () => {
  describe('回溯', () => {
    testCase(combinationSum);
  });

  describe('回溯 + 剪枝', () => {
    testCase(combinationSum2);
  });
});

function testCase(fn: (candidates: number[], target: number) => number[][]) {
  it('示例一', () => {
    const candidates: number[] = [2, 3, 6, 7];
    const target = 7;
    const expected: number[][] = [[7], [2, 2, 3]];

    const res: number[][] = fn(candidates, target);
    checkTest(res, expected);
  });

  it('示例二', () => {
    const candidates: number[] = [2, 3, 5];
    const target = 8;
    const expected: number[][] = [
      [2, 2, 2, 2],
      [2, 3, 3],
      [3, 5]
    ];

    const res: number[][] = fn(candidates, target);
    checkTest(res, expected);
  });

  it('示例三', () => {
    const candidates: number[] = [2];
    const target = 1;
    const expected: number[][] = [];

    const res: number[][] = fn(candidates, target);
    checkTest(res, expected);
  });

  it('示例四', () => {
    const candidates: number[] = [1];
    const target = 1;
    const expected: number[][] = [[1]];

    const res: number[][] = fn(candidates, target);
    checkTest(res, expected);
  });

  it('示例五', () => {
    const candidates: number[] = [1];
    const target = 2;
    const expected: number[][] = [[1, 1]];

    const res: number[][] = fn(candidates, target);
    checkTest(res, expected);
  });
}

function checkTest(result: number[][], expected: number[][]) {
  expect(result.length).toBe(expected.length);
  for (let i = 0; i < expected.length; i++) {
    const idx = result.findIndex((r) => {
      if (r.length === expected[i].length && expected[i].every((e) => r.includes(e))) {
        return true;
      }
    });
    expect(idx).not.toBe(-1);
  }
}
