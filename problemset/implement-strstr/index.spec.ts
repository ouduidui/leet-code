import {strStr, strStr2} from "./index";

describe('实现strStr()', () => {
    describe('暴力解法', () => {
        testCase(strStr);
    })

    describe('KMP解法', () => {
        testCase(strStr2);
    })
});

function testCase(fn: Function) {
    test('示例一', () => {
        const haystack: string = "hello";
        const needle: string = "ll";
        const expected: number = 2;

        expect(fn(haystack, needle)).toBe(expected);
    })

    test('示例二', () => {
        const haystack: string = "aaaaa";
        const needle: string = "bba";
        const expected: number = -1;

        expect(fn(haystack, needle)).toBe(expected);
    })

    test('示例三', () => {
        const haystack: string = "";
        const needle: string = "";
        const expected: number = 0;

        expect(fn(haystack, needle)).toBe(expected);
    })
}
