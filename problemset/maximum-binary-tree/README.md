# 最大二叉树

> 难度：中等
>
> https://leetcode.cn/problems/maximum-binary-tree/

## 题目

给定一个不重复的整数数组 `nums` 。 **最大二叉树** 可以用下面的算法从 `nums` 递归地构建:

- 创建一个根节点，其值为 `nums` 中的最大值。
- 递归地在最大值 **左边** 的 **子数组前缀上** 构建左子树。
- 递归地在最大值 **右边** 的 **子数组后缀上** 构建右子树。

返回 `nums` 构建的 **最大二叉树** 。

### 示例

#### 示例 1：

![image](https://user-images.githubusercontent.com/54696834/185748819-dbfe0c41-c189-470c-8db1-43d59c262a71.png)

```
输入：nums = [3,2,1,6,0,5]
输出：[6,3,5,null,2,0,null,null,1]
解释：递归调用如下所示：
- [3,2,1,6,0,5] 中的最大值是 6 ，左边部分是 [3,2,1] ，右边部分是 [0,5] 。
    - [3,2,1] 中的最大值是 3 ，左边部分是 [] ，右边部分是 [2,1] 。
        - 空数组，无子节点。
        - [2,1] 中的最大值是 2 ，左边部分是 [] ，右边部分是 [1] 。
            - 空数组，无子节点。
            - 只有一个元素，所以子节点是一个值为 1 的节点。
    - [0,5] 中的最大值是 5 ，左边部分是 [0] ，右边部分是 [] 。
        - 只有一个元素，所以子节点是一个值为 0 的节点。
        - 空数组，无子节点。
```

#### 示例 2：

![image](https://user-images.githubusercontent.com/54696834/185748827-3036b79a-4a57-46ed-a27d-45496a81c8c1.png)

```
输入：nums = [3,2,1]
输出：[3,null,2,null,1]
```

## 解题

### 递归

```ts 
/**
 * 递归
 * @desc 时间复杂度 O(N²)  空间复杂度 O(N)
 * @param nums
 * @returns
 */
export function constructMaximumBinaryTree(nums: number[]): TreeNode | null {
  const construct = (nums: number[], left: number, right: number) => {
    if (left > right)
      return null

    let best = left
    for (let i = left + 1; i <= right; ++i) {
      if (nums[i] > nums[best])
        best = i
    }
    const node = new TreeNode(nums[best])
    node.left = construct(nums, left, best - 1)
    node.right = construct(nums, best + 1, right)
    return node
  }

  return construct(nums, 0, nums.length - 1)
}
```

### 单调栈

```ts 
/**
 * 单调栈
 * @desc 时间复杂度 O(N)  空间复杂度 O(N)
 * @param nums
 * @returns
 */
export function constructMaximumBinaryTree2(nums: number[]): TreeNode | null {
  const n = nums.length
  const stack: number[] = []
  const tree = new Array(n).fill(0)
  for (let i = 0; i < n; ++i) {
    tree[i] = new TreeNode(nums[i])
    while (stack.length && nums[i] > nums[stack[stack.length - 1]]) {
      tree[i].left = tree[stack[stack.length - 1]]
      stack.pop()
    }
    if (stack.length)
      tree[stack[stack.length - 1]].right = tree[i]

    stack.push(i)
  }
  return tree[stack[0]]
}
```