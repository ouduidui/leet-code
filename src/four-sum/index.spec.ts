import {fourSum} from "./index";

describe('四数之和', () => {
    describe('排序+双指针', () => {
        testCase(fourSum);
    })
});

function testCase(fn: Function) {
    test('示例一', () => {
        const nums: number[] = [1, 0, -1, 0, -2, 2];
        const target: number = 0;
        const expected: number[][] = [[-2, -1, 1, 2], [-2, 0, 0, 2], [-1, 0, 0, 1]];

        checkExpected(fn(nums, target), expected);
    })

    test('示例二', () => {
        const nums: number[] = [2, 2, 2, 2, 2];
        const target: number = 8;
        const expected: number[][] = [[2, 2, 2, 2]];

        checkExpected(fn(nums, target), expected);
    })

    test('示例三', () => {
        const nums: number[] = [1, 0, -1, 0, -2, 2];
        const target: number = 0;
        const expected: number[][] = [[-2, -1, 1, 2], [-2, 0, 0, 2], [-1, 0, 0, 1]];

        checkExpected(fn(nums, target), expected);
    })
}

function checkExpected(ans: number[][], expected: number[][]) {
    if (expected.length) {
        expect(ans.every(arr => arr.length === 4)).toBe(true);
        expect(ans.every(arr1 => {
            return expected.some(arr2 => {
                return arr1.every(item => arr2.includes(item))
            })
        })).toBe(true);
    } else {
        expect(ans).toEqual(expected)
    }
}
