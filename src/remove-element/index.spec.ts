import {removeElement} from "./index"

describe('移除元素', () => {
    describe('示例一', () => {
        testCase(removeElement);
    });
});

function testCase(fn: Function) {
    test('示例一', () => {
        const nums: number[] = [3, 2, 2, 3];
        const val: number = 3;
        const expected: number = 2;
        const expectedNums: number[] = [2, 2];

        const ans = fn(nums, val)
        expect(ans).toBe(expected);
        expect(nums).toEqual(expectedNums);
    })

    test('示例一', () => {
        const nums: number[] = [0, 1, 2, 2, 3, 0, 4, 2];
        const val: number = 2;
        const expected: number = 5;
        const expectedNums: number[] = [0, 1, 3, 0, 4];

        const ans = fn(nums, val)
        expect(ans).toBe(expected);
        expect(nums).toEqual(expectedNums);
    })
}