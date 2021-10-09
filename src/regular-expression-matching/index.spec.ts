import {isMatch} from "./index"

describe(' 正则表达式匹配', () => {
    describe('动态规划', () => {
        testCase(isMatch);
    })
});

function testCase(fn: Function) {
    test('示例一', () => {
        const s: string = 'aa';
        const p: string = 'a';
        const expected: boolean = false;

        expect(fn(s, p)).toBe(expected)
    })

    test('示例二', () => {
        const s: string = 'aa';
        const p: string = 'a*';
        const expected: boolean = true;

        expect(fn(s, p)).toBe(expected)
    })

    test('示例三', () => {
        const s: string = 'ab';
        const p: string = '.*';
        const expected: boolean = true;

        expect(fn(s, p)).toBe(expected)
    })

    test('示例四', () => {
        const s: string = 'aab';
        const p: string = 'c*a*b';
        const expected: boolean = true;

        expect(fn(s, p)).toBe(expected)
    })

    test('示例五', () => {
        const s: string = 'mississippi';
        const p: string = 'mis*is*p*.';
        const expected: boolean = false;

        expect(fn(s, p)).toBe(expected)
    })
}
