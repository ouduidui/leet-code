import {myAtoi} from "./index";

describe('字符串转换整数(atoi)', () => {
    testCase(myAtoi)
});

function testCase(fn: Function) {
    test('示例一', () => {
        const s: string = "42";
        const expected: number = 42;

        expect(fn(s)).toBe(expected);
    })

    test('示例二', () => {
        const s: string = "   -42";
        const expected: number = -42;

        expect(fn(s)).toBe(expected);
    })

    test('示例三', () => {
        const s: string = "4193 with words";
        const expected: number = 4193;

        expect(fn(s)).toBe(expected);
    })

    test('示例四', () => {
        const s: string = "words and 987";
        const expected: number = 0;

        expect(fn(s)).toBe(expected);
    })

    test('示例五', () => {
        const s: string = "-91283472332";
        const expected: number = -2147483648;

        expect(fn(s)).toBe(expected);
    })

    test('示例六', () => {
        const s: string = "   +0 123";
        const expected: number = 0;

        expect(fn(s)).toBe(expected);
    })
}
