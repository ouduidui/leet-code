import {maxArea, maxArea2} from "./index";

describe('盛最多水的容器', () => {
    describe('暴力解法', () => {
        testCase(maxArea);
    });

    describe('双指针', () => {
        testCase(maxArea2);
    });
});

function testCase (fn:Function) {
    test('示例一', () => {
        const height:number[] = [1,8,6,2,5,4,8,3,7];
        const expected:number = 49;

        expect(fn(height)).toEqual(expected);
    });

    test('示例二', () => {
        const height:number[] = [1,1];
        const expected:number = 1;

        expect(fn(height)).toEqual(expected);
    });

    test('示例三', () => {
        const height:number[] = [4,3,2,1,4];
        const expected:number = 16;

        expect(fn(height)).toEqual(expected);
    });

    test('示例四', () => {
        const height:number[] = [1,2,1];
        const expected:number = 2;

        expect(fn(height)).toEqual(expected);
    });
}
