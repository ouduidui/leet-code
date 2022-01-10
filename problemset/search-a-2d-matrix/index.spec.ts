import {searchMatrix, searchMatrix2} from './index'

describe('搜索二维矩阵', () => {
    describe('两次二分查找', () => {
        testCase(searchMatrix)
    })

    describe('一次二分查找', () => {
        testCase(searchMatrix2)
    })
});

function testCase(fn: (matrix: number[][], target: number) => boolean) {
    it('示例一', () => {
        const matrix = [[1, 3, 5, 7], [10, 11, 16, 20], [23, 30, 34, 60]];
        const target = 3;
        const expected = true;

        expect(fn(matrix, target)).toBe(expected)
    })

    it('示例二', () => {
        const matrix = [[1, 3, 5, 7], [10, 11, 16, 20], [23, 30, 34, 60]];
        const target = 13;
        const expected = false;

        expect(fn(matrix, target)).toBe(expected)
    })
}