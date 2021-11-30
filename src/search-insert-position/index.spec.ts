import {searchInsert} from "./index"

describe('搜索插入位置', () => {
    describe('二分法', () => {
        testCase(searchInsert);
    })
});

function testCase(fn: Function) {
    it('示例一', () => {
        const nums: number[] = [1, 3, 5, 6];
        const target: number = 5;
        const expected: number = 2;

        expect(fn(nums, target)).toBe(expected);
    })

    it('示例二', () => {
        const nums: number[] = [1, 3, 5, 6];
        const target: number = 2;
        const expected: number = 1;

        expect(fn(nums, target)).toBe(expected);
    })

    it('示例三', () => {
        const nums: number[] = [1, 3, 5, 6];
        const target: number = 7;
        const expected: number = 4;

        expect(fn(nums, target)).toBe(expected);
    })

    it('示例四', () => {
        const nums: number[] = [1, 3, 5, 6];
        const target: number = 0;
        const expected: number = 0;

        expect(fn(nums, target)).toBe(expected);
    })

    it('示例无', () => {
        const nums: number[] = [1];
        const target: number = 0;
        const expected: number = 0;

        expect(fn(nums, target)).toBe(expected);
    })
}