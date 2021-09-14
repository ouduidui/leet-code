import {twoSum, twoSum2} from "./index";

describe('两数之和', () => {
    describe('暴力解法', () => {
        testCase(twoSum);
    });
    describe('哈希表', () => {
        testCase(twoSum2);
    })
});

function testCase(fn: Function) {
    test('示例一', () => {
        let nums: number[] = [2, 7, 11, 15];
        let target: number = 9;
        let expected: number[] = [0, 1];

        expect(fn(nums, target)).toEqual(expected);
    });

    test('示例二', () => {
        let nums: number[] = [3, 2, 4];
        let target: number = 6;
        let expected: number[] = [1, 2];

        expect(fn(nums, target)).toEqual(expected);
    });

    test('示例三', () => {
        let nums: number[] = [3, 3];
        let target: number = 6;
        let expected: number[] = [0, 1];

        expect(fn(nums, target)).toEqual(expected);
    });
}
