import {removeNthFromEnd, removeNthFromEnd2, removeNthFromEnd3} from "./index";
import {ListNode, createListNode} from "../../utils/listNode";

describe('删除链表的倒数第N个结点', () => {
    describe('暴力解法', () => {
        testCase(removeNthFromEnd);
    })

    describe('计算链表长度', () => {
        testCase(removeNthFromEnd2);
    })

    describe('双指针', () => {
        testCase(removeNthFromEnd3);
    })
});

function testCase(fn: Function) {
    test('示例一', () => {
        const head: ListNode | null = createListNode([1, 2, 3, 4, 5]);
        const n: number = 2;
        const expected: ListNode | null = createListNode([1, 2, 3, 5]);

        expect(fn(head, n)).toEqual(expected);
    })

    test('示例二', () => {
        const head: ListNode | null = createListNode([1]);
        const n: number = 1;
        const expected: ListNode | null = createListNode([]);

        expect(fn(head, n)).toEqual(expected);
    })

    test('示例一', () => {
        const head: ListNode | null = createListNode([1, 2]);
        const n: number = 1;
        const expected: ListNode | null = createListNode([1]);

        expect(fn(head, n)).toEqual(expected);
    })
}