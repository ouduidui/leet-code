import {setZeroes, setZeroes2} from './index';

describe('矩阵置零', () => {
    describe('标记数组', () => {
        testCase(setZeroes);
    })

    describe('标记变量', () => {
        testCase(setZeroes2);
    })
});

function testCase(fn: (matrix: number[][]) => void) {
    it('示例一', () => {
        const matrix = [[1, 1, 1], [1, 0, 1], [1, 1, 1]];
        const expected = [[1, 0, 1], [0, 0, 0], [1, 0, 1]];
        fn(matrix);

        expect(matrix).toStrictEqual(expected);
    });

    it('示例二', () => {
        const matrix = [[0, 1, 2, 0], [3, 4, 5, 2], [1, 3, 1, 5]];
        const expected = [[0, 0, 0, 0], [0, 4, 5, 0], [0, 3, 1, 0]];
        fn(matrix);

        expect(matrix).toStrictEqual(expected);
    });
}