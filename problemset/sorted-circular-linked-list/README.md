# 排序的循环链表

> 难度：中等
>
> https://leetcode.cn/problems/4ueAj6/

## 题目

给定循环单调非递减列表中的一个点，写一个函数向这个列表中插入一个新元素 `insertVal` ，使这个列表仍然是循环升序的。

给定的可以是这个列表中任意一个顶点的指针，并不一定是这个列表中最小元素的指针。

如果有多个满足条件的插入位置，可以选择任意一个位置插入新的值，插入后整个列表仍然保持有序。

如果列表为空（给定的节点是 `null`），需要创建一个循环有序列表并返回这个节点。否则。请返回原先给定的节点。

### 示例

#### 示例 1：

![image](https://user-images.githubusercontent.com/54696834/174420363-e8a26597-0b8f-4ca9-80dd-7becccd386af.png)

```
输入：head = [3,4,1], insertVal = 2
输出：[3,4,1,2]
解释：在上图中，有一个包含三个元素的循环有序列表，你获得值为 3 的节点的指针，我们需要向表中插入元素 2 。新插入的节点应该在 1 和 3 之间，插入之后，整个列表如上图所示，最后返回节点 3 。
```

![image](https://user-images.githubusercontent.com/54696834/174420379-641a0794-8f3b-450e-bb69-5c6c28f40d2e.png)

#### 示例 2：

```
输入：head = [], insertVal = 1
输出：[1]
解释：列表为空（给定的节点是 null），创建一个循环有序列表并返回这个节点。
```

#### 示例 3：

```
输入：head = [1], insertVal = 0
输出：[1,0]
```

## 解题

```ts 
/**
 * 一次遍历
 * @desc 时间复杂度 O(N)  空间复杂度 O(1)
 * @param head
 * @param insertVal
 * @returns
 */
export function insert(head: Node | null, insertVal: number): Node | null {
  const node = new Node(insertVal)
  if (!head) {
    node.next = node
    return node
  }
  if (head.next === head) {
    head.next = node
    node.next = head
    return head
  }

  let cur = head
  let next = head.next!

  while (next !== head) {
    if (insertVal >= cur.val && insertVal <= next.val)
      break

    if (cur.val > next.val) {
      if (insertVal > cur.val || insertVal < next.val)
        break
    }
    cur = cur.next!
    next = next.next!
  }

  cur.next = node
  node.next = next

  return head
}
```