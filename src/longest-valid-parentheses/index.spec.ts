import {longestValidParentheses, longestValidParentheses2, longestValidParentheses3, longestValidParentheses4} from "./index"

describe('最长有效括号', () => {
    describe('暴力解法', () => {
        testCase(longestValidParentheses);
    })

    describe('栈', () => {
        testCase(longestValidParentheses2)
    })

    describe('动态规划', () => {
        testCase(longestValidParentheses3)
    })

    describe('', () => {
        testCase(longestValidParentheses4)
    })
});

function testCase(fn:Function) {
    test('示例一', () => {
        const s:string = "(()";
        const expected:number = 2;

        expect(fn(s)).toBe(expected);
    })

    test('示例二', () => {
        const s:string = ")()())";
        const expected:number = 4;

        expect(fn(s)).toBe(expected);
    })

    test('示例三', () => {
        const s:string = "";
        const expected:number = 0;

        expect(fn(s)).toBe(expected);
    })
}