import {reverse} from "./index";

describe('整数反转', () => {
    describe('暴力解法', () => {
        testCase(reverse);
    })
});

function testCase(fn:Function) {
    test('示例一', () => {
        const x:number = 123;
        const expected:number = 321;

        expect(fn(x)).toBe(expected);
    })

    test('示例二', () => {
        const x:number = -123;
        const expected:number = -321;

        expect(fn(x)).toBe(expected);
    })

    test('示例三', () => {
        const x:number = 120;
        const expected:number = 21;

        expect(fn(x)).toBe(expected);
    })

    test('示例四', () => {
        const x:number = 0;
        const expected:number = 0;

        expect(fn(x)).toBe(expected);
    })
}
