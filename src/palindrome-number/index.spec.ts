import {isPalindrome, isPalindrome1} from "./index"

describe('回文数', () => {
    describe('暴力解法', () => {
        testCase(isPalindrome);
    })

    describe('反转一半数字', () => {
        testCase(isPalindrome1);
    })
});

function testCase(fn: Function) {
    test('示例一', () => {
        const x: number = 121;
        const expected: boolean = true;

        expect(fn(x)).toBe(expected);
    })

    test('示例二', () => {
        const x: number = -121;
        const expected: boolean = false;

        expect(fn(x)).toBe(expected);
    })

    test('示例三', () => {
        const x: number = 10;
        const expected: boolean = false;

        expect(fn(x)).toBe(expected);
    })

    test('示例四', () => {
        const x: number = -101;
        const expected: boolean = false;

        expect(fn(x)).toBe(expected);
    })
}
