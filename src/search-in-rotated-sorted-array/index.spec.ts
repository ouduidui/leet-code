import {search, search2} from "./index";

describe('搜索旋转排序数组', () => {
    describe('暴力解法', () => {
        testCase(search)
    })

    describe('二分法', () => {
        testCase(search2)
    })
});

function testCase(fn: Function) {
    test('示例一', () => {
        const nums: number[] = [4, 5, 6, 7, 0, 1, 2];
        const target: number = 0;
        const expected: number = 4;

        expect(fn(nums, target)).toBe(expected)
    })

    test('示例二', () => {
        const nums: number[] = [4, 5, 6, 7, 0, 1, 2];
        const target: number = 3;
        const expected: number = -1;

        expect(fn(nums, target)).toBe(expected)
    })

    test('示例三', () => {
        const nums: number[] = [1];
        const target: number = 0;
        const expected: number = -1;

        expect(fn(nums, target)).toBe(expected)
    })

    test('示例四', () => {
        const nums: number[] = [1, 3];
        const target: number = 1;
        const expected: number = 0;

        expect(fn(nums, target)).toBe(expected)
    })
}