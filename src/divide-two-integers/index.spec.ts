import {divide, divide2} from "./index";

describe('两数相除', () => {
    describe('二分法', () => {
        testCase(divide);
    })
    describe('类二分法', () => {
        testCase(divide2);
    })
});

function testCase(fn: Function) {
    test('示例一', () => {
        const dividend: number = 10;
        const divisor: number = 3;
        const expected: number = 3;

        expect(fn(dividend, divisor)).toBe(expected);
    })

    test('示例二', () => {
        const dividend: number = 7;
        const divisor: number = -3;
        const expected: number = -2;

        expect(fn(dividend, divisor)).toBe(expected);
    })
}
