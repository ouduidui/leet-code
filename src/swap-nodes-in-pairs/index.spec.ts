import {ListNode, swapPairs, swapPairs2} from "./index";

describe('两两交换链表中的节点', () => {
    describe('迭代', () => {
        testCase(swapPairs);
    })

    describe('递归', () => {
        testCase(swapPairs2);
    })
});

function testCase(fn: Function) {
    test('示例一', () => {
        const head: ListNode = createListNode([1, 2, 3, 4]) as ListNode;
        const expected: ListNode = createListNode([2, 1, 4, 3]) as ListNode;

        expect(fn(head)).toEqual(expected);
    })

    test('示例二', () => {
        const head: null = createListNode([]) as null;
        const expected: null = createListNode([]) as null;

        expect(fn(head)).toEqual(expected);
    })

    test('示例三', () => {
        const head: ListNode = createListNode([1]) as ListNode;
        const expected: ListNode = createListNode([1]) as ListNode;

        expect(fn(head)).toEqual(expected);
    })
}

function createListNode(arr: number[]): ListNode | null {
    let list: ListNode | null = null;

    for (let i: number = arr.length - 1; i >= 0; i--) {
        list = new ListNode(arr[i], list);
    }

    return list;
}
