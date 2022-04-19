# 二叉树的序列化与反序列化

> 难度：困难
>
> https://leetcode-cn.com/problems/serialize-and-deserialize-binary-tree/

## 题目

序列化是将一个数据结构或者对象转换为连续的比特位的操作，进而可以将转换后的数据存储在一个文件或者内存中，同时也可以通过网络传输到另一个计算机环境，采取相反方式重构得到原数据。

请设计一个算法来实现二叉树的序列化与反序列化。这里不限定你的序列 / 反序列化算法执行逻辑，你只需要保证一个二叉树可以被序列化为一个字符串并且将这个字符串反序列化为原始的树结构。

提示: 输入输出格式与 LeetCode 目前使用的方式一致，详情请参阅 [LeetCode 序列化二叉树的格式](https://leetcode-cn.com/faq/#binary-tree)。你并非必须采取这种方式，你也可以采用其他的方法解决这个问题。


### 示例

#### 示例 1：

![serdeser](https://user-images.githubusercontent.com/54696834/163906621-587db30d-a141-4af1-94de-872535d43902.jpg)

```
输入：root = [1,2,3,null,null,4,5]
输出：[1,2,3,null,null,4,5]
```

#### 示例 2：

```
输入：root = []
输出：[]
```

#### 示例 3：

```
输入：root = [1]
输出：[1]
```

#### 示例 4：

```
输入：root = [1,2]
输出：[1,2]
```

## 解题

```ts
/**
 * 序列化
 * @desc 时间复杂度 O(N)  空间复杂度 O(N)
 * @param root
 * @returns
 */
export function serialize(root: TreeNode | null): string {
  return dfs(root)

  function dfs(node: TreeNode | null, str = ''): string {
    if (node === null) {
      str += 'Node,'
    }
    else {
      str += `${node.val}` + ','
      str = dfs(node.left, str)
      str = dfs(node.right, str)
    }
    return str
  }
}

/**
 * 反序列化
 * @desc 时间复杂度 O(N)  空间复杂度 O(N)
 * @param data
 * @returns
 */
export function deserialize(data: string): TreeNode | null {
  return dfs(data.split(','))

  function dfs(list: string[]): TreeNode | null {
    if (list[0] === 'Node') {
      list.shift()
      return null
    }

    return new TreeNode(Number(list.shift()!), dfs(list), dfs(list))
  }
}
```