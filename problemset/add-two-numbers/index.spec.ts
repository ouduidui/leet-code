import {addTwoNumbers} from "./index";
import {ListNode, createListNode} from "../../utils/listNode";

describe('两数相加', () => {
    describe('模拟', () => {
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