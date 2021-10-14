import {threeSumClosest} from "./index";

describe('最接近的三数之和', () => {
    describe('排序+双指针', () => {
        testCase(threeSumClosest)
    })
});

function testCase(fn: Function) {
    test('示例一', () => {
        const nums:number[] = [-1,2,1,-4];
        const target:number = 1;
        const expected:number = 2;

        expect(fn(nums, target)).toBe(expected);
    })

    test('示例二', () => {
        const nums:number[] = [1,1,-1,-1,3];
        const target:number = 1;
        const expected:number = 1;

        expect(fn(nums, target)).toBe(expected);
    })

    test('示例三', () => {
        const nums:number[] = [-1,0,1,1,55];
        const target:number = 3;
        const expected:number = 2;

        expect(fn(nums, target)).toBe(expected);
    })
}
