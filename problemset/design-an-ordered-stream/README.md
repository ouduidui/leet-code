# 涉及有序流

> 难度：简单
>
> https://leetcode.cn/problems/design-an-ordered-stream/

## 题目

有 `n` 个 `(id, value)` 对，其中 `id` 是 `1` 到 `n` 之间的一个整数，`value` 是一个字符串。不存在 `id` 相同的两个 `(id, value) `对。

设计一个流，以 **任意** 顺序获取 `n` 个 `(id, value)` 对，并在多次调用时 按 `id` **递增的顺序** 返回一些值。

实现 `OrderedStream` 类：

- `OrderedStream(int n)` 构造一个能接收 `n` 个值的流，并将当前指针 `ptr` 设为 `1` 。
- `String[] insert(int id, String value)` 向流中存储新的 `(id, value)` 对。存储后：
  - 如果流存储有 `id = ptr` 的 `(id, value)` 对，则找出从 `id = ptr` 开始的 **最长 `id` 连续递增序列** ，并 **按顺序** 返回与这些 `id` 关联的值的列表。然后，将 `ptr` 更新为最后那个  `id + 1` 。
  - 否则，返回一个空列表。

### 示例：

![image](https://user-images.githubusercontent.com/54696834/184781728-ecd3a61d-141f-4c49-bf8b-9c7b384d6ade.png)

```
输入
["OrderedStream", "insert", "insert", "insert", "insert", "insert"]
[[5], [3, "ccccc"], [1, "aaaaa"], [2, "bbbbb"], [5, "eeeee"], [4, "ddddd"]]
输出
[null, [], ["aaaaa"], ["bbbbb", "ccccc"], [], ["ddddd", "eeeee"]]

解释
OrderedStream os= new OrderedStream(5);
os.insert(3, "ccccc"); // 插入 (3, "ccccc")，返回 []
os.insert(1, "aaaaa"); // 插入 (1, "aaaaa")，返回 ["aaaaa"]
os.insert(2, "bbbbb"); // 插入 (2, "bbbbb")，返回 ["bbbbb", "ccccc"]
os.insert(5, "eeeee"); // 插入 (5, "eeeee")，返回 []
os.insert(4, "ddddd"); // 插入 (4, "ddddd")，返回 ["ddddd", "eeeee"]
```

## 解题

```ts 
/**
 * 使用数组存储 + 遍历
 */
export class OrderedStream {
  private ptr = 1
  private stream: string[]

  constructor(n: number) {
    this.stream = new Array(n + 1)
  }

  insert(idKey: number, value: string): string[] {
    this.stream[idKey] = value
    const res: string[] = []
    while (this.ptr < this.stream.length && this.stream[this.ptr]) {
      res.push(this.stream[this.ptr])
      this.ptr++
    }

    return res
  }
}
```