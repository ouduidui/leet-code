import {twoDimensionalArrayEqual} from "../../utils/tools";
import {merge} from './index';

describe('合并区间', () => {
    testCase(merge)
});

function testCase(fn: Function) {
    it('示例一', () => {
        const intervals = [[1, 3], [2, 6], [8, 10], [15, 18]];
        const expected = [[1, 6], [8, 10], [15, 18]];

        twoDimensionalArrayEqual(fn(intervals), expected);
    })

    it('示例二', () => {
        const intervals = [[1, 4], [4, 5]];
        const expected = [[1, 5]];

        twoDimensionalArrayEqual(fn(intervals), expected);
    })

    it('示例三', () => {
        const intervals = [[1, 4], [0, 2], [3, 5]];
        const expected = [[0, 5]];

        twoDimensionalArrayEqual(fn(intervals), expected);
    })
}