import {findMedianSortedArrays} from "./index"

describe('寻找两个正序数组的中位数', () => {
    describe('暴力解法', () => {
        testCase(findMedianSortedArrays);
    })
});

function testCase(fn: Function) {
    test('示例一', () => {
        const num1: Array<number> = [1, 3];
        const num2: Array<number> = [2];
        const expected: number = 2;

        expect(fn(num1, num2)).toBe(expected);
    });

    test('示例二', () => {
        const num1: Array<number> = [1, 2];
        const num2: Array<number> = [3, 4];
        const expected: number = 2.5;

        expect(fn(num1, num2)).toBe(expected);
    });

    test('示例三', () => {
        const num1: Array<number> = [0, 0];
        const num2: Array<number> = [0, 0];
        const expected: number = 0;

        expect(fn(num1, num2)).toBe(expected);
    });

    test('示例四', () => {
        const num1: Array<number> = [];
        const num2: Array<number> = [1];
        const expected: number = 1;

        expect(fn(num1, num2)).toBe(expected);
    });

    test('示例五', () => {
        const num1: Array<number> = [2];
        const num2: Array<number> = [];
        const expected: number = 2;

        expect(fn(num1, num2)).toBe(expected);
    });
}
