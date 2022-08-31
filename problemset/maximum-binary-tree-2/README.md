# 最大二叉树 II

> 难度：中等
>
> https://leetcode.cn/problems/maximum-binary-tree-ii/

## 题目

**最大树** 定义：一棵树，并满足：其中每个节点的值都大于其子树中的任何其他值。

给你最大树的根节点 root 和一个整数 val 。

就像 [之前的问题](https://leetcode.cn/problems/maximum-binary-tree/) 那样，给定的树是利用 `Construct(a)` 例程从列表 `a（root = Construct(a)）`递归地构建的：

- 如果 `a` 为空，返回 `null` 。
- 否则，令 `a[i]` 作为 `a` 的最大元素。创建一个值为 `a[i]` 的根节点 `root` 。
- `root` 的左子树将被构建为 `Construct([a[0], a[1], ..., a[i - 1]])` 。
- `root` 的右子树将被构建为 `Construct([a[i + 1], a[i + 2], ..., a[a.length - 1]])` 。
- 返回 `root` 。
- 请注意，题目没有直接给出 `a` ，只是给出一个根节点 `root = Construct(a)` 。

假设 `b` 是 `a` 的副本，并在末尾附加值 `val`。题目数据保证 `b` 中的值互不相同。

返回 `Construct(b)` 。

### 示例

#### 示例 1：

![image](https://user-images.githubusercontent.com/54696834/187451205-72eb67d8-8567-4e46-abf5-ac4feca9cc82.png)

```
输入：root = [4,1,3,null,null,2], val = 5
输出：[5,4,null,1,3,null,null,2]
解释：a = [1,4,2,3], b = [1,4,2,3,5]
```

#### 示例 2：

![image](https://user-images.githubusercontent.com/54696834/187451237-ec6fbb39-a174-4677-90fe-5d1b2c29932d.png)

```
输入：root = [5,2,4,null,1], val = 3
输出：[5,2,4,null,1,null,3]
解释：a = [2,1,5,4], b = [2,1,5,4,3]
```

#### 示例 3：

![image](https://user-images.githubusercontent.com/54696834/187451256-196d264a-732a-474a-a354-8aedea28e8e9.png)

```
输入：root = [5,2,3,null,1], val = 4
输出：[5,2,4,null,1,3]
解释：a = [2,1,5,3], b = [2,1,5,3,4]
```

## 解题

```ts
/**
 * 遍历右子节点
 * @desc 时间复杂度 O(N)  空间复杂度 O(1)
 * @param root
 * @param val
 * @returns
 */
export function insertIntoMaxTree(root: TreeNode | null, val: number): TreeNode | null {
  let parent = null
  let cur = root
  while (cur) {
    if (val > cur.val) {
      if (!parent) return new TreeNode(val, root, null)

      const node = new TreeNode(val, cur, null)
      parent.right = node
      return root
    }
    else {
      parent = cur
      cur = cur.right
    }
  }
  parent!.right = new TreeNode(val)
  return root
}
```