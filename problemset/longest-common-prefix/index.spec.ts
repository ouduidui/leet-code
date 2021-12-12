import {longestCommonPrefix} from "./index"

describe('最长公共前缀', () => {
    describe('暴力解法', () => {
        testCase(longestCommonPrefix);
    })


});

function testCase(fn: Function) {
    test('实例一', () => {
        const strs:string[] = ["flower","flow","flight"];
        const expected:string = 'fl';

        expect(fn(strs)).toEqual(expected)
    })

    test('实例二', () => {
        const strs:string[] = ["dog","racecar","car"];
        const expected:string = '';

        expect(fn(strs)).toEqual(expected)
    })
}
