import {climbStairs, climbStairs2} from './index'

describe('爬楼梯', () => {
    describe('动态规划 - 滑动数组', () => {
        testCase(climbStairs)
    })

    describe('矩阵快速幂', () => {
        testCase(climbStairs2)
    })
});

function testCase(fn: (n: number) => number) {
    it('示例一', () => {
        const n = 2;
        const expected = 2;

        expect(fn(n)).toBe(expected);
    })

    it('示例二', () => {
        const n = 3;
        const expected = 3;

        expect(fn(n)).toBe(expected);
    })
}