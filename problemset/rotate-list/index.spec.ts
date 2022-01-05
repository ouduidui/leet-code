import {ListNode, createListNode} from "../../utils/listNode";
import {rotateRight} from "./index";

describe('旋转链表', () => {
    describe('合并链表', () => {
        testCase(rotateRight)
    })
});

function testCase(fn: (head: ListNode, k: number) => ListNode | null) {
    it('示例一', () => {
        const head = createListNode([1, 2, 3, 4, 5]) as ListNode;
        const k = 2;
        const expected = createListNode([4, 5, 1, 2, 3]);

        expect(fn(head, k)).toEqual(expected)
    })

    it('示例二', () => {
        const head = createListNode([0, 1, 2]) as ListNode;
        const k = 4;
        const expected = createListNode([2, 0, 1]);

        expect(fn(head, k)).toEqual(expected)
    })
}