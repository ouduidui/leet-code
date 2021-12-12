import {ListNode, reverseKGroup} from "./index";

describe('K个一组翻转链表', () => {
    describe('模拟', () => {
        testCase(reverseKGroup);
    })
});

function testCase(fn: Function) {
    test('示例一', () => {
        const head: ListNode = createListNode([1, 2, 3, 4, 5]) as ListNode;
        const k: number = 2;
        const expected: ListNode = createListNode([2, 1, 4, 3, 5]) as ListNode;

        expect(fn(head, k)).toEqual(expected);
    })

    test('示例二', () => {
        const head: ListNode = createListNode([1, 2, 3, 4, 5]) as ListNode;
        const k: number = 3;
        const expected: ListNode = createListNode([3, 2, 1, 4, 5]) as ListNode;

        expect(fn(head, k)).toEqual(expected);
    })

    test('示例三', () => {
        const head: ListNode = createListNode([1, 2, 3, 4, 5]) as ListNode;
        const k: number = 1;
        const expected: ListNode = createListNode([1, 2, 3, 4, 5]) as ListNode;

        expect(fn(head, k)).toEqual(expected);
    })

    test('示例四', () => {
        const head: ListNode = createListNode([1]) as ListNode;
        const k: number = 1;
        const expected: ListNode = createListNode([1]) as ListNode;

        expect(fn(head, k)).toEqual(expected);
    })
}

function createListNode(arr: number[]): ListNode | null {
    let list: ListNode | null = null;

    for (let i: number = arr.length - 1; i >= 0; i--) {
        list = new ListNode(arr[i], list);
    }

    return list;
}
