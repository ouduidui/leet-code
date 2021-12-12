import {lengthOfLongestSubstring, lengthOfLongestSubstring2} from "./index";

describe('无重复字符的最长子串', () => {
    describe('暴力解法', () => {
        testCase(lengthOfLongestSubstring)
    });

    describe('滑动窗口', () => {
        testCase(lengthOfLongestSubstring2)
    });
});

function testCase(fn: Function) {
    test('示例一', () => {
        const s: string = "abcabcbb";
        const expected: number = 3;

        expect(fn(s)).toBe(expected);
    });

    test('示例二', () => {
        const s: string = "bbbbb";
        const expected: number = 1;

        expect(fn(s)).toBe(expected);
    });

    test('示例三', () => {
        const s: string = "pwwkew";
        const expected: number = 3;

        expect(fn(s)).toBe(expected);
    });

    test('示例四', () => {
        const s: string = "";
        const expected: number = 0;

        expect(fn(s)).toBe(expected);
    });

    test('示例五', () => {
        const s: string = "dvdf";
        const expected: number = 3;

        expect(fn(s)).toBe(expected);
    });
}
