import {isMatch} from "./index";

describe('通配符匹配', () => {
    describe('动态规划', () => {
        testCase(isMatch);
    })
});

function testCase(fn:Function) {
    it('示例一', () => {
        const s = 'aa';
        const p = 'a';
        const expected = false;

        expect(fn(s, p)).toBe(expected);
    })

    it('示例二', () => {
        const s = 'aa';
        const p = '*';
        const expected = true;

        expect(fn(s, p)).toBe(expected);
    })

    it('示例三', () => {
        const s = 'cb';
        const p = '?a';
        const expected = false;

        expect(fn(s, p)).toBe(expected);
    })

    it('示例四', () => {
        const s = 'adceb';
        const p = '*a*b';
        const expected = true;

        expect(fn(s, p)).toBe(expected);
    })

    it('示例一', () => {
        const s = 'acdcb';
        const p = 'a*c?b';
        const expected = false;

        expect(fn(s, p)).toBe(expected);
    })
}