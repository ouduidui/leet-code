import {romanToInt} from "./index"

describe('罗马数字转整数', () => {
    describe('模拟', () => {
        testCase(romanToInt);
    })
});

function testCase(fn:Function) {
    test('实例一', () => {
        const s:string = "III";
        const expected:number = 3;

        expect(fn(s)).toEqual(expected);
    })

    test('实例二', () => {
        const s:string = "IV";
        const expected:number = 4;

        expect(fn(s)).toEqual(expected);
    })

    test('实例三', () => {
        const s:string = "IX";
        const expected:number = 9;

        expect(fn(s)).toEqual(expected);
    })

    test('实例四', () => {
        const s:string = "LVIII";
        const expected:number = 58;

        expect(fn(s)).toEqual(expected);
    })

    test('实例五', () => {
        const s:string = "MCMXCIV";
        const expected:number = 1994;

        expect(fn(s)).toEqual(expected);
    })
}
