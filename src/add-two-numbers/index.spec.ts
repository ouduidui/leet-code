import {ListNode, addTwoNumbers} from "./index";

describe('两数相加', () => {
    describe('暴力解法', () => {
        testCase(addTwoNumbers);
    });
});

function testCase(fn: Function) {
    test('示例一', () => {
        const l1: ListNode | null = createListNode([2, 4, 3]);
        const l2: ListNode | null = createListNode([5, 6, 4]);
        const expected: ListNode | null = createListNode([7, 0, 8])

        expect(fn(l1, l2)).toEqual(expected);
    });

    test('示例二', () => {
        const l1: ListNode | null = createListNode([0]);
        const l2: ListNode | null = createListNode([0]);
        const expected: ListNode | null = createListNode([0])

        expect(fn(l1, l2)).toEqual(expected);
    });

    test('示例三', () => {
        const l1: ListNode | null = createListNode([9, 9, 9, 9, 9, 9, 9]);
        const l2: ListNode | null = createListNode([9, 9, 9, 9]);
        const expected: ListNode | null = createListNode([8, 9, 9, 9, 0, 0, 0, 1])

        expect(fn(l1, l2)).toEqual(expected);
    });
}

function createListNode(arr: Array<number>): ListNode | null {
    return arr.reduceRight((prev: ListNode | null, cur: number) => {
        if (prev) {
            return new ListNode(cur, prev);
        } else {
            return new ListNode(cur, null);
        }
    }, null);
}
