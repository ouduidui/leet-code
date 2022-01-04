import {mergeTwoLists, mergeTwoLists2} from "./index";
import ListNode from "../../utils/listNode";

describe('合并两个有序链表', () => {
    describe('递归',() => {
        testCase(mergeTwoLists);
    })

    describe('迭代',() => {
        testCase(mergeTwoLists2);
    })
});

function testCase(fn: Function) {
    test('示例一', () => {
        const l1: ListNode | null = createListNode([1, 2, 4]);
        const l2: ListNode | null = createListNode([1, 3, 4]);
        const expected: ListNode | null = createListNode([1, 1, 2, 3, 4, 4]);

        expect(fn(l1, l2)).toEqual(expected);
    })

    test('示例二', () => {
        const l1: ListNode | null = createListNode([]);
        const l2: ListNode | null = createListNode([]);
        const expected: ListNode | null = createListNode([]);

        expect(fn(l1, l2)).toEqual(expected);
    })

    test('示例三', () => {
        const l1: ListNode | null = createListNode([]);
        const l2: ListNode | null = createListNode([0]);
        const expected: ListNode | null = createListNode([0]);

        expect(fn(l1, l2)).toEqual(expected);
    })
}

function createListNode(arr: number[]): ListNode | null {
    let list: ListNode | null = null;

    for (let i: number = arr.length - 1; i >= 0; i--) {
        list = new ListNode(arr[i], list);
    }

    return list;
}
