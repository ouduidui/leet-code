import { numTrees, numTrees2, numTrees3 } from './index';

describe('不同的二叉搜索树', () => {
  describe('回溯', function () {
    testCase(numTrees);
  });

  describe('动态规划', function () {
    testCase(numTrees2);
  });

  describe('数学', function () {
    testCase(numTrees3);
  });
});

function testCase(fn: (n: number) => number) {
  it('示例一', () => {
    const n = 3;
    const expected = 5;
    expect(fn(n)).toBe(expected);
  });

  it('示例二', () => {
    const n = 1;
    const expected = 1;
    expect(fn(n)).toBe(expected);
  });
}
