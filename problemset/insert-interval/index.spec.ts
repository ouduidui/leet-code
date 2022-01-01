import {twoDimensionalArrayEqual} from "../../utils/tools";
import {insert} from './index'

describe('插入区间', () => {
    testCase(insert)
});

function testCase(fn: Function) {
    it('示例一', () => {
        const intervals = [[1, 3], [6, 9]];
        const newInterval = [2, 5];
        const expected = [[1, 5], [6, 9]]

        twoDimensionalArrayEqual(fn(intervals, newInterval), expected)
    })

    it('示例二', () => {
        const intervals = [[1, 2], [3, 5], [6, 7], [8, 10], [12, 16]];
        const newInterval = [4, 8];
        const expected = [[1, 2], [3, 10], [12, 16]]

        twoDimensionalArrayEqual(fn(intervals, newInterval), expected)
    })

    it('示例三', () => {
        const intervals: number[][] = [];
        const newInterval = [5, 7];
        const expected = [[5, 7]]

        twoDimensionalArrayEqual(fn(intervals, newInterval), expected)
    })

    it('示例四', () => {
        const intervals = [[1, 5]];
        const newInterval = [2, 3];
        const expected = [[1, 5]]

        twoDimensionalArrayEqual(fn(intervals, newInterval), expected)
    })

    it('示例五', () => {
        const intervals = [[1, 5]];
        const newInterval = [2, 7];
        const expected = [[1, 7]]

        twoDimensionalArrayEqual(fn(intervals, newInterval), expected)
    })

    it('示例六', () => {
        const intervals = [[1, 5]];
        const newInterval = [6, 8];
        const expected = [[1, 5], [6, 8]]

        twoDimensionalArrayEqual(fn(intervals, newInterval), expected)
    })

    it('示例七', () => {
        const intervals = [[1, 5]];
        const newInterval = [0, 3];
        const expected = [[0, 5]]

        twoDimensionalArrayEqual(fn(intervals, newInterval), expected)
    })

    it('示例八', () => {
        const intervals = [[0, 5], [9, 12]];
        const newInterval = [7, 16];
        const expected = [[0, 5], [7, 16]]

        twoDimensionalArrayEqual(fn(intervals, newInterval), expected)
    })
}