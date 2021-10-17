import {isValid} from "./index";

describe('有效的括号', () => {
    testCase(isValid);
});

function testCase(fn:Function) {
    test('示例一', () => {
        const s:string = "()"
        const expected:boolean = true;

        expect(fn(s)).toBe(expected);
    })

    test('示例二', () => {
        const s:string = "()[]{}"
        const expected:boolean = true;

        expect(fn(s)).toBe(expected);
    })

    test('示例三', () => {
        const s:string = "(]"
        const expected:boolean = false;

        expect(fn(s)).toBe(expected);
    })

    test('示例四', () => {
        const s:string = "([)]"
        const expected:boolean = false;

        expect(fn(s)).toBe(expected);
    })

    test('示例五', () => {
        const s:string = "{[]}"
        const expected:boolean = true;

        expect(fn(s)).toBe(expected);
    })
}
