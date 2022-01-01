import {removeDuplicates} from "./index"

describe('删除有序数组中的重复项', () => {
    describe('双指针', () => {
        testCase(removeDuplicates);
    })
});

function testCase(fn: Function) {
    test('示例一', () => {
        const nums: number [] = [1, 1, 2];
        const expected: number = 2;
        const expectedNums: number[] = [1, 2];

        const ans: number = fn(nums);

        expect(ans).toBe(expected);
        expect(nums).toEqual(expectedNums);
    })

    test('示例二', () => {
        const nums: number [] = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
        const expected: number = 5;
        const expectedNums: number[] = [0, 1, 2, 3, 4];

        const ans: number = fn(nums);

        expect(ans).toBe(expected);
        expect(nums).toEqual(expectedNums);
    })
}