import {uniquePathsWithObstacles, uniquePathsWithObstacles2} from './index'

describe('不同路径 II', () => {
    describe('动态规划', () => {
        testCase(uniquePathsWithObstacles)
    })

    describe('动态规划 + 滚动数组', () => {
        testCase(uniquePathsWithObstacles2)
    })
});

function testCase(fn: (obstacleGrid: number[][]) => number) {
    it('示例一', () => {
        const obstacleGrid = [[0, 0, 0], [0, 1, 0], [0, 0, 0]];
        const expected = 2;

        expect(fn(obstacleGrid)).toBe(expected);
    })

    it('示例二', () => {
        const obstacleGrid = [[0, 1], [0, 0]];
        const expected = 1;

        expect(fn(obstacleGrid)).toBe(expected);
    })
}