import {longestPalindrome, longestPalindrome2} from "./index"

describe('最长回文子串', () => {
    describe('中心扩展', () => {
        testCase(longestPalindrome);
    })

    describe('Manacher算法', () => {
        testCase(longestPalindrome2);
    })
});

function testCase(fn: Function) {
    test('示例一', () => {
        const s:string = "babad";

        expect(fn(s)).toMatch(/bab|aba/);
    })

    test('示例二', () => {
        const s:string = "cbbd";
        const expected: string = "bb";

        expect(fn(s)).toBe(expected);
    })

    test('示例三', () => {
        const s:string = "a";
        const expected: string = "a";

        expect(fn(s)).toBe(expected);
    })

    test('示例四', () => {
        const s:string = "ac";
        expect(fn(s)).toMatch(/a|c/);
    })

    test('示例五', () => {
        const s:string = "bb";
        const expected: string = "bb";

        expect(fn(s)).toBe(expected);
    })

    test('示例六', () => {
        const s:string = "ccc";
        const expected: string = "ccc";

        expect(fn(s)).toBe(expected);
    })

    test('示例七', () => {
        const s:string = "aaaa";
        const expected: string = "aaaa";

        expect(fn(s)).toBe(expected);
    })
}
